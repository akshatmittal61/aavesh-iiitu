import React from "react";

const Pillar = ({ width = 57, height = 201, ...rest }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M53.6967 0V134.863L11.7452 185.929C10.6279 185.336 9.35317 185 8 185C3.58172 185 0 188.582 0 193C0 197.418 3.58172 201 8 201C12.4183 201 16 197.418 16 193C16 191.018 15.2792 189.204 14.0853 187.807L56.3558 136.353L56.6967 135.938V135.401V0H53.6967ZM13 193C13 195.761 10.7614 198 8 198C5.23858 198 3 195.761 3 193C3 190.239 5.23858 188 8 188C10.7614 188 13 190.239 13 193Z"
				fill="#2FAEE1"
			/>
		</svg>
	);
};

export default Pillar;
