import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  due_date: yup.date(),
  status: yup.string().required(),
  priority: yup.number().integer(),
  user_id: yup.string().nullable(),
  category_id: yup.string().nullable(),
});
