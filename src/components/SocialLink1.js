import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Link } from "@quarkly/widgets";
import { FaInstagram } from "react-icons/fa";
const defaultProps = {
	"href": "#",
	"padding": "10px 10px 10px 10px"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaInstagram,
			"color": "--light"
		}
	}
};

const SocialLink1 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		<Icon {...override("icon")} />
		{children}
	</Link>;
};

Object.assign(SocialLink1, { ...Link,
	defaultProps,
	overrides
});
export default SocialLink1;