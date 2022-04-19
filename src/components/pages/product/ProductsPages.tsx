import { FC } from 'react';
import { HeadingPrimary } from '../../layouts/heading/HeadingLayouts';
import { ProductComponent } from './ProductComponent';

interface Props {
	title: string;
	category: string;
	subCategory: string;
}

export const ProductsPages: FC<Props> = ({ title, category, subCategory }) => {
	return (
		<>
			<HeadingPrimary titleP={title} />
			<ProductComponent category={category} subCategory={subCategory} />
		</>
	);
};
