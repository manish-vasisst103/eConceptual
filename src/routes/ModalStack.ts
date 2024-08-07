import { createModalStack, ModalStackConfig } from 'react-native-modalfy';
import { MODALS } from '../constants/routeConstant';
import ConfirmationModal from '../components/modals/confirmation/Confirmation';
import DropdownModal from '../components/modals/dropdown/DropdownModal';

const modalConfig: ModalStackConfig = {
  [MODALS.confirmation]: {
    modal: ConfirmationModal,
    backBehavior: 'none',
    disableFlingGesture: true,
  },
  [MODALS.dropdown]: {
    modal: DropdownModal,
    backBehavior: 'clear',
    disableFlingGesture: true,
  },
};
const defaultOptions = { backdropOpacity: 0.8 };

export default createModalStack(modalConfig, defaultOptions);
