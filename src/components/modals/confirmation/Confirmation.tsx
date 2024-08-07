import React from 'react';
import { View } from 'react-native';
import { useConfirmationStyle } from './ConfirmationStyle';
import { UsableModalComponentProp, ModalfyParams } from 'react-native-modalfy';
import AppText from '../../text/AppText';
import { closeModal } from '../../../helpers/utils';
import { MODALS } from '../../../constants/routeConstant';
import AppButton from '../../button/AppButton';
// import FooterButton from '../../footerButton/FooterButton';
interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const ConfirmationModal: React.FC<Props> = ({ modal }) => {
  const { styles } = useConfirmationStyle();
  const title = modal.getParam('title', 'Are you sure?');
  const subTitle = modal.getParam('subTitle', '');
  const onPressConfirm = modal.getParam('onPressConfirm', null);

  const onCancel = () => closeModal(MODALS.confirmation);

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
      <View style={styles.footerContainer}>
        <AppButton
          labelStyle={styles.label}
          style={styles.button}
          title={'No'}
          onPress={onCancel}
        />
        <AppButton
          labelStyle={styles.label}
          style={[styles.button, styles.confirmButton]}
          title={'Yes'}
          onPress={onPressConfirm}
        />
      </View>
    </View>
  );
};

export default ConfirmationModal;
