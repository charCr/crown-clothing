import React, { FC } from 'react';

interface ICollectionItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const ColletionItem: FC<ICollectionItemProps> = ({
  id,
  name,
  price,
  imageUrl,
}) => (
  <div>
    <img src={imageUrl} alt="" />
    <div>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  </div>
);
