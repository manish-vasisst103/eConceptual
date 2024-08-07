import { Controller } from 'react-hook-form';
import React from 'react';
import Dropdown, { DropdownProps } from '../components/dropdown/Dropdown';

interface Props extends DropdownProps {
  control: any;
  name: string;
}

const DropdownController = React.memo(({ control, name, ...rest }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Dropdown
          val={value}
          onPressItem={onChange}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
});
export default DropdownController;
