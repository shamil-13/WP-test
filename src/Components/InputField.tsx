import React from 'react'
import { TextField, Grid } from '@mui/material'
import { Controller } from 'react-hook-form'

interface Props {
  index: number
  control: any
  fieldName:string
  label:string
  errorMsg?:string | undefined
}

const InputField = ({ index, control,fieldName,label,errorMsg }: Props) => {
  return (
    <Grid item xs={4}>
      <Controller
        name={`data[${index}].${fieldName}`}
        control={control}
        defaultValue=''
        render={({ field }) => <TextField label={label} {...field} 
        error={errorMsg != undefined}
        helperText={errorMsg}
        />}
      />
    </Grid>
  )
}

export default InputField
