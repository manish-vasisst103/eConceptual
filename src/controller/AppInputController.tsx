import { Controller } from 'react-hook-form';
import React from 'react';
import AppTextInput, {
  InputProps,
} from '../components/textInput/appTextInput/AppTextInput';

interface Props extends InputProps {
  control: any;
  name: string;
}

const AppInputController = React.memo(({ control, name, ...rest }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => (
        <AppTextInput
          value={value}
          onBlur={onBlur}
          onChangeText={onChange}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
});
export default AppInputController;
