import { Flex, Image } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Flex
      border="10px solid rgbargb(30, 31, 62, 0.2)"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        boxSize={{
          sm: '100%',
          lg: '75%',
        }}
        src="static/fondo-min.png"
        alt="banner"
      />
    </Flex>
  );
};
export default Banner;
