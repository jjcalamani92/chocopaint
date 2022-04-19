import { NavLink } from 'react-router-dom';

interface Props {
	category: string;
	image: string;
	subCategory: string;
	nameSubCategory: string;
}

export const CategoryCard = ({
	category,
	image,
	subCategory,
	nameSubCategory
}: Props) => {
	return (
		<NavLink to={`/${category}/${subCategory}`} className="box">
			<img src={`${image}`} alt={`${category}`} />
			<p>{nameSubCategory}</p>
		</NavLink>
	);
};

export const CategoryCardCategory = ({
	category,
	image,
	subCategory
}: Props) => {
	return (
		<NavLink to={`/${category}/${subCategory}`} className="box">
			<img src={`${image}`} alt={`${category}`} />
			<p>{subCategory}</p>
		</NavLink>
	);
};
