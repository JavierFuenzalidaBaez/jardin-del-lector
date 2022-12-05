import { Stack, useColorModeValue } from '@chakra-ui/react';

//conmponents
import MobileNavItem from 'components/Navigation/MobileNavItem';

//utils
import { navItems } from 'utils';

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('bluishBlack.500', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      borderRadius={8}
    >
      {navItems.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
