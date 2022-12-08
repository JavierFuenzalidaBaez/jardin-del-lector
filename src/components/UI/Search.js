import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

const Search = ({ playHolder }) => {
  return (
    <InputGroup>
      <InputRightElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        focusBorderColor="bluishBlack.50"
        type="text"
        placeholder={playHolder || 'Buscar...'}
      />
    </InputGroup>
  );
};
export default Search;
