import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "#",
	"font": "600 17px/20.57px --fontFamily-googleInter",
	"color": "--light",
	"children": "Browse",
	"text-transform": "uppercase",
	"text-decoration": "none",
	"box-sizing": "border-box",
	"display": "inline-block"
};
const overrides = {};

const MenuLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(MenuLink, { ...Link,
	defaultProps,
	overrides
});
export default MenuLink;