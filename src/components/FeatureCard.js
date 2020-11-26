import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"box-sizing": "border-box"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "92px",
			"height": "49px",
			"src": "https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/4k.svg?v=2020-11-26T16:08:01.337Z"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "600 23px/34px --fontFamily-googleInter",
			"color": "--textSecondary",
			"children": "True gaming"
		}
	}
};

const FeatureCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		<Text {...override("text")} />
		{children}
	</Box>;
};

Object.assign(FeatureCard, { ...Box,
	defaultProps,
	overrides
});
export default FeatureCard;