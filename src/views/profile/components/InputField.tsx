import React from 'react';
import DropdownController from '../../../controller/DropdownController';
import AppInputController from '../../../controller/AppInputController';
import { ProfileInputItems } from '../../../interfaces/appInterface';
import { useProfileStyle } from '../ProfileStyle';

interface Props {
  item: ProfileInputItems;
  control: any;
}

const InputField = React.memo(({ item, control }: Props) => {
  const { styles } = useProfileStyle();

  return (
    <>
      {item?.id === 4 ? (
        <DropdownController
          control={control}
          containerStyle={styles.input}
          key={item?.id}
          name={item?.name}
          label={item?.label}
          data={item?.data || []}
        />
      ) : (
        <AppInputController
          control={control}
          style={styles.input}
          key={item?.id}
          editable={item?.id !== 2}
          name={item?.name}
          label={item?.label}
          placeholder={item?.placeholder}
          keyboardType={item?.keyboardType}
        />
      )}
    </>
  );
});

export default InputField;
