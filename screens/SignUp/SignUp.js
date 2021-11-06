import React from 'react';
import {View} from 'react-native';
import {useFormik} from 'formik';

import BasicInput from '../../components/BasicInput';
import BasicButton from '../../components/BasicButton';

import validationSchema from './schema';
import styles from './styles';

const initialValues = {
  nombres: '',
  dni: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const SignUpScreen = ({navigation}) => {
  const onSubmit = values => {
    setTimeout(() => {
      navigation.navigate('Confirm');
    }, 3000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    isSubmitting,
    isValid,
    handleSubmit,
  } = formik;

  return (
    <View style={styles.Container}>
      <BasicInput
        placeholder={'Ingresa tu nombre completo'}
        iconName="user"
        iconSize={20}
        onChangeText={handleChange('nombres')}
        value={values.nombres}
        errorMessage={touched.nombres && errors.nombres}
      />
       <BasicInput
        placeholder={'Ingresa tu DNI'}
        iconName="user"
        iconSize={20}
        onChangeText={handleChange('dni')}
        value={values.dni}
        errorMessage={touched.dni && errors.dni}
      />
      <BasicInput
        placeholder={'Ingresa tú email'}
        iconName="envelope"
        iconSize={20}
        onChangeText={handleChange('email')}
        value={values.email}
        errorMessage={touched.email && errors.email}
      />
      <BasicInput
        placeholder={'Ingresa tú contraseña'}
        iconName="lock"
        iconSize={24}
        secureTextEntry
        onChangeText={handleChange('password')}
        value={values.password}
        errorMessage={touched.password && errors.password}
      />
      <BasicInput
        placeholder={'Confirma tu contraseña'}
        iconName="lock"
        iconSize={24}
        secureTextEntry
        onChangeText={handleChange('password_confirmation')}
        value={values.password_confirmation}
        errorMessage={
          touched.password_confirmation && errors.password_confirmation
        }
      />
      <BasicButton
        title={'Registrarme'}
        width={200}
        onPress={handleSubmit}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
      />
      <View style={styles.SubContainerButton}>
        <BasicButton
          title={'Ya tienes una cuenta? Ingresa aquí'}
          onPress={() => navigation.navigate('Login')}
          color="transparent"
          type="clear"
        />
      </View>
    </View>
  );
};

export default SignUpScreen;