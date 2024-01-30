import React, { useEffect, useState } from 'react';
import { FormInput } from './FormInput';
import { useUser } from '../../../../context/UsersContext';


export const RegisterForm = () => {
  const { user, setAuthenticatedUser } = useUser();
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setAge(String(user.age)); 
      setPassword(user.password);
      setRepeatPassword(user.password);
    }
  }, [user]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newUserObject = {
      username,
      password,
      
    };
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUserObject),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setAuthenticatedUser(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
     
  };

  return (
    <form
      action=''
      onSubmit={handleSubmit}
      className='  rounded-2xl m-auto w-96 bg-slate-300  opacity-70 text-lg p-6 flex flex-col  font-semibold'>
      <FormInput
        name='username'
        inputValue={username}
        setter={setUsername}
        type='text'
      />
      <FormInput
        name='firstName'
        inputValue={firstName}
        setter={setFirstName}
        type='text'
      />
      <FormInput
        name='lastName'
        inputValue={lastName}
        setter={setLastName}
        type='text'
      />
      <FormInput
        name='email'
        inputValue={email}
        setter={setEmail}
        type='email'
      />
      <FormInput name='age' inputValue={age} setter={setAge} type='number' />
      <FormInput
        name='password'
        inputValue={password}
        setter={setPassword}
        type='password'
      />
      <FormInput
        name='repeat password'
        inputValue={repeatPassword}
        setter={setRepeatPassword}
        type='password'
      />
      <button
        type='submit'
        className='border rounded-md p-1 border-violet-600 hover:text-[#ffc600] hover:bg-black m-3'>
        Register
      </button>
    </form>
  );
};
