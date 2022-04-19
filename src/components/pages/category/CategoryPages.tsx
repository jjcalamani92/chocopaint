import { CategoryLayout } from '../../layouts/category/CategoryLayout';

import {
	HeadingPrimary,
	HeadingSecondary
} from '../../layouts/heading/HeadingLayouts';

export const CategoryPages = () => {
	return (
		<>
			<HeadingPrimary titleP="Nuestra Tienda" />

			<HeadingSecondary title="Linea Automotriz" category="#" />
			<CategoryLayout category="linea_automotriz" />
		</>
	);
};
