import * as yup from 'yup'


export const schema = yup.object().shape({
    data: yup.array().of(
      yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        age: yup
          .number()
          .typeError('Age must be a number')
          .positive('Age must be a positive number')
          .integer('Age must be an integer')
          .required('Age is required')
          .test('is-age-valid', 'Age must be greater than or equal to 18', (value) => value >= 18)
      })
    )
  })