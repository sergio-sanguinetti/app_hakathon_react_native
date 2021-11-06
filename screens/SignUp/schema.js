import * as Yup from 'yup';

export default Yup.object().shape({
  nombres: Yup.string()
    .label('Nombres')
    .required('Este campo es requerido')
    .min(5, 'Este campo debe contener 5 caracteres como minimo'),
    dni: Yup.string()
    .label('DNI')
    .required('Este campo es requerido')
    .min(8, 'Este campo debe contener 8 caracteres'),
  email: Yup.string()
    .label('Email')
    .email('Ingresa un emal valido')
    .required('Este campo es requerido'),
  password: Yup.string()
    .label('Password')
    .required('Este campo es requerido')
    .min(5, 'La contraseña debe ser de mas de 4 caracteres'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Ambas contraseñas deben ser iguales')
    .required('Este campo es requerido'),
});