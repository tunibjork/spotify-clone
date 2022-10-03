import { SkeletonText } from "@chakra-ui/react";
import { PrismaClient, Song } from "@prisma/client";
import brypt from "bcrypt";
import { url } from "inspector";
import { artistsData } from "./songsData";

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(artistsData.map(async (artist) => {
    return prisma.artist.upsert({
      where: {name: artist.name},
      update: {},
      create: {
        name: artist.name,
        songs: {
          create: artist.songs.map(song => ({
            name: song.name,
            duration: song.duration,
            url: song.url,
          }))
        }
      }
    })
  })
};

run()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
