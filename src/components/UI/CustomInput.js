import { PhoneIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const CustomInput = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<PhoneIcon color="gray.300" />}
      />
      <Input type="tel" placeholder="Phone number" />
    </InputGroup>
  );
};
export default CustomInput;
