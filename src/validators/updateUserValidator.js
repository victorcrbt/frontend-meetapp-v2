import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório.'),
  email: Yup.string().required('O e-mail é obrigatório.'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (value, field) =>
    value
      ? field
          .required('Você deve preencher a nova senha.')
          .min(6, 'A senha deve ter ao menos 6 caracteres')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) => {
    return password
      ? field
          .required()
          .oneOf([Yup.ref('password')], 'As senhas não coincidem.')
      : field;
  }),
});

export default schema;
