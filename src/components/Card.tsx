import React, { FC } from 'react';

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary'
}

interface cardProps {
	width?: string;
	height?: string;
	variant: CardVariant;
}

const Card: FC<cardProps> = ({ width, height, variant, children }) => {
	return (
		<div style={{
			width, height,
			border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
			background: variant === CardVariant.primary ? 'lightgray' : ''
		}}>
			{children}
		</div>
	);
};

export default Card;