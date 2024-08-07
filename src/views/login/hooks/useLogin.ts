import { useForm, Controller } from 'react-hook-form';
import { loginFormSchema } from '../../../helpers/yupHelper';
import { useLoginMutation } from '../../../services/authService';

const useLogin = () => {
  const [login] = useLoginMutation();

  const { handleSubmit, control, getValues } = useForm({
    resolver: loginFormSchema,
    mode: 'all',
  });

  const onLogin = () => login(getValues());

  return {
    control,
    handleSubmit,
    onLogin,
    Controller,
  };
};

export default useLogin;
