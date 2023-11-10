import { TextInput, View, ViewStyle } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import {
  Button,
  Screen,
  Spacer,
  Text,
  TextField,
  TextFieldProps,
} from '../components';
import { spacing } from '../theme';
import { getLoginFormValidationSchema } from '../validations';
import { RootNavigatorParamList } from '../navigators';
import { loadExistingUserAction, signInAction, useReduxDispatch, useReduxSelector } from '../redux';
import { displayMessage } from '../utils';

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginScreen = () => {
  const initialFormValues: LoginFormValues = { username: '', password: '' };
  const { user: { loading, error, data } } = useReduxSelector(state => state.auth);
  const passwordRef = useRef<TextInput>(null);
  const navigation = useNavigation<NavigationProp<RootNavigatorParamList>>();
  const dispatch = useReduxDispatch();
  const { t } = useTranslation();


  /**
   * load stored user data from async storage
   */
  useEffect(() => {
    if (!data) {
      dispatch(loadExistingUserAction())
    }
  }, []);

  /**
   * useEffect hook to handle loading, error and data for login
   */
  useEffect(() => {
    if (loading === 'loading') return;
    if (error) { return displayMessage(error); }
  }, [loading, error]);

  /**
   * Renders form of the screen
   * @returns form of the screen
   */
  const renderForm = () => {
    return (
      <Formik
        initialValues={initialFormValues}
        onSubmit={(values) => { dispatch(signInAction({ username: values.username, password: values.password })) }}
        validationSchema={getLoginFormValidationSchema(t)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <View style={$formContainer}>
            <TextField
              placeholderTx="loginScreen:usernamePlaceholder"
              textContentType="username"
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordRef.current?.focus();
              }}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              helper={
                touched.username && errors.username
                  ? errors.username
                  : undefined
              }
              editable={loading !== 'loading'}
            />
            <Spacer mainAxisSize={spacing.lg} />
            <TextField
              ref={passwordRef}
              placeholderTx="loginScreen:passwordPlaceholder"
              secureTextEntry={true}
              textContentType="password"
              returnKeyType="done"
              onSubmitEditing={() => {
                handleSubmit();
              }}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              helper={
                touched.password && errors.password
                  ? errors.password
                  : undefined
              }
              editable={loading !== 'loading'}
            />
            <Spacer mainAxisSize={spacing.xxl} />
            <Button
              tx="loginScreen:loginButton"
              onPress={() => handleSubmit()}
              loading={loading === 'loading'}
            />
          </View>
        )}
      </Formik>
    );
  };

  /**
   * Renders content of the screen
   * @returns content of the screen
   */
  const renderContent = () => {
    return (
      <>
        <Text tx="loginScreen:title" preset="h2" />
        <Spacer mainAxisSize={spacing.xxxxl} />
        {renderForm()}
      </>
    );
  };

  return (
    <Screen style={$root} contentContainerStyle={$contentContainer} safeAreaEdges={['bottom']}>
      {renderContent()}
    </Screen>
  );
};

const $root: ViewStyle = {
  flex: 1,
};

const $contentContainer: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: spacing.md,
};

const $formContainer: ViewStyle = {
  width: '100%',
};
