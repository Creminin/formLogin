import { Header } from "./components/commons/Header";
import { Box } from "@chakra-ui/react";

import backgroundImage from "../public/background_image.jpg";

function App() {
  return (
    <Box h="100vh" bgImage={backgroundImage} bgSize="cover">
      <Header />
    </Box>
  );
}
export default App;
