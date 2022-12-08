import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';

const CustomInput = ({
  type = 'text',
  isRequired = false,
  label = 'inputLabel',
  error = null,
  isTextArea = false,
  ...props
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={error} {...props}>
      <FormLabel>{label}</FormLabel>
      {!isTextArea ? (
        <Input type={type} focusBorderColor="bluishBlack.50" />
      ) : (
        <Textarea focusBorderColor="bluishBlack.50" />
      )}
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
export default CustomInput;
