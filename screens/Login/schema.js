import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Ingresa un email valido')
    .required('Este campo es requerido'),
  password: Yup.string()
    .label('Password')
    .required('Este campo es requerido')
    .min(5, 'Ingrese una contraseña correcta'),
});