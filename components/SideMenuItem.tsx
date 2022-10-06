import React from "react";
import NextLink from "next/link";
import { ListItem, ListIcon, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import { IconType } from "react-icons";
import { MdOutlineQueueMusic } from "react-icons/md";

interface SideMenuItemProps {
  name: string;
  icon?: IconType;
  route?: string;
  // children?: React.ReactNode;
}

export default function SideMenuItem({ item }: { item: SideMenuItemProps }) {
  return (
    <ListItem key={item.name} fontSize="16px" fontWeight="medium">
      <LinkBox>
        <NextLink href={item.route || "/"} passHref>
          <LinkOverlay>
            <ListIcon as={item.icon || MdOutlineQueueMusic} color="white" />
            {item.name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
}
