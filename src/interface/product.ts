export interface IProduct {
	id: string;
	title: string;
	mark: string;
	image: string[];
	description: string;
	use: string;
	line: string;
	category: string;
	subCategory: string;
	price: string;
	oldPrice: string;
	quantity: number;
}

export interface IProducts {
	products: IProduct[];
}
