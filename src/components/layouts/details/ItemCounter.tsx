import { FC } from 'react';

interface Props {
	currentValue: number;
	maxValue: number;

	//Methods
	updatedQuantity: (newValue: number) => void;
}

export const ItemCounter: FC<Props> = ({
	currentValue,
	maxValue,
	updatedQuantity
}) => {
	const addOrRemove = (value: number) => {
		if (value === -1) {
			if (currentValue === 1) return;

			return updatedQuantity(currentValue - 1);
		}
		if (currentValue >= maxValue) return;
		updatedQuantity(currentValue + 1);
	};
	return <h1>hola</h1>;
};
