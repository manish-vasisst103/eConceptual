import React from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { useDropdownStyle } from './DropdownStyle';
import AppText from '../text/AppText';
import Svg from '../../assets/svg';
import { openModal } from '../../helpers/utils';
import { MODALS } from '../../constants/routeConstant';
import { DEFAULT_COLORS } from '../../styles';

interface DataItem {
  name: string;
}

export interface DropdownProps {
  containerStyle?: StyleProp<ViewStyle>;
  onPressItem?: (id: number) => void;
  val?: number;
  data: Array<DataItem>;
  error?: string;
  label?: string;
}

const Dropdown = React.memo(
  ({
    containerStyle = {},
    onPressItem,
    val,
    data,
    error,
    label,
  }: DropdownProps) => {
    const styles = useDropdownStyle();

    const openDropdown = () => {
      openModal(MODALS.dropdown, {
        data,
        onPressItem,
        val,
      });
    };

    return (
      <View style={styles.container}>
        <AppText style={styles.label} fontWeight="regular">
          {label || ''}
        </AppText>
        <Pressable
          onPress={openDropdown}
          style={[
            styles.btnContainer,
            error ? styles.errorWrapper : {},
            containerStyle,
          ]}>
          <AppText fontWeight="regular" style={styles.btnLabel}>
            {val || 'Please select'}
          </AppText>
          <Svg.arrowDownIcon
            height={16}
            width={16}
            fill={DEFAULT_COLORS.gray}
          />
        </Pressable>
        {error && <AppText style={styles.error}>{error}</AppText>}
      </View>
    );
  },
);

export default Dropdown;
