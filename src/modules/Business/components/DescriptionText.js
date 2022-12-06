import { Box, Spacer, Text } from '@chakra-ui/react';

const DescriptionText = () => {
  return (
    <Box py={10} fontWeight={700} fontSize="lg">
      <Text>
        Somos la biblioteca libre más grande de Chile. Abrimos nuestra primera
        biblioteca en la municipalidad de San Bernardo y online.
      </Text>
      <Text>Hay un montón de libros para satisfacer a las personas.</Text>
      <Text>
        Detrás de todo esto hay un equipo conformado por personas amantes de las
        lecturas.
      </Text>
      <Spacer py={2} />
      <Text>
        Como empresa estamos comprometidos en continuar acercando la lectura a
        más personas y seguir siendo una biblioteca familiar y calidad, pero a
        la vez actualizada y moderna, donde puedes encontrar lo que necesites de
        la forma más rápida y amigable posible, gracias a la incorporación y uso
        de nuevas tecnologías.
      </Text>
    </Box>
  );
};
export default DescriptionText;
