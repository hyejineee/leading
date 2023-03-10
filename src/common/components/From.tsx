import { yupResolver } from '@hookform/resolvers/yup';
import { ReactNode } from 'react';
import * as yup from 'yup';
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form';

type Props = {
  schema: yup.ObjectSchema<any, yup.AnyObject, any, ''>;
  render: (form: UseFormReturn) => ReactNode;
  onSubmit: (inputs: FieldValues) => void;
};

export default function Form({ schema, render, onSubmit }: Props) {
  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  return <form onSubmit={handleSubmit}>{render(form)}</form>;
}
