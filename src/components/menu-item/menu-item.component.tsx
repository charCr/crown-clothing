import React, { FC } from 'react';
import './menu-item.styles.scss';
interface IMenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
}

export const MenuItem: FC<IMenuItemProps> = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
