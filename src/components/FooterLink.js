import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "#",
	"font": "600 17px/20.57px --fontFamily-googleInter",
	"color": "--light",
	"text-transform": "uppercase",
	"text-decoration": "none",
	"children": "Browse"
};
const overrides = {};

const FooterLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(FooterLink, { ...Link,
	defaultProps,
	overrides
});
export default FooterLink;