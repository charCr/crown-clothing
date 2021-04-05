import React, { FC } from 'react';
import './homepage.styles.scss';
import { Directory } from '../directory/directory.component';

export const HomePage: FC = () => (
  <div className="homepage">
    <Directory />
  </div>
);
