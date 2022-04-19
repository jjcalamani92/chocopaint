import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { initialDataCategory } from '../../../data';
import { getProductByCategory } from '../../../helpers/getProductByCategory';
import {
	HeadingPrimary,
	HeadingSecondary
} from '../../layouts/heading/HeadingLayouts';
import { StoreComponent } from './StoresComponent';

interface Props {
	category: string;
}

export const StorePages: FC<Props> = ({ category }) => {
	const { categories } = initialDataCategory;
	// const { categories } = useSelector((state: State) => state.Category);
	const cat = getProductByCategory(categories, category);
	return (
		<>
			<HeadingPrimary titleP="Linea Automotriz" />
			{cat.map((data: any, index: number) => (
				<React.Fragment key={index}>
					<HeadingSecondary title={data.nameSubCategory} category="#" />
					<StoreComponent subCategory={data.subCategory} />
				</React.Fragment>
			))}
		</>
	);
};
