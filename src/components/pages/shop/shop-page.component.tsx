import React, { FC, useState, useEffect } from 'react';
import { CollectionPreview } from '../../collection-preview/collection-preview.component';

import { SHOP_DATA } from './shop.data';

export interface Items {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface IShopPageState {
  id: number;
  title: string;
  routeName: string;
  items: Items[];
}
export const ShopPage: FC<IShopPageState> = () => {
  const [collections, setCollections] = useState<IShopPageState[]>([]);

  useEffect(() => {
    setCollections(SHOP_DATA);
  }, []);
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
