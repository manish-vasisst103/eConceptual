import React, { useCallback } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useDropdownStyle } from './DropdownModalStyle';
import { UsableModalComponentProp, ModalfyParams } from 'react-native-modalfy';
import AppText from '../../text/AppText';
import Svg from '../../../assets/svg';
import { closeModal } from '../../../helpers/utils';
import { MODALS } from '../../../constants/routeConstant';
import { DEFAULT_COLORS } from '../../../styles';
interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const DropdownModal: React.FC<Props> = ({ modal }) => {
  const styles = useDropdownStyle();
  const data = modal.getParam('data', []);
  const onPressItem = modal.getParam('onPressItem', () => {});
  const val = modal.getParam('val', null);

  const onPress = useCallback(
    (name: string) => {
      onPressItem(name);
      closeModal(MODALS.dropdown);
    },
    [onPressItem],
  );

  const renderItems = useCallback(
    (item: { name: string }) => (
      <Pressable
        key={item?.name}
        style={styles.itemContainer}
        onPress={() => onPress(item?.name)}>
        <AppText numberOfLines={1} style={styles.item}>
          {item?.name || ''}
        </AppText>
        {val?.toLowerCase?.() === item?.name?.toLowerCase?.() && (
          <Svg.multiCheckIcon
            height={18}
            width={18}
            fill={DEFAULT_COLORS.gray}
          />
        )}
      </Pressable>
    ),
    [styles, onPress, val],
  );

  return (
    <Pressable
      onPress={() => closeModal(MODALS.dropdown)}
      style={styles.mainContainer}>
      <View style={styles.container}>
        <AppText fontWeight="bold" style={styles.title}>
          Select Option
        </AppText>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          {data?.length ? data.map(renderItems) : <></>}
        </ScrollView>
      </View>
    </Pressable>
  );
};

export default DropdownModal;
