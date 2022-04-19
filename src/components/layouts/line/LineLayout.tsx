import { LineCard } from './LineCard';

import { useSelector } from 'react-redux';
import { FC } from 'react';
import { getProductByLine } from '../../../helpers/getProductByCategory';

interface Props {
	Line: any;
}
interface Categories {
	line: string;
}

export const LineLayout: FC<Categories> = ({ line }) => {
	const { lines } = useSelector((state: Props) => state.Line);
	const product = getProductByLine(lines, line);
	return (
		<>
			<section className="category">
				{product.map((data: any, i: number) => (
					<LineCard key={i} {...data} />
				))}
			</section>
		</>
	);
};
