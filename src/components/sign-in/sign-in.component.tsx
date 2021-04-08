import React, { FormEvent, FC, useState } from 'react';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

interface ISignInState {
  email: string;
  password: string;
}
export const SignIn: FC = () => {
  const [signInData, setSignInData] = useState<ISignInState>({
    email: '',
    password: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { value, name } = (event.target as unknown) as HTMLInputElement;
    setSignInData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sign-in">
      {console.log(signInData)}
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={signInData.email}
          handleChange={handleChange}
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          value={signInData.password}
          handleChange={handleChange}
          label="password"
        />
        <CustomButton />
      </form>
    </div>
  );
};
