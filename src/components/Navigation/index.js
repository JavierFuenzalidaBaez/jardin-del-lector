import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

//components
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ContainerBox from 'components/ContainerBox';

//assets
import Logo from 'assets/images/logo.png';

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <ContainerBox>
      <Box>
        <Flex
          bg="bluishBlack.100"
          color="white"
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              _hover={{
                bg: 'bluishBlack.500',
                color: 'white',
              }}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'end', md: 'start' }}>
            <Stack direction="row">
              <Image boxSize="50px" objectFit="cover" src={Logo} alt="logo" />
            </Stack>

            <Flex
              display={{ base: 'none', md: 'flex' }}
              alignItems={{
                md: 'center',
              }}
              ml={10}
            >
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </ContainerBox>
  );
}
