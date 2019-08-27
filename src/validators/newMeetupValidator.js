import * as Yup from 'yup';

const schema = Yup.object().shape({
  banner_id: Yup.number(),
  title: Yup.string().required('O título do meetup é obrigatório.'),
  description: Yup.string().required('A descrição do meetup é obrigatória.'),
  date: Yup.string().required('A data e hora do meetup são obrigatórias.'),
  location: Yup.string().required('A localização do meetup é obrigatória.'),
});

export default schema;
