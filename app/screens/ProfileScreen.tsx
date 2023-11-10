import { View, ViewStyle } from 'react-native'
import React, { useEffect } from 'react'
import { getUserByIdAction, resetAddToCartAction, resetAuthStateAction, resetCartStateAction, resetProductStateAction, signOutAction, useReduxDispatch, useReduxSelector } from '../redux';
import { Button, InfoRow, NetworkImage, Screen, Spacer } from '../components';
import { displayMessage, ms } from '../utils';
import { spacing } from '../theme';
import { ImageStyle } from 'react-native-fast-image';
import { useTranslation } from 'react-i18next';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootNavigatorParamList } from '../navigators';

export const ProfileScreen = () => {
  const { user: { data, loading: userLoading, error: userError }, fullUser: { data: fullUserData, loading: fullUserLoading, error: fullUserError } } = useReduxSelector(state => state.auth);
  const dispatch = useReduxDispatch();
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<RootNavigatorParamList>>();

  /**
   * Dispatch full user data action
   */
  useEffect(() => {
    if (data) {
      dispatch(getUserByIdAction(data.id))
    }
  }, [data])

  /**
   * useEffect hook to handle loading, error and data for get user by id
   */
  useEffect(() => {
    if (fullUserLoading === 'loading') return;
    if (fullUserError) { return displayMessage(fullUserError); }
  }, [fullUserLoading, fullUserError])


  /**
   * useEffect hook to handle loading, error and data for signout
   */
  useEffect(() => {
    if (userLoading === 'loading') return;
    if (userError) { return displayMessage(userError); }
    if(!data){
      dispatch(resetCartStateAction())
      dispatch(resetProductStateAction())
      dispatch(resetAuthStateAction())
    }
  }, [userLoading, userError, data])

  return (
    <Screen contentContainerStyle={$root} isVisibleSpinner={userLoading === 'loading' || fullUserLoading === 'loading'}>
      <View style={$contentContainer}>
        <NetworkImage source={{ uri: fullUserData?.image }} style={$avatar} resizeMode='contain' placeholder='user' />
        <Spacer mainAxisSize={spacing.xxl} />
        <View style={$detailsContainer}>
          <InfoRow icon='cake' title={t('profileScreen:birthDate')} subTitle={fullUserData?.birthDate} />
          <InfoRow icon={data?.gender === 'female' ? 'female' : 'male'} subTitle={data?.gender} />
          <InfoRow icon='phone' title={t('profileScreen:contact')} subTitle={fullUserData?.phone} />
          <InfoRow icon='degreeCap' title={t('profileScreen:studiesAt')} subTitle={fullUserData?.university} />
          <InfoRow icon='location' title={t('profileScreen:from')} subTitle={fullUserData?.company?.address?.city} />
          <InfoRow icon='building' title={t('profileScreen:workAt')} subTitle={fullUserData?.company?.name} />
          <InfoRow icon='briefcase' title={t('profileScreen:workAsA')} subTitle={fullUserData?.company?.title} />
        </View>
      </View>
      <Button
        style={$logoutButton}
        tx="profileScreen:logout"
        onPress={() => dispatch(signOutAction())}
        loading={userLoading === 'loading'}
      />
      <Spacer mainAxisSize={spacing.md} />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: 'white',
  paddingHorizontal: spacing.md,
  paddingTop: spacing.xxxl,
}

const $contentContainer: ViewStyle = {
  flexGrow: 1
}

const $avatar: ImageStyle = {
  width: ms(100),
  height: ms(100),
  borderRadius: ms(50),
  alignSelf: 'center',
}

const $detailsContainer: ViewStyle = {

}

const $logoutButton: ViewStyle = {}