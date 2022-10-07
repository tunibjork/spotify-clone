import Head from "next/head";
import Image from "next/image";
import { Artist } from "@prisma/client";
import styles from "../styles/Home.module.css";
import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";

interface HomeProps {
  artists: Artist[];
}

export default function Home({ artists }: HomeProps) {
  return (
    <GradientLayout
      color="yellow"
      image=""
      roundImage={false}
      subtitle="profile"
      title="Samuel Fanhais"
      details="15 public playlists"
    >
      <div>children</div>
    </GradientLayout>
  );
}

export async function getServerSideProps() {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
}
