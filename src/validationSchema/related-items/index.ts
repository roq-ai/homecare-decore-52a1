import * as yup from 'yup';

export const relatedItemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  product_id: yup.string().nullable(),
});
