import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  AppRootStackParamList,
  MODALS,
} from '../../../constants/routeConstant';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../redux/auth/authActions';
import { closeModal, openModal } from '../../../helpers/utils';
import { useForm } from 'react-hook-form';
import { profileFormSchema } from '../../../helpers/yupHelper';
import {
  useProfileQuery,
  useUpdateProfileMutation,
} from '../../../services/appService';
import { RootState } from '../../../redux/store';
import { ProfileItems } from '../../../interfaces/appInterface';
import { useEffect } from 'react';
import { useProfileData } from '../../../constants/constants';

const useProfile = () => {
  useProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const profileInputData = useProfileData();
  const navigation =
    useNavigation<NavigationProp<AppRootStackParamList, 'profile'>>();
  const dispatch = useDispatch();
  const profileData = useSelector((state: RootState) => state?.app?.profile);

  const { handleSubmit, control, reset, getValues } = useForm<
    ProfileItems,
    void
  >({
    resolver: profileFormSchema,
    mode: 'all',
  });

  useEffect(() => {
    reset(profileData);
  }, [profileData, reset]);

  const logoutConfirmation = () =>
    openModal(MODALS.confirmation, {
      title: 'Logout',
      subTitle: 'Are you sure, You want to logout?',
      onPressConfirm: logoutUser,
    });

  const logoutUser = () => {
    closeModal(MODALS.confirmation);
    dispatch(logoutAction());
  };

  const onUpdate = () => updateProfile(getValues());

  return {
    navigation,
    logoutConfirmation,
    control,
    handleSubmit,
    profileInputData,
    onUpdate,
  };
};

export default useProfile;
