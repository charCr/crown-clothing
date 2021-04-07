import React, { FC } from 'react';
import { Items } from '../pages/shop/shop-page.component';
import { CollectionItem } from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
interface ICollectionPreviewProps {
  title: string;
  items: Items[];
}
export const CollectionPreview: FC<ICollectionPreviewProps> = ({
  title,
  items,
}) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="preview">
      {items
        .filter((itemVal, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);
