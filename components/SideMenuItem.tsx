import React from "react";
import NextLink from "next/link";
import { ListItem, ListIcon, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import { IconType } from "react-icons";

interface SideMenuItemProps {
  name: string;
  icon: IconType;
  route: string;
  children?: React.ReactNode;
}

export default function SideMenuItem({ item }: { item: SideMenuItemProps }) {
  return (
    <ListItem key={item.name} fontSize="16px" fontWeight="medium">
      <LinkBox>
        <NextLink href={item.route} passHref>
          <LinkOverlay>
            {item.icon && <ListIcon as={item.icon} color="white" />}
            {item.name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
}
