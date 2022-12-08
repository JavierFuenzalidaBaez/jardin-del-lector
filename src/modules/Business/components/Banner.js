import { Flex, Image } from '@chakra-ui/react';

//assets
import BannerImg from 'assets/images/fondo-biblioteca-min.jpg';

const Banner = () => {
  return (
    <Flex
      border="10px solid rgbargb(30, 31, 62, 0.2)"
      justifyContent="center"
      alignItems="center"
    >
      <Image boxSize="100%" src={BannerImg} alt="banner" />
    </Flex>
  );
};
export default Banner;
