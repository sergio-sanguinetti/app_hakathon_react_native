import * as Yup from 'yup';

export default Yup.object().shape({
  codigo: Yup.string()
    .label('Código')
    .required('Este campo es requerido')
    .min(6, 'Ingrese un codigo correcto'),
});