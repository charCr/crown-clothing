import React, { FC } from 'react';

import './form-input.styles.scss';

interface IFormInputProps {
  label: string;
  handleChange(event: React.FormEvent<HTMLInputElement>): void;
  type: string;
  name: string;
  value: string;
}

export const FormInput: FC<IFormInputProps> = ({
  handleChange,
  label,
  type,
  name,
  value,
}) => (
  <div className="group">
    {label ? (
      <label className={`${value.length ? 'shrink' : ''} 'form-input-label'`}>
        {label}
      </label>
    ) : null}
    <input
      type={type}
      name={name}
      className="form-input"
      onChange={handleChange}
    />
  </div>
);
