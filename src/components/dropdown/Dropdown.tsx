import React, { useMemo } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { useDropdownStyle } from './DropdownStyle';
import AppText from '../text/AppText';
import Svg from '../../assets/svg';
import { openModal } from '../../helpers/utils';
import { MODALS } from '../../constants/routeConstant';
import { Label } from '../text/Label';

interface DataItem {
  id: number;
  name: string;
  [key: string]: any;
}

export interface DropdownProps {
  containerStyle?: StyleProp<ViewStyle>;
  onPressItem?: (id: number) => void;
  val?: number;
  data: Array<DataItem>;
  error?: string;
  label?: string;
  isRequired?: boolean;
}

const Dropdown = React.memo(
  ({
    containerStyle = {},
    onPressItem,
    val,
    data,
    error,
    label,
    isRequired,
  }: DropdownProps) => {
    const { styles, colors } = useDropdownStyle();

    const openDropdown = () => {
      openModal(MODALS.dropdown, {
        data,
        onPressItem,
        val,
      });
    };

    const getItemLabel = useMemo(() => {
      const filterData = data?.filter?.(i => i?.id === val);
      return filterData?.length ? filterData[0]?.name : '';
    }, [data, val]);

    return (
      <View style={[styles.container, containerStyle]}>
        {label && <Label label={label} isRequired={isRequired} />}
        <Pressable
          onPress={openDropdown}
          style={[styles.btnContainer, error ? styles.errorWrapper : {}]}>
          <AppText fontWeight="regular" style={styles.btnLabel}>
            {getItemLabel || 'Please select'}
          </AppText>
          <Svg.arrowDownIcon height={16} width={16} fill={colors.gray} />
        </Pressable>
        {error && <AppText style={styles.error}>{error}</AppText>}
      </View>
    );
  },
);

export default Dropdown;
