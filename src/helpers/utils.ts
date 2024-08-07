import modalfy from './modalfy';

const globalAny: any = global;

export const startLoader = () => {
  globalAny.props.showAppLoader();
};

export const stopLoader = () => {
  globalAny.props.hideAppLoader();
};

export const showToaster = (
  message: string,
  type: 'S' | 'E',
  title?: string,
) => {
  globalAny.props.showToaster({
    message,
    type,
    title,
  });
};

export const openModal = (name: string, params?: any) => {
  if (modalfy.isModalOpened(name)) {
    return;
  }
  modalfy.open(name, params);
};

export const closeModal = (name: string) => {
  modalfy.close(name);
};
