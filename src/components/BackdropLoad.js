import { Flex, Spinner } from '@chakra-ui/react';

const BackdropLoad = () => (
  <Flex
    w="100vw"
    minH="100vh"
    bg="bluishBlack.100"
    direction="column"
    justifyContent="center"
    alignItems="center"
    gap={2}
  >
    <Spinner
      thickness="6px"
      speed="0.90s"
      emptyColor="bluishBlack.50"
      color="bluishBlack.500"
      size="xl"
    />
    Cargando...
  </Flex>
);

export default BackdropLoad;
