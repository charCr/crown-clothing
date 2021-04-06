import React, { FC } from 'react';
import { Items } from '../pages/shop/shop-page.component';
import { ColletionItem } from '../collection-item/collection-item.component';

interface ICollectionPreviewProps {
  title: string;
  routeName: string;
  items: Items[];
}
export const CollectionPreview: FC<ICollectionPreviewProps> = ({
  title,
  ...otherColletionItemProps
}) => (
  <div>
    <h1>{title}</h1>
  </div>
);
