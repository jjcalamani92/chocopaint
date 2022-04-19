import { Link, NavLink } from 'react-router-dom';

interface Props {
	category: String;
	image: String;
	subcategory: string;
	line: string;
}

export const LineCard = ({ category, image, subcategory, line }: Props) => {
	const categoryURL = (category: String) => {
		return category
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.split('/')
			.join(' ')
			.toString()
			.toLowerCase()
			.split(' ')
			.join('_');
	};
	const CategoryURL = categoryURL(category);
	return (
		<NavLink to={`/${line}/${CategoryURL}`} className="box">
			<img src={`${image}`} alt={`${category}`} />
			<p>{category}</p>
		</NavLink>
	);
};
