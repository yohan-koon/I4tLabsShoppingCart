import { View, ViewStyle } from 'react-native'
import React from 'react'
import { useReduxSelector } from '../redux';
import { Button, InfoRow, NetworkImage, Spacer } from '../components';
import { ms } from '../utils';
import { spacing } from '../theme';
import { ImageStyle } from 'react-native-fast-image';
import { useTranslation } from 'react-i18next';

export const ProfileScreen = () => {
  const { signIn: { user, loading, error } } = useReduxSelector(state => state.auth);
  const { t } = useTranslation();
  return (
    <View style={$root}>
      <View style={$contentContainer}>
        <NetworkImage source={{ uri: user?.image }} style={$avatar} resizeMode='contain' placeholder='user' />
        <Spacer mainAxisSize={spacing.xxl} />
        <View style={$detailsContainer}>
          <InfoRow icon='cake' title={t('profileScreen:birthDate')}  subTitle={'2000-12-25'}/>
          <InfoRow icon={user?.gender === 'female' ? 'female' : 'male'}  subTitle={user?.gender}/>
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
        onPress={() => { }}
      />
      <Spacer mainAxisSize={spacing.md} />
    </View>
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