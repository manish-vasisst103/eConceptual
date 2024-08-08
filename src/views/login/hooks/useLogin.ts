import { useForm } from 'react-hook-form';
import { loginFormSchema } from '../../../helpers/yupHelper';
import { useLoginMutation } from '../../../services/authService';
import { useState } from 'react';

const useLogin = () => {
  const [login] = useLoginMutation();
  const [secureText, setSecureText] = useState<boolean>(true);
  const { handleSubmit, control, getValues } = useForm({
    resolver: loginFormSchema,
    mode: 'all',
  });

  const onLogin = () => login(getValues());

  return {
    control,
    handleSubmit,
    onLogin,
    secureText,
    setSecureText,
  };
};

export default useLogin;
