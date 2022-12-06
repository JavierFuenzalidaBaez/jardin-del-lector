import { Box } from '@chakra-ui/react';

const paddingDict = {
  base: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
  xxl: 50,
  xxxl: 60,
};

const ContainerBox = ({ size = 'sm', children, ...props }) => {
  return (
    <Box
      paddingLeft={{
        base: paddingDict['base'],
        lg: paddingDict[size],
        xl: paddingDict[size],
      }}
      paddingRight={{
        base: paddingDict['base'],
        lg: paddingDict[size],
        xl: paddingDict[size],
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
export default ContainerBox;
