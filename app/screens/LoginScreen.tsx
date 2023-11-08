import {TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import {
  Button,
  Screen,
  Spacer,
  Text,
  TextField,
  TextFieldProps,
} from '../components';
import {spacing} from '../theme';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {getLoginFormValidationSchema} from '../validations';

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginScreen = () => {
  const initialFormValues: LoginFormValues = {username: '', password: ''};
  const passwordRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const {t} = useTranslation();

  /**
   * Renders form of the screen
   * @returns form of the screen
   */
  const renderForm = () => {
    return (
      <Formik
        initialValues={initialFormValues}
        onSubmit={values => console.log(values)}
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
            />
            <Spacer mainAxisSize={spacing.xxl} />
            <Button
              tx="loginScreen:loginButton"
              // onPress={() => handleSubmit()}
              onPress={() => navigation.navigate('MainNav')}
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
    <Screen style={$root} contentContainerStyle={$contentContainer}>
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
