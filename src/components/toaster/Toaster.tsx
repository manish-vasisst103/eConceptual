import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import SVGIcon from '../../assets/svg';

import {
  ToastTitleInterface,
  ToastIconInterface,
} from '../../interfaces/toast';
import { useToasterStyle } from './ToasterStyle';
import AppText from '../text/AppText';
import { useKeyboard } from '../../hooks/useKeyboard';
import { DEFAULT_COLORS } from '../../styles';
const toastTitle: ToastTitleInterface = {
  E: 'FAILED',
  S: 'SUCCESS',
};

const toastIcon: ToastIconInterface = {
  E: SVGIcon.errorToastIcon,
  S: SVGIcon.successToastIcon,
};

const initialToast = {
  title: '',
  message: '',
  type: null,
  visible: false,
};

export const Toaster = (props: any, ref: React.Ref<unknown> | undefined) => {
  const translateYRef = useRef(new Animated.Value(220));
  const [toast, setToast] = useState(initialToast);
  const [show, setShow] = useState<Boolean>(false);
  const timeout = useRef<any>();
  const { keyboardHeight, keyboardShown } = useKeyboard();
  const TOAST_TITLE = toast.title
    ? toast.title
    : toast.type
    ? toastTitle[toast.type]
    : null;
  const TOAST_ICON: any = toast.type ? toastIcon[toast.type] : null;
  const TOAST_COLOR =
    toast.type === 'E' ? DEFAULT_COLORS.error : DEFAULT_COLORS.green;
  const styles = useToasterStyle();

  useImperativeHandle(ref, () => ({
    showToaster: showToaster,
  }));

  const showToaster = useCallback(
    (args: any) => {
      setToast({ ...initialToast, visible: true, ...args });
      showToast();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [keyboardHeight, keyboardShown],
  );

  const hideToaster = useCallback(() => {
    setToast({ ...initialToast, type: toast.type });
    hideToast();
  }, [toast]);

  useEffect(() => {
    if (toast.visible) {
      timeout.current = setTimeout(hideToaster, 2000);
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    }
  }, [hideToaster, toast]);

  const showToast = () => {
    setShow(true);
    const toValue =
      keyboardShown && Platform.OS === 'ios' ? keyboardHeight + 50 : 50;
    Animated.timing(translateYRef.current, {
      duration: 300,
      easing: Easing.ease,
      toValue: -toValue,
      useNativeDriver: true,
    }).start();
  };

  const hideToast = () => {
    Animated.timing(translateYRef.current, {
      duration: 300,
      easing: Easing.ease,
      toValue: 200,
      useNativeDriver: true,
    }).start(() => setShow(false));
  };

  return show ? (
    <Animated.View
      style={[
        styles.toast,
        { transform: [{ translateY: translateYRef.current }] },
      ]}>
      <TouchableOpacity
        onPress={hideToaster}
        style={[
          styles.content,
          TOAST_COLOR ? { backgroundColor: TOAST_COLOR } : {},
        ]}
        activeOpacity={1}>
        {TOAST_ICON && <TOAST_ICON width={30} height={30} />}
        <View style={styles.toastMessageContainer}>
          <AppText fontWeight="bold" style={styles.titleText}>
            {TOAST_TITLE || ''}
          </AppText>
          <AppText
            fontWeight="regular"
            style={styles.messageText}
            numberOfLines={5}>
            {toast.message}
          </AppText>
        </View>
      </TouchableOpacity>
    </Animated.View>
  ) : (
    <></>
  );
};

export default React.forwardRef(Toaster);
