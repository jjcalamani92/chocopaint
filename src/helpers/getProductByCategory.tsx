import { ICategory } from '../interface';

export const getProductByCategory = (products: any, category: string) => {
	const validCategory = [
		'herramientas_electricas',
		'herramientas_manuales',
		'jardineria',
		'construccion',
		'poliuterano',
		'linea_automotriz'
	];
	if (!validCategory.includes(category)) {
		throw new Error(`Tipo de categoria '${category}' no es correcto`);
	}
	return products.filter(
		(product: { category: string }) => product.category === category
	);
};
export const getProductByLine = (products: any, line: any) => {
	const validLine = [
		'herramientas',
		'construccion',
		'plomeria',
		'linea_automotriz'
	];
	if (!validLine.includes(line)) {
		throw new Error(`Tipo de categoria '${line}' no es correcto`);
	}
	return products.filter((product: { line: any }) => product.line === line);
};
