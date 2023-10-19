// components/Form.js
import React, { useEffect } from 'react'
import {
  useForm,
  useFieldArray,
  FieldArray
} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid } from '@mui/material'
import InputField from '../Components/InputField'
import InputNumberField from '../Components/InputNumberField'
import { schema } from '../Utils/dataHelpers'

const Main = () => {
  const { control, handleSubmit, formState, setError } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { data: [] }
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'data'
  })

  const onSubmit = (data: FieldArray) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <Grid container spacing={2} key={field.id}>
          <InputField
            control={control}
            index={index}
            fieldName={'firstName'}
            label={'First Name'}
            errorMsg={formState?.errors?.data?.[index]?.firstName?.message}
          />
          <InputField
            control={control}
            index={index}
            fieldName={'lastName'}
            label={'Last Name'}
            errorMsg={formState?.errors?.data?.[index]?.lastName?.message}
          />
          <InputNumberField
            control={control}
            index={index}
            fieldName={'age'}
            label={'Age'}
            errorMsg={formState?.errors?.data?.[index]?.age?.message}
          />
          <Grid item xs={1}>
            <Button onClick={() => remove(index)}>Remove</Button>
          </Grid>
        </Grid>
      ))}
      <Button onClick={() => append({ firstName: '', lastName: '', age: 0 })}>
        Add Row
      </Button>
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default Main
