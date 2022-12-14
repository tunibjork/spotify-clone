import React from "react";
import NextImage from "next/image";
import { Box, Flex, List, Divider } from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import SideMenuItem from "./SideMenuItem";
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favourites",
    icon: MdFavorite,
    route: "/favourites",
  },
];

export default function Sidebar() {
  const { playlists } = usePlaylist();

  return (
    <Flex
      direction="column"
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="10px"
      paddingTop="20px"
      color="gray"
    >
      <Box marginBottom="10px" marginX="20px">
        <NextImage src="/spotify_logo.svg" height={60} width={150} />
      </Box>
      <Divider color="gray.800" />
      <Box margin="20px">
        <List spacing={2}>
          {navMenu.map((item) => (
            <SideMenuItem item={item} key={item.name} />
          ))}
        </List>
      </Box>
      <Divider color="gray.800" />
      <Box margin="20px">
        <List spacing={2}>
          {musicMenu.map((item) => (
            <SideMenuItem item={item} key={item.name} />
          ))}
        </List>
      </Box>
      <Divider color="gray.800" />
      <Box
        height="0%"
        overflowY="auto"
        flexGrow={1}
        margin="20px" // paddingX="20px"
      >
        <List spacing={2}>
          {playlists.map((list) => (
            <SideMenuItem item={list} key={list.name} />
          ))}
        </List>
      </Box>
    </Flex>
  );
}
