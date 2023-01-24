import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export function MenuHamburger() {
  return (
    <Box display={{ base: "none", md: "block" }}>
      <Menu>
        <MenuButton
          as={IconButton}
          border="2px solid white"
          boxShadow="inner"
          aria-label="Options"
          color="white"
          _hover={{ color: "gray.500", bg: "white" }}
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>contact</MenuItem>
          <MenuItem>Login</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
