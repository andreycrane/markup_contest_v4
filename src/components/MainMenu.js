import React, { useCallback, useState } from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Image, Box, Link, Button, Icon } from "@quarkly/widgets";
import MenuLink from "./MenuLink";
import { FaGripLines } from "react-icons/fa";
import { MdClose } from "react-icons/md";
const defaultProps = {
	"box-sizing": "border-box",
	"as": "section",
	"display": "flex",
	"align-items": "center",
	"inner-width": "100%",
	"padding": "66px 0 0 0",
	"margin": "0 0 38px 0",
	"lg-position": "relative",
	"inner-max-width": "648px"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "144px",
			"height": "44px",
			"src": "https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/logo.svg?v=2020-11-26T16:02:28.431Z"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"lg-position": "absolute",
			"lg-top": "100%",
			"lg-left": 0,
			"lg-width": "100%",
			"lg-flex-direction": "column",
			"lg-align-items": "center"
		}
	},
	"menuLink": {
		"kind": "MenuLink",
		"props": {
			"margin": "0px 43px 0px 0px",
			"lg-margin": "0 0 36px 0",
			"href": "#section-browse"
		}
	},
	"menuLink1": {
		"kind": "MenuLink",
		"props": {
			"margin": "0px 43px 0px 0px",
			"lg-margin": "0 0 36px 0",
			"href": "#section-games",
			"children": "Games"
		}
	},
	"menuLink2": {
		"kind": "MenuLink",
		"props": {
			"margin": "0px 43px 0px 0px",
			"href": "#controller-section",
			"children": "contRoller",
			"lg-margin": "0 0px 0px 0px"
		}
	},
	"menuLink3": {
		"kind": "MenuLink",
		"props": {
			"lg-margin": "0 0 36px 0",
			"href": "#section-inside",
			"children": "inside"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"background": "--color-accentGreen",
			"color": "--textColor",
			"font": "normal 700 15px/18px --fontFamily-googleInter",
			"padding": "21px 30px 21px 30px",
			"text-transform": "uppercase",
			"hover-background": "#A5FA15",
			"hover-box-shadow": "0px 0px 20px rgba(155, 240, 11, 0.5)",
			"transition": "box-shadow 0.5s ease 0s",
			"text-decoration-line": "initial",
			"href": "/",
			"children": "Order console",
			"lg-display": "none"
		}
	},
	"menu-button": {
		"kind": "Button",
		"props": {
			"display": "none",
			"background": "--color-accentGreen",
			"lg-width": "66px",
			"lg-height": "66px",
			"lg-display": "flex",
			"lg-justify-content": "center",
			"lg-align-items": "center"
		}
	},
	"menu-button-icon": {
		"kind": "Icon",
		"props": {
			"size": "24px",
			"color": "--dark"
		}
	},
	"menu-button-icon-closed": {
		"props": {
			"category": "fa",
			"icon": FaGripLines
		}
	},
	"menu-button-icon-opened": {
		"props": {
			"category": "md",
			"icon": MdClose
		}
	},
	"menu-button-icon,menu-button-icon-closed,menu-button-icon-opened": {
		"props": {}
	}
};

const MainMenu = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const [toggle, setToggle] = useState(false);
	const onToggle = useCallback(() => {
		setToggle(value => !value);
	}, []);
	return <Section {...rest}>
		<Override slot="SectionContent" flex-direction="row" justify-content="space-between" align-items="center" />
		<Image {...override("image")} />
		<Box {...override("box")} lg-display={toggle ? "flex" : "none"}>
			<MenuLink {...override("menuLink")} />
			<MenuLink {...override("menuLink1")} />
			<MenuLink {...override("menuLink2")} />
			<MenuLink {...override("menuLink3")} />
		</Box>
		<Link {...override("link")} />
		<Button {...override("menu-button")} onClick={onToggle}>
			<Icon {...override("menu-button-icon", "menu-button-icon-closed", toggle && "menu-button-icon-opened")} />
		</Button>
		{children}
	</Section>;
};

Object.assign(MainMenu, { ...Section,
	defaultProps,
	overrides
});
export default MainMenu;