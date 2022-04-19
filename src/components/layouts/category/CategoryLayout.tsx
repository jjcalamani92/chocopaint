import { CategoryCard } from './CategoryCard';

import { FC } from 'react';
import { getProductByCategory } from '../../../helpers/getProductByCategory';
import { initialDataCategory } from '../../../data';

interface Categories {
	category: string;
}

export const CategoryLayout: FC<Categories> = ({ category }) => {
	const { categories } = initialDataCategory;
	const product = getProductByCategory(categories, category);
	return (
		<>
			<section className="category">
				{product.map((data: any, i: number) => (
					<CategoryCard key={i} {...data} />
				))}
			</section>
		</>
	);
};
