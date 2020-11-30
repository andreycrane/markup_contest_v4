import React from "react";
import theme from "theme";
import { Theme, Link, Text, Span, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { FaTwitter, FaYoutube } from "react-icons/fa";
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
		<Components.MainMenu inner-max-width="1228px">
			<Override slot="menu-button-icon" />
			<Override slot="menu-button" />
			<Override slot="box" />
			<Override slot="menuLink2" />
			<Override slot="menuLink" />
			<Override slot="menu-button-icon,menu-button-icon-closed,menu-button-icon-opened" />
		</Components.MainMenu>
		<Section inner-max-width="1228px" inner-width="100%" padding="0 0 0 0" margin="0 0 84px 0">
			<Override slot="SectionContent" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/xbox.png?v=2020-11-26T18:14:14.029Z) 100% 100%/auto no-repeat scroll padding-box" height="1010px" justify-content="center" />
			<Text font="700 21px/25px --fontFamily-googleInter" color="--accentGreen" text-transform="uppercase">
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
		<Section
			box-sizing="border-box"
			inner-max-width="1228px"
			inner-width="100%"
			justify-content="center"
			padding="0 0 0 0"
			margin="0 0 100px 0"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				margin="0px 0px 0px 0px"
				width="100%"
			/>
			<Components.FeatureCard margin="0px 90px 0px 0px" />
			<Components.FeatureCard margin="0px 90px 0px 0px">
				<Override slot="image" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/hdr.svg?v=2020-11-26T16:23:07.666Z" />
				<Override slot="text">
					High Dynamic Range
				</Override>
			</Components.FeatureCard>
			<Components.FeatureCard margin="0px 90px 0px 0px">
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
		<Section
			id="section-browse"
			inner-max-width="1228px"
			inner-width="100%"
			padding="0 0 0 0"
			margin="0 0 120px 0"
		>
			<Text font="normal 700 91px/104.65px --fontFamily-googleInter" text-align="center" color="--light" margin="0 0 0 0">
				The fastest and the most powerful console xbox for the{" "}
				<Span color="--accentGreen">
					entire history
				</Span>
			</Text>
		</Section>
		<Section
			inner-max-width="1228px"
			inner-width="100%"
			justify-content="center"
			box-sizing="border-box"
			padding="0 0 0 0"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="flex-end"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/7cc62d15-d4d3-4274-b293-88e4c9571c18%201.png?v=2020-11-26T16:29:59.008Z) 0% 0% /cover no-repeat scroll padding-box"
				margin="0px 0px 0px 0px"
				padding="192px 118px 192px 0px"
				align-items="center"
				box-sizing="border-box"
			/>
			<Box>
				<Override slot="SectionContent" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/7cc62d15-d4d3-4274-b293-88e4c9571c18%201.png?v=2020-11-26T16:29:59.008Z) 0% 0% /auto repeat scroll padding-box" padding="192px 83px 193px 0px" align-items="flex-end" />
				<Text font="700 72px/72px --fontFamily-googleInter" color="--light" margin="16px 0px 30px 0px">
					Power you
					<br />
					dreams
				</Text>
				<Text font="23px/34.5px --fontFamily-googleInter" color="--textSecondary" margin="16px 0px 30px 0px">
					From future adventures, to current
					<br />
					obsessions, to classic titles, thousands of
					<br />
					favorites across four generations of Xbox
					<br />
					look and play best on Xbox Series X.
				</Text>
				<Text
					font="700 21px/25px --fontFamily-googleInter"
					color="--accentGreen"
					text-transform="uppercase"
					hover-color="#A5FA15"
					hover-text-shadow="0px 0px 20px rgba(155, 240, 11, 0.5)"
					transition="text-shadow .5s ease 0s"
				>
					<Link href="/" color="--accentGreen" text-decoration-line="initial">
						learn more
					</Link>
				</Text>
			</Box>
		</Section>
		<Section
			id="section-games"
			box-sizing="border-box"
			inner-max-width="1228px"
			inner-width="100%"
			justify-content="center"
			padding="70px 0 132px 0"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				background="--color-dark"
				overflow-y="hidden"
				box-sizing="border-box"
				justify-content="center"
				margin="0 0 0 0"
			/>
			<Box
				flex="1 0 50%"
				display="flex"
				flex-direction="column"
				justify-content="center"
				padding="0px 0px 0px 83px"
				box-sizing="border-box"
			>
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
			<Box flex="1 0 50%" position="relative" min-height="755px" overflow-y="hidden">
				<Image
					src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/Frame%20237.png?v=2020-11-26T16:43:21.891Z"
					width="263px"
					height="342px"
					position="absolute"
					top="auto"
					left="auto"
					zIndex="0"
					right="100px"
					bottom="0px"
				/>
				<Image
					src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/Group%20237.png?v=2020-11-26T16:43:25.506Z"
					position="absolute"
					top="38px"
					left="auto"
					zIndex="0"
					right="99px"
					bottom="auto"
					width="206px"
					height="290px"
				/>
				<Image
					width="325px"
					src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/Group%20236.png?v=2020-11-26T18:18:35.720Z"
					position="absolute"
					top="111px"
					left="23px"
					zIndex="1"
					bottom="auto"
					right="auto"
					height="454px"
				/>
			</Box>
		</Section>
		<Section
			id="controller-section"
			inner-max-width="1228px"
			quarkly-title="gallery section"
			padding="0 0 0 0"
			margin="0 0 248px 0"
		>
			<Text font="700 91px/91px --fontFamily-googleInter" text-align="center" color="--light" margin="0 0 0 0">
				Complete{" "}
				<Span color="--accentGreen">
					control
				</Span>
			</Text>
			<Box
				display="grid"
				grid-template-rows="auto"
				quarkly-title="masonry layout"
				grid-gap="18px 15px"
				grid-template-columns="1fr 1fr"
				grid-auto-rows="100px"
				box-sizing="border-box"
			>
				<Box box-sizing="border-box" grid-row="span  2" />
				<Box
					box-sizing="border-box"
					float="left"
					grid-row="span 4"
					display="flex"
					align-items="center"
					padding="0px 84px 0px 84px"
				>
					<Text font="600 23px/34px --fontFamily-googleInter" color="--textSecondary">
						The new Xbox Wireless Controller brings elegant design, refined comfort, and instant sharing to a familiar favorite.
					</Text>
				</Box>
				<Box box-sizing="border-box" float="right" grid-row="span 7">
					<Image height="100%" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/Rectangle%207.png?v=2020-11-26T16:55:40.977Z" width="100%" object-fit="cover" />
				</Box>
				<Box box-sizing="border-box" float="left" grid-row="span 7">
					<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/image%202.png?v=2020-11-26T17:02:07.140Z" object-fit="cover" />
				</Box>
				<Box box-sizing="border-box" float="right" grid-row="span 7">
					<Image height="100%" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/image%203.png?v=2020-11-26T17:01:28.696Z" width="100%" object-fit="cover" />
				</Box>
				<Box
					box-sizing="border-box"
					background="--color-accentGreen"
					grid-row="span 7"
					padding="86px 84px 86px 84px"
					overflow-x="hidden"
					overflow-y="hidden"
				>
					<Text font="700 60px/66px --fontFamily-googleInter">
						Compatible
						<br />
						with games on Windows 10
					</Text>
					<Text font="600 23px/34px --fontFamily-googleInter" color="--textColor">
						The gamepad fully supports Windows 10, you can play all the games of this platform and switch easily
					</Text>
					<Box position="relative" height="208px" transition="transform 1s ease 0s" hover-transform="translateX(214px)">
						<Image
							width="100%"
							src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/flash%201.png?v=2020-11-26T17:16:57.440Z"
							position="absolute"
							height="100%"
							top={0}
							left={0}
						/>
						<Image
							position="absolute"
							width="100%"
							height="100%"
							top={0}
							left={0}
							src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/flash%202.png?v=2020-11-28T17:47:15.947Z"
							opacity="0"
							transition="opacity 1s ease 0s"
							hover-opacity="1"
						/>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section id="section-inside" inner-max-width="1228px" inner-width="100%" padding="0 0 0 0">
			<Override slot="SectionContent" height="1199px" position="relative" />
			<Box
				position="absolute"
				top={0}
				left={0}
				width="100%"
				height="100%"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/xbox%20tech%202.png?v=2020-11-28T18:23:03.650Z) center center/contain no-repeat scroll padding-box"
				pointer-events="none"
			/>
			<Box
				position="absolute"
				top={0}
				left={0}
				width="100%"
				height="100%"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/xbox%20tech%201.png?v=2020-11-26T18:43:35.207Z) center center/contain no-repeat scroll padding-box"
				opacity="1"
				transition="opacity 1s ease 0s"
				hover-opacity="0"
			/>
			<Text font="normal 700 91px/91px --fontFamily-googleInter" color="--light" margin="0 0 41px 0">
				Technologically
				<br />
				<Span color="--accentGreen">
					perfect
				</Span>
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
			<Components.PartBtn />
			<Components.PartBtn
				bottom="574px"
				height="42px"
				left="537px"
				right="auto"
				top="auto"
				width="42px"
			/>
			<Components.PartBtn
				top="482px"
				right="469px"
				bottom="auto"
				left="auto"
				width="42px"
				height="42px"
			/>
			<Components.PartBtn
				top="303px"
				right="512px"
				bottom="auto"
				left="auto"
				width="42px"
				height="42px"
			/>
		</Section>
		<Section
			inner-max-width="1228px"
			inner-width="100%"
			background="radial-gradient(ellipse at center bottom,rgba(0, 0, 0, 0) 0%,rgba(134, 207, 9, 0.345313) 8.1%,rgba(155, 240, 11, 0.4) 15.2%,rgba(0, 219, 0, 0.4) 23.3%,rgba(0, 123, 0, 0.4) 32.9%,rgba(0, 123, 0, 0.3) 35.7%,rgba(0, 123, 0, 0.2) 50%,transparent 63.3%) no-repeat"
			padding="0 0 0 0"
			transition="background 1s ease 0s"
			margin="0 0 143px 0"
		>
			<Text font="700 91px/104px --fontFamily-googleInter" color="--light" text-align="center" margin="0 0 0 0">
				Xbox series X
			</Text>
			<Text font="700 53px/79px --fontFamily-googleInter" color="--light" text-align="center" margin="0 0 0 0">
				$499.99
			</Text>
			<Text font="700 21px/25px --fontFamily-googleInter" color="--accentGreen" text-align="center" text-transform="uppercase">
				<Link href="/" color="--accentGreen" text-decoration-line="initial">
					pre order
				</Link>
			</Text>
			<Box height="597px" background="url(https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/xbox%20purchase.png?v=2020-11-26T17:27:28.520Z)" position="relative">
				<Image
					height="173px"
					src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/badge.svg?v=2020-11-28T19:31:01.204Z"
					width="173px"
					position="absolute"
					top="77px"
					right="auto"
					bottom="auto"
					left="310px"
					transform="rotate(0deg)"
					transition="transform 1s ease 0s"
					hover-transform="rotate(180deg)"
				/>
			</Box>
		</Section>
		<Section inner-max-width="1228px" inner-width="100%" padding="0 0 0 0" margin="0 0 230px 0">
			<Text font="700 91px/91px --fontFamily-googleInter" color="--light" margin="0 0 109px 0">
				Frequently asked questions{" "}
				<Span color="--accentGreen">
					control
				</Span>
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
				<Override slot="box1" />
			</Components.Accordion>
		</Section>
		<Section inner-max-width="1228px" inner-width="100%" padding="0 0 0 0">
			<Box display="flex" margin="0px 0px 99px 0px">
				<Image height="44px" src="https://uploads.quarkly.io/5fbfc2ce08b41a001fec7a5a/images/logo.svg?v=2020-11-26T16:02:28.431Z" width="144px" />
				<Box display="flex" justify-content="center" align-items="center" flex="1 0 auto">
					<Components.FooterLink margin="0px 43px 0px 0px" href="#section-browse" />
					<Components.FooterLink margin="0px 43px 0px 0px" href="#section-games">
						Games
					</Components.FooterLink>
					<Components.FooterLink margin="0px 43px 0px 0px" href="#controller-section">
						contRoller
					</Components.FooterLink>
					<Components.FooterLink href="#section-inside">
						inside
					</Components.FooterLink>
				</Box>
				<Box display="flex" align-items="center">
					<Components.SocialLink1 href="/" />
					<Components.SocialLink1 href="/">
						<Override slot="icon" category="fa" icon={FaTwitter} />
					</Components.SocialLink1>
					<Components.SocialLink1 href="/">
						<Override slot="icon" category="fa" icon={FaYoutube} />
					</Components.SocialLink1>
				</Box>
			</Box>
			<Box display="flex" justify-content="space-between" margin="0px 0px 75px 0px">
				<Text font="500 16px/24px --fontFamily-googleInter" color="--textSecondary">
					<Link color="--textSecondary" text-decoration-line="initial" href="/">
						© Microsoft 2020
					</Link>
				</Text>
				<Text font="500 16px/24px --fontFamily-googleInter" color="--textSecondary">
					<Link
						color="--textSecondary"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						text-decoration-line="initial"
						href="/"
					>
						Contact us
					</Link>
					{" "}
					<Link color="--textSecondary" text-decoration-line="initial" href="/">
						Privacy & cookies
					</Link>
				</Text>
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