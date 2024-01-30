import React from 'react';

interface FormInputProps {
  name: string;
  inputValue: string | number;
  setter: (value: string) => void;
  type: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  type,
  setter,
  inputValue,
}) => {
  return (
    <div className='flex flex-col justify-between rounded-md text-slate-700 p-3'>
      <label htmlFor={name} className=''>
        {name.toUpperCase()}
      </label>
      <input 
      readOnly
        type={type}
        id={name}
        value={inputValue}
        onChange={(e) => setter(e.target.value)}
        className='border rounded-md p-1 border-violet-600'
        required
      />
    </div>
  );
};
