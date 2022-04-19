import { CategoryCardCategory } from './CategoryCard';

import { useSelector } from 'react-redux';
import { FC } from 'react';
import {
	getProductByLine,
	getProductByCategory
} from '../../../helpers/getProductByCategory';

interface Props {
	Category: any;
	Line: any;
}
interface Categories {
	category: string;
	line: string;
}

export const CategoryLayoutCategory: FC<Categories> = ({ category, line }) => {
	const { categories } = useSelector((state: Props) => state.Category);
	const { lines } = useSelector((state: Props) => state.Line);
	const product = getProductByCategory(categories, category);
	return (
		<>
			<section className="category">
				{product.map((data: any, i: number) => (
					<CategoryCardCategory key={i} {...data} />
				))}
			</section>
		</>
	);
};
