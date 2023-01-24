import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Menu } from "./menu";
import { MenuHamburger } from "./hamburger";

export function Header() {
  return (
    <Flex alignItems="center" w="100%" p="4" justify="space-between">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Heading
          color="gray.400"
          _hover={{ color: "gray.500" }}
          cursor="pointer"
        >
          <Text stroke="2px solid">Logo</Text>
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 150 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Menu />
        <MenuHamburger />
      </motion.div>
    </Flex>
  );
}
