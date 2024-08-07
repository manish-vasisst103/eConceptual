import React, { useCallback } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useDropdownStyle } from './DropdownModalStyle';
import { UsableModalComponentProp, ModalfyParams } from 'react-native-modalfy';
import AppText from '../../text/AppText';
import Svg from '../../../assets/svg';
import { closeModal } from '../../../helpers/utils';
import { MODALS } from '../../../constants/routeConstant';
interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const DropdownModal: React.FC<Props> = ({ modal }) => {
  const { styles, colors } = useDropdownStyle();
  const data = modal.getParam('data', []);
  const onPressItem = modal.getParam('onPressItem', () => {});
  const val = modal.getParam('val', null);

  const onPress = useCallback(
    (id: number) => {
      onPressItem(id);
      closeModal(MODALS.dropdown);
    },
    [onPressItem],
  );

  const renderItems = useCallback(
    (item: any, index: number) => (
      <Pressable
        key={index?.toString?.()}
        style={styles.itemContainer}
        onPress={() => onPress(item?.id)}>
        <AppText numberOfLines={1} style={styles.item}>
          {item?.name || ''}
        </AppText>
        {val === item?.id && (
          <Svg.multiCheckIcon height={18} width={18} fill={colors.gray} />
        )}
      </Pressable>
    ),
    [styles, colors, onPress, val],
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
