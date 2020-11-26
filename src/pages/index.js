import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Button, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" align-items="center" />
			<Image width="144px" height="44px" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/logo.svg?v=2020-11-26T16:02:28.431Z" />
			<Box>
				<Components.MenuLink margin="0px 43px 0px 0px" />
				<Components.MenuLink margin="0px 43px 0px 0px">
					Games
				</Components.MenuLink>
				<Components.MenuLink margin="0px 43px 0px 0px">
					contRoller
				</Components.MenuLink>
				<Components.MenuLink>
					inside
				</Components.MenuLink>
			</Box>
			<Button
				background="--color-accentGreen"
				color="--textColor"
				font="normal 700 15px/18px --fontFamily-googleInter"
				padding="21px 30px 21px 30px"
				text-transform="uppercase"
			>
				Order console
			</Button>
		</Section>
		<Section>
			<Text font="700 21px/25px --fontFamily-googleInter" color="--accentGreen">
				completely new
			</Text>
			<Text font="600 171px/155px --fontFamily-googleInter" color="--light">
				Xbox Series X
			</Text>
			<Text font="23px/34px --fontFamily-googleInter" color="--textSecondary">
				Experience 12 teraflops of graphics processing
				<br />
				power and 4K resolution at up to 120 fps
				<br />
				second with Xbox Series X. *
			</Text>
		</Section>
		<Section>
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Components.FeatureCard />
			<Components.FeatureCard>
				<Override slot="image" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/hdr.svg?v=2020-11-26T16:23:07.666Z" />
				<Override slot="text">
					High Dynamic Range
				</Override>
			</Components.FeatureCard>
			<Components.FeatureCard>
				<Override slot="image" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/fps.svg?v=2020-11-26T16:23:27.722Z" />
				<Override slot="text">
					Frame per second
				</Override>
			</Components.FeatureCard>
			<Components.FeatureCard>
				<Override slot="image" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/v.svg?v=2020-11-26T16:23:49.040Z" />
				<Override slot="text">
					Velocity Architecture
				</Override>
			</Components.FeatureCard>
		</Section>
		<Section>
			<Text font="normal 700 91px/104.65px --fontFamily-googleInter" text-align="center" color="--light">
				The fastest and the most powerful console xbox for the entire history
			</Text>
		</Section>
		<Section>
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="flex-end"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/7cc62d15-d4d3-4274-b293-88e4c9571c18%201.png?v=2020-11-26T16:29:59.008Z) 0% 0% /auto repeat scroll padding-box"
				padding="192px 83px 193px 0px"
			/>
			<Box>
				<Override slot="SectionContent" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/7cc62d15-d4d3-4274-b293-88e4c9571c18%201.png?v=2020-11-26T16:29:59.008Z) 0% 0% /auto repeat scroll padding-box" padding="192px 83px 193px 0px" align-items="flex-end" />
				<Text font="700 72px/72px --fontFamily-googleInter" color="--light">
					Power you
					<br />
					dreams
				</Text>
				<Text font="23px/34.5px --fontFamily-googleInter" color="--textSecondary">
					From future adventures, to current
					<br />
					obsessions, to classic titles, thousands of
					<br />
					favorites across four generations of Xbox
					<br />
					look and play best on Xbox Series X.
				</Text>
				<Text font="700 21px/25px --fontFamily-googleInter" color="--accentGreen" text-transform="uppercase">
					learn more
				</Text>
			</Box>
		</Section>
		<Section>
			<Override slot="SectionContent" flex-direction="row" background="--color-dark" />
			<Box>
				<Text font="700 72px/79px --fontFamily-googleInter" color="--light">
					Optimized for
					<br />
					series X-S
				</Text>
				<Text font="23px/34px --fontFamily-googleInter" color="--textSecondary">
					From future adventures, to current
					<br />
					obsessions, to classic titles, thousands
					<br />
					of favorites across four generations
					<br />
					of Xbox look and play best on Xbox
					<br />
					Series X.
				</Text>
			</Box>
			<Box>
				<Image width="64px" height="64px" />
				<Image width="64px" height="64px" />
				<Image width="64px" height="64px" />
			</Box>
		</Section>
		<Section>
			<Text font="700 91px/91px --fontFamily-googleInter" text-align="center" color="--light">
				Complete control
			</Text>
			<Box display="grid" grid-template-columns="2" grid-template-rows="auto">
				<Box height="40px" />
				<Box grid-column="1 / 2">
					<Image height="100%" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/Rectangle%207.png?v=2020-11-26T16:55:40.977Z" width="100%" />
				</Box>
				<Box grid-column="2 / 3">
					<Text font="600 23px/34px --fontFamily-googleInter" color="--textSecondary">
						The new Xbox Wireless Controller brings elegant design, refined comfort, and instant sharing to a familiar favorite.
					</Text>
				</Box>
				<Box>
					<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/image%203.png?v=2020-11-26T17:01:28.696Z" />
				</Box>
				<Box>
					<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/image%202.png?v=2020-11-26T17:02:07.140Z" />
				</Box>
				<Box background="--color-accentGreen">
					<Text>
						Compatible with games on Windows 10
					</Text>
					<Text>
						The gamepad fully supports Windows 10, you can play all the games of this platform and switch easily
					</Text>
					<Image width="64px" height="64px" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/flash%201.png?v=2020-11-26T17:16:57.440Z" />
				</Box>
			</Box>
		</Section>
		<Section>
			<Text font="91px/91px --fontFamily-googleInter" color="--light">
				Technologically
				<br />
				perfect
			</Text>
			<Text font="600 23px/34px --fontFamily-googleInter" color="--textSecondary">
				The new Xbox Wireless Controller
				<br />
				brings elegant design, refined
				<br />
				comfort, and instant sharing to a
				<br />
				familiar favorite.
			</Text>
		</Section>
		<Section>
			<Text font="700 91px/104px --fontFamily-googleInter" color="--light" text-align="center">
				Xbox series X
			</Text>
			<Text font="700 53px/79px --fontFamily-googleInter" color="--light" text-align="center">
				$499.99
			</Text>
			<Text font="700 21px/25px --fontFamily-googleInter" color="--accentGreen" text-align="center" text-transform="uppercase">
				pre order
			</Text>
			<Box height="597px" background="url(https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/xbox%20purchase.png?v=2020-11-26T17:27:28.520Z),linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(134, 207, 9, 0.345313) 20.31%, rgba(155, 240, 11, 0.4) 23.53%, rgba(0, 219, 0, 0.4) 35.42%, rgba(0, 123, 0, 0.4) 40.63%, rgba(0, 132, 0, 0.4) 49.51%); opacity: 0.7;" />
		</Section>
		<Section>
			<Text font="700 91px/91px --fontFamily-googleInter" color="--light">
				Frequently asked questions control
			</Text>
			<Components.Accordion>
				<Override slot="text">
					When is Xbox Series X release date?
				</Override>
				<Override slot="text1">
					Xbox Series X is launching at participating retailers worldwide on November 10, 2020.
				</Override>
			</Components.Accordion>
			<Components.Accordion open={false}>
				<Override slot="text">
					Will my previous Xbox games work on Xbox Series X?
				</Override>
				<Override slot="text1">
					Xbox Series X is launching at participating retailers worldwide on November 10, 2020.
				</Override>
			</Components.Accordion>
			<Components.Accordion open={false}>
				<Override slot="text">
					Which games include Smart Delivery?
				</Override>
				<Override slot="text1">
					Xbox Series X is launching at participating retailers worldwide on November 10, 2020.
				</Override>
			</Components.Accordion>
		</Section>
		<Section>
			<Box display="flex">
				<Image width="144px" height="44px" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/logo.svg?v=2020-11-26T16:02:28.431Z" />
				<Box display="flex" justify-content="center" align-items="center" flex="1 0 auto">
					<Components.FooterLink margin="0px 43px 0px 0px" />
					<Components.FooterLink margin="0px 43px 0px 0px">
						Games
					</Components.FooterLink>
					<Components.FooterLink margin="0px 43px 0px 0px">
						contRoller
					</Components.FooterLink>
					<Components.FooterLink>
						inside
					</Components.FooterLink>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});