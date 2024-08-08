import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRootStackParamList } from '../../../constants/routeConstant';
import { useProductsQuery } from '../../../services/appService';
import { useEffect, useMemo, useState } from 'react';
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import { updateProducts } from '../../../redux/app/appSlice';

const useHome = () => {
  const navigation =
    useNavigation<NavigationProp<AppRootStackParamList, 'home'>>();
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();
  const { refetch, isFetching, isLoading, data } = useProductsQuery(page);
  const productList = useSelector(
    (state: RootState) => state?.app?.productList,
  );

  useEffect(() => {
    if (data?.status === 200) {
      dispatch(updateProducts(data));
    }
  }, [data, dispatch]);

  const onProfilePress = () => navigation.navigate('profile');

  const handleMore = debounce(() => {
    if (productList?.length && !isLastPage) {
      setPage(page + 1);
    }
  }, 300);

  const onRefresh = () => {
    if (page === 1) {
      refetch();
    }
    setPage(1);
  };

  // use 3 as a last page because not getting page count in api response
  const isLastPage = useMemo(() => page === 3, [page]);

  return {
    navigation,
    onProfilePress,
    productList,
    isFetching,
    isLoading,
    onRefresh,
    isLastPage,
    handleMore,
  };
};
export default useHome;
