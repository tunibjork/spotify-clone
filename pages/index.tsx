import Head from "next/head";
// import Image from "next/image";
import { Artist } from "@prisma/client";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";
import { useMe, usePlaylistCount } from "../lib/hooks";

interface HomeProps {
  artists: Artist[];
}

export default function Home({ artists }: HomeProps) {
  const { user } = useMe();
  const { playlistCount } = usePlaylistCount();
  return (
    <GradientLayout
      color="yellow"
      image="/tunibjork.jpg"
      roundImage
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      details={`${playlistCount} public playlists`}
    >
      <Box padding="40px" color="white">
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Top artists this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box width="200px" paddingRight="20px" marginTop="20px">
              <Box bg="gray.900" borderRadius="6px" padding="20px" width="100%">
                <Image
                  src="/tunibjork.jpg"
                  borderRadius="100%"
                  boxShadow="xl"
                />
                <Box marginTop="10px">
                  <Text fontSize="large" fontWeight="bold">
                    {artist.name}
                  </Text>
                  <Text fontSize="xs">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
}

export async function getServerSideProps() {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
}
