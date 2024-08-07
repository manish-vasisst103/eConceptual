import { useEffect, useState, useRef } from 'react';
import { Keyboard, KeyboardEventListener } from 'react-native';

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
  const [shown, setShown] = useState(false);

  const handleKeyboardDidShow: KeyboardEventListener = e => {
    setKeyboardHeight(e.endCoordinates.height);
    setShown(true);
  };
  const handleKeyboardDidShowRefFn = useRef(handleKeyboardDidShow);
  handleKeyboardDidShowRefFn.current = handleKeyboardDidShow;

  const handleKeyboardWillHide: KeyboardEventListener = () => {
    setKeyboardHeight(0);
  };
  const handleKeyboardWillHideRefFn = useRef(handleKeyboardWillHide);
  handleKeyboardWillHideRefFn.current = handleKeyboardWillHide;

  const handleKeyboardDidHide: KeyboardEventListener = () => {
    setKeyboardHeight(0);
    setShown(false);
  };

  const handleKeyboardDidHideRefFn = useRef(handleKeyboardDidHide);
  handleKeyboardDidHideRefFn.current = handleKeyboardDidHide;

  useEffect(() => {
    const subscriptions = [
      Keyboard.addListener(
        'keyboardDidShow',
        handleKeyboardDidShowRefFn.current,
      ),
      Keyboard.addListener(
        'keyboardWillHide',
        handleKeyboardWillHideRefFn.current,
      ),
      Keyboard.addListener(
        'keyboardDidHide',
        handleKeyboardDidHideRefFn.current,
      ),
    ];

    return () => {
      subscriptions.forEach(subscription => subscription.remove());
    };
  }, []);
  return {
    keyboardHeight,
    keyboardShown: shown,
  };
};
