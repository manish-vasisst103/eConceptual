import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRootStackParamList } from '../../../constants/routeConstant';

const useHome = () => {
  const navigation =
    useNavigation<NavigationProp<AppRootStackParamList, 'home'>>();

  const onProfilePress = () => navigation.navigate('profile');

  return {
    navigation,
    onProfilePress,
  };
};
export default useHome;
