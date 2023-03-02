import { Controller } from 'react-hook-form';

type InputPropsType = {
  control: any;
  name: string;
  placeholder?: string;
};

export default function Input({ control, name, placeholder }: InputPropsType) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <input
          placeholder={placeholder}
          onChange={v => onChange(v)}
          value={value}
        />
      )}
    />
  );
}
