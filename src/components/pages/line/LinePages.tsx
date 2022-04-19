import { LineLayout } from '../../layouts/line/LineLayout';
import {
	HeadingPrimary,
	HeadingSecondary
} from '../../layouts/heading/HeadingLayouts';

export const LinePages = () => {
	return (
		<>
			<HeadingPrimary titleP="Nuestra tienda" />
			<HeadingSecondary title="linea automotriz" category="#" />
			<LineLayout line="linea_automotriz" />
			<HeadingSecondary title="construccion" category="#" />
			<LineLayout line="construccion" />
			<HeadingSecondary title="plomeria" category="#" />
			<LineLayout line="plomeria" />
		</>
	);
};
