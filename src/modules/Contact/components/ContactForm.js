import { Flex, Spacer } from '@chakra-ui/react';

//components
import CustomInput from 'components/UI/CustomInput';
import CustomButton from 'components/UI/CustomButton';

const ContactForm = () => {
  return (
    <form>
      <Flex direction="column" gap={2}>
        <CustomInput isRequired={true} label="Nombre" />
        <CustomInput isRequired={true} label="Correo" type="email" />
        <CustomInput isRequired={true} label="Teléfono" type="number" />
        <CustomInput
          isRequired={true}
          label="Mensaje"
          type="number"
          isTextArea={true}
        />
        <Spacer py={4} />
        <CustomButton>ENVIAR</CustomButton>
      </Flex>
    </form>
  );
};
export default ContactForm;
