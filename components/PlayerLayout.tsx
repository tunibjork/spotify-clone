import { Box } from "@chakra-ui/layout";
import React from "react";
import Sidebar from "./Sidebar";

interface PlayerLayoutProps {
  children?: React.ReactNode;
}

export default function PlayerLayout({
  children,
}: {
  children: PlayerLayoutProps;
}) {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box height="100px" position="absolute" left="0" bottom="0">
        Player
      </Box>
    </Box>
  );
}
