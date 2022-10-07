import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import GradientLayout from "../components/gradientLayout";

export default function Home() {
  return (
    <GradientLayout
      color="yellow"
      image=""
      roundImage={false}
      subtitle="profile"
      title="Samuel Fanhais"
      details="15 public playlists"
    >
      <div>home page</div>
    </GradientLayout>
  );
}
