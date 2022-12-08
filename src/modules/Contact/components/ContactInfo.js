import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { EmailIcon, InfoIcon } from '@chakra-ui/icons';

//assets
import InstagramImg from 'assets/images/icono-instagram.png';

const ContactInfo = () => {
  return (
    <Flex
      ml={{
        base: 0,
        lg: 'auto',
      }}
      direction="column"
      alignItems={{
        base: 'start',
        xs: 'center',
        sm: 'center',
        md: 'center',
        lg: 'start',
      }}
      gap={8}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Image
          boxSize={{
            base: '30px',
            lg: '40px',
          }}
          objectFit="cover"
          src={InstagramImg}
          alt="logoInstagram"
        />
        <Text>@JardinDelLector</Text>
      </Stack>
      {/* - */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <EmailIcon boxSize={8} />
        <Text>jardinDelLector@outlook.es</Text>
      </Stack>
      {/* - */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <InfoIcon boxSize={8} />
        <Box>
          <Text>Municipalidad san bernardo</Text>
          <Text>Eyzaguirre 450</Text>
        </Box>
      </Stack>
    </Flex>
  );
};
export default ContactInfo;
