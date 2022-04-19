import { getProductBySubCategory } from '../../../helpers/getProductBySubCategory';
import { CardLayout } from '../../layouts/card/CardLayout';
import { initialDataProduct } from '../../../data';

interface Props {
	category: string;
	subCategory: string;
}

export const ProductComponent = ({ category, subCategory }: Props) => {
	const { products } = initialDataProduct;

	const product = getProductBySubCategory(products, subCategory);
	return (
		<>
			<section className="product">
				{product.map((Products: any) => (
					<CardLayout key={Products.id} Products={Products} />
				))}
			</section>
		</>
	);
};
