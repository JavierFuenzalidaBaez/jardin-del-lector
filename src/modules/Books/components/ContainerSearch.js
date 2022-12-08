import { Flex } from '@chakra-ui/react';

//components
import Search from 'components/UI/Search';

const ContainerSearch = () => {
  return (
    <Flex
      w={{
        base: '100%',
        lg: '40%',
        xl: '40%',
      }}
      ml={{
        base: 0,
        lg: 'auto',
      }}
      my={2}
    >
      <Search playHolder="Buscar Libro" />
    </Flex>
  );
};
export default ContainerSearch;
