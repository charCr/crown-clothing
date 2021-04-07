import React, { FC } from 'react';
import './colletion-item.styles.scss';
interface ICollectionItemProps {
  name: string;
  price: number;
  imageUrl: string;
}

export const CollectionItem: FC<ICollectionItemProps> = ({
  name,
  price,
  imageUrl,
}) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  </div>
);
