import { Button } from '@chakra-ui/react';

const CustomButton = ({
  bg = 'bluishBlack.50',
  variant = 'outline',
  children,
  ...props
}) => {
  return (
    <Button
      bg={bg}
      _hover={{
        bg: `${bg}0`,
      }}
      variant="outline"
      {...props}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
