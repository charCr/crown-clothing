import React, { FormEvent, FC, useState } from 'react';

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
    setSignInData((prevState)=> ({...prevState, [name]: value}));
  };

  return (
    <div className="sign-in">
      {console.log(signInData)}
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={signInData.email}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="password"
          name="password"
          value={signInData.password}
          onChange={handleChange}
        />
        <label>Password</label>
      </form>
    </div>
  );
};
