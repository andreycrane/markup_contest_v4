import React, { useCallback, useState, useEffect } from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Icon, Box } from "@quarkly/widgets";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
const defaultProps = {
	"border-bottom": "1px solid --color-textSecondary",
	"open": true
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"justify-content": "space-between",
			"align-items": "center"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "23px/34.5px --fontFamily-googleInter",
			"color": "--light",
			"children": "Some text"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {}
	},
	"icon-up": {
		"props": {
			"color": "#FFFFFF",
			"category": "md",
			"icon": MdKeyboardArrowUp
		}
	},
	"icon-down": {
		"props": {
			"color": "#F0F0F0",
			"category": "md",
			"icon": MdKeyboardArrowDown
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "600 23px/34.5px --fontFamily-googleInter",
			"color": "--textSecondary",
			"children": "Some text"
		}
	}
};

const Accordion = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const [toggle, setToggle] = useState(props.open);
	const onToggle = useCallback(() => {
		setToggle(value => !value);
	}, []);
	useEffect(() => {
		setToggle(props.open);
	}, [props.open]);
	return <Box {...rest}>
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Text {...override("text")} />
				<Icon {...override("icon", "icon-down", toggle && "icon-up")} onClick={onToggle} />
			</Box>
		</Box>
		<Text {...override("text1")} display={toggle ? undefined : "none"} />
		{children}
	</Box>;
};

Object.assign(Accordion, { ...Box,
	defaultProps,
	overrides
});
export default Accordion;