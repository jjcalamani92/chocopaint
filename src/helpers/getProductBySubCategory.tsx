import { IProduct } from '../interface';

export const getProductBySubCategory = (products: any, subCategory: string) => {
	const validCategory = [
		'poliuretano',
		'acrilico',
		'gloss',
		'base',
		'barniz',
		'protector_de_chasis',
		'masilla',
		'primer',
		'mateante',
		'kit',
		'juego'
	];
	if (!validCategory.includes(subCategory)) {
		throw new Error(`Tipo de categoria '${subCategory}' no es correcto`);
	}
	return products.filter(
		(product: { subCategory: string }) => product.subCategory === subCategory
	);
};
