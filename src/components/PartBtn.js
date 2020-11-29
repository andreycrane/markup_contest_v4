import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon } from "@quarkly/widgets";
import { FaPlus } from "react-icons/fa";
const defaultProps = {
	"category": "fa",
	"icon": FaPlus,
	"width": "42px",
	"height": "42px",
	"border-radius": "50%",
	"background": "--color-accentGreen",
	"position": "absolute",
	"top": "auto",
	"right": "auto",
	"bottom": "577px",
	"left": "368px",
	"hover-background": "#9BF00B",
	"hover-box-shadow": "0px 0px 50px rgba(155, 240, 11, 0.5)",
	"box-shadow": "none",
	"transition": "box-shadow 0.5s ease 0s"
};
const overrides = {};

const PartBtn = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Icon {...rest} />;
};

Object.assign(PartBtn, { ...Icon,
	defaultProps,
	overrides
});
export default PartBtn;