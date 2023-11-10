import { View, ViewStyle } from 'react-native'
import React, { useEffect } from 'react'
import { signOutAction, useReduxDispatch, useReduxSelector } from '../redux';
import { Button, InfoRow, NetworkImage, Screen, Spacer } from '../components';
import { displayMessage, ms } from '../utils';
import { spacing } from '../theme';
import { ImageStyle } from 'react-native-fast-image';
import { useTranslation } from 'react-i18next';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootNavigatorParamList } from '../navigators';

export const ProfileScreen = () => {
  const { user: { data, loading, error } } = useReduxSelector(state => state.auth);
  const dispatch = useReduxDispatch();
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<RootNavigatorParamList>>();

  /**
   * useEffect hook to handle loading, error and data for signout
   */
  useEffect(() => {
    if(loading === 'loading') return;
    if(error) { return displayMessage(error); }
  }, [loading])

  return (
    <Screen contentContainerStyle={$root} isVisibleSpinner={loading === 'loading'}>
      <View style={$contentContainer}>
        <NetworkImage source={{ uri: data?.image }} style={$avatar} resizeMode='contain' placeholder='user' />
        <Spacer mainAxisSize={spacing.xxl} />
        <View style={$detailsContainer}>
          <InfoRow icon='cake' title={t('profileScreen:birthDate')}  subTitle={'2000-12-25'}/>
          <InfoRow icon={data?.gender === 'female' ? 'female' : 'male'}  subTitle={data?.gender}/>
          <InfoRow icon='phone' title={t('profileScreen:contact')}  subTitle={'+63 791 675 8914'}/>
          <InfoRow icon='degreeCap' title={t('profileScreen:studiesAt')}  subTitle={'Capital University'}/>
          <InfoRow icon='location' title={t('profileScreen:from')}  subTitle={'Washington'}/>
          <InfoRow icon='building' title={t('profileScreen:workAt')}  subTitle={'Facebook'}/>
          <InfoRow icon='briefcase' title={t('profileScreen:workAsA')}  subTitle={'Help Desk Operator'}/>
        </View>
      </View>
      <Button
        style={$logoutButton}
        tx="profileScreen:logout"
        onPress={() => dispatch(signOutAction())}
        loading={loading === 'loading'}
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