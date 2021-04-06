import React, { FC } from 'react';
import './menu-item.styles.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IMenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  match: string;
  linkUrl: string;
}

const MenuItem: FC<IMenuItemProps & RouteComponentProps> = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);
