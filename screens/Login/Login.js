import React from 'react';
import {View, Text,Image} from 'react-native';
import {useFormik} from 'formik';

import BasicInput from '../../components/BasicInput';
import BasicButton from '../../components/BasicButton';

import validationSchema from './schema';
import styles from './styles';

const initialValues = {
  email: '',
  password: '',
};

const LoginScreen = ({navigation}) => {
  const onSubmit = values => {
    setTimeout(() => {
      navigation.navigate('Home');
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
      <Image source={require('../../assets/logo.png')} />
       <Text style={styles.text}>INICIO</Text>
      <BasicInput
        placeholder={'Ingresa tú email'}
        iconName="envelope"
        iconSize={16}
        onChangeText={handleChange('email')}
        value={values.email}
        errorMessage={touched.email && errors.email}
      />
      <BasicInput
        placeholder={'Ingresa tú contraseña'}
        iconName="lock"
        iconSize={22}
        secureTextEntry
        onChangeText={handleChange('password')}
        value={values.password}
        errorMessage={touched.password && errors.password}
      />
      <BasicButton
        title={'Ingresar'}
        width={200}
        onPress={handleSubmit}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
      />
      <View style={styles.SignUp}>
        <BasicButton
          title={"No tienes una cuenta? Registrate"}
          onPress={() => navigation.navigate('SingUp')}
          color="transparent"
          type="clear"
        />
      </View>
    </View>
  );
};

export default LoginScreen;