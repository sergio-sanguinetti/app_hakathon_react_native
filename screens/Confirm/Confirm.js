import React from 'react';
import {View, Text} from 'react-native';
import {useFormik} from 'formik';

import BasicInput from '../../components/BasicInput';
import BasicButton from '../../components/BasicButton';

import validationSchema from './schema';
import styles from './styles';

const initialValues = {
  codigo: '',
};

const ConfirmScreen = ({navigation}) => {
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
       <Text style={styles.text}>CÓDIGO</Text>
      <BasicInput
        placeholder={'Ingresa el código de verficación'}
        iconName="user"
        iconSize={16}
        onChangeText={handleChange('codigo')}
        value={values.codigo}
        errorMessage={touched.codigo && errors.codigo}
      />

      <BasicButton
        title={'Confirmar'}
        width={200}
        onPress={handleSubmit}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
      />
  
    </View>
  );
};

export default ConfirmScreen;