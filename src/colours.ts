const colours = {
	yellow_gold:		"#FFB900",
	gold:				"#FF8C00",
	orange_bright:		"#F7630C",
	orange_dark:		"#CA5010",
	rust:				"#DA3B01",
	pale_rust:			"#EF6950",
	brick_red:			"#D13438",
	mod_red:			"#FF4343",
	pale_red:			"#E74856",
	red:				"#E81123",
	rose_bright:		"#EA005E",
	rose:				"#C30052",
	plum_light:			"#E3008C",
	plum:				"#BF0077",
	orchid_light:		"#C239B3",
	orchid:				"#9A0089",
	default_blue:		"#0078D7",
	navy_blue:			"#0063B1",
	purple_shadow:		"#8E8CD8",
	purple_shadow_dark:	"#6B69D6",
	iris_pastel:		"#8764B8",
	iris_spring:		"#744DA9",
	violet_red_light:	"#B146C2",
	violet_red:			"#881798",
	cool_blue_light:	"#0099BC",
	cool_blue:			"#2D7D9A",
	seafoam:			"#00B7C3",
	seafoam_teal:		"#038387",
	mint_light:			"#00B294",
	mint_dark:			"#018574",
	turf_green:			"#00CC6A",
	sport_green:		"#10893E",
	grey:				"#7A7574",
	grey_brown:			"#5D5A58",
	steel_blue:			"#68768A",
	metal_blue:			"#515C6B",
	pale_moss:			"#567C73",
	moss:				"#486860",
	meadow_green:		"#498205",
	green:				"#107C10",
	overcast:			"#767676",
	storm:				"#4C4A48",
	blue_grey:			"#69797E",
	grey_dark:			"#4A5459",
	liddy_green:		"#647C64",
	sage:				"#525E54",
	camouflage_desert:	"#847545",
	camouflage:			"#7E735F",
}

const colours_array = [
	{
		name: "Yellow Gold",
		code: "yellow_gold",
		value: "#FFB900"
	},
	{
		name: "Gold",
		code: "gold",
		value: "#FF8C00"
	},
	{
		name: "Orange Bright",
		code: "orange_bright",
		value: "#F7630C"
	},
	{
		name: "Orange Dark",
		code: "orange_dark",
		value: "#CA5010"
	},
	{
		name: "Rust",
		code: "rust",
		value: "#DA3B01"
	},
	{
		name: "Pale Rust",
		code: "pale_rust",
		value: "#EF6950"
	},
	{
		name: "Brick Red",
		code: "brick_red",
		value: "#D13438"
	},
	{
		name: "Mod Red",
		code: "mod_red",
		value: "#FF4343"
	},
	{
		name: "Pale Red",
		code: "pale_red",
		value: "#E74856"
	},
	{
		name: "Red",
		code: "red",
		value: "#E81123"
	},
	{
		name: "Rose Bright",
		code: "rose_bright",
		value: "#EA005E"
	},
	{
		name: "Rose",
		code: "rose",
		value: "#C30052"
	},
	{
		name: "Plum Light",
		code: "plum_light",
		value: "#E3008C"
	},
	{
		name: "Plum",
		code: "plum",
		value: "#BF0077"
	},
	{
		name: "Orchid Light",
		code: "orchid_light",
		value: "#C239B3"
	},
	{
		name: "Orchid",
		code: "orchid",
		value: "#9A0089"
	},
	{
		name: "Default Blue",
		code: "default_blue",
		value: colours.default_blue
	},
	{
		name: "Navy Blue",
		code: "navy_blue",
		value: colours.navy_blue
	},
	{
		name: "Purple Shadow",
		code: "purple_shadow",
		value: colours.purple_shadow
	},
	{
		name: "Purple Shadow Dark",
		code: "purple_shadow_dark",
		value: colours.purple_shadow_dark
	},
	{
		name: "Iris Pastel",
		code: "iris_pastel",
		value: colours.iris_pastel
	},
	{
		name: "Iris Spring",
		code: "iris_spring",
		value: colours.iris_spring
	},
	{
		name: "Violet Red Light",
		code: "violet_red_light",
		value: colours.violet_red_light
	},
	{
		name: "Violet Red",
		code: "violet_red",
		value: colours.violet_red
	},
	{
		name: "Cool Blue Light",
		code: "cool_blue_light",
		value: colours.cool_blue_light
	},
	{
		name: "Cool Blue",
		code: "cool_blue",
		value: colours.cool_blue
	},
	{
		name: "Seafoam",
		code: "seafoam",
		value: colours.seafoam
	},
	{
		name: "Seafoam Teal",
		code: "seafoam_teal",
		value: colours.seafoam_teal
	},
	{
		name: "Mint Light",
		code: "mint_light",
		value: colours.mint_light
	},
	{
		name: "Mint Dark",
		code: "mint_dark",
		value: colours.mint_dark
	},
	{
		name: "Turf Green",
		code: "turf_green",
		value: colours.turf_green
	},
	{
		name: "Sport Green",
		code: "sport_green",
		value: colours.sport_green
	},
	{
		name: "Grey",
		code: "grey",
		value: colours.grey
	},
	{
		name: "Grey Brown",
		code: "grey_brown",
		value: colours.grey_brown
	},
	{
		name: "Steel Blue",
		code: "steel_blue",
		value: colours.steel_blue
	},
	{
		name: "Metal Blue",
		code: "metal_blue",
		value: colours.metal_blue
	},
	{
		name: "Pale Moss",
		code: "pale_moss",
		value: colours.pale_moss
	},
	{
		name: "Moss",
		code: "moss",
		value: colours.moss
	},
	{
		name: "Meadow Green",
		code: "meadow_green",
		value: colours.meadow_green
	},
	{
		name: "Green",
		code: "green",
		value: colours.green
	},
	{
		name: "Overcast",
		code: "overcast",
		value: colours.overcast
	},
	{
		name: "Store",
		code: "storm",
		value: colours.storm
	},
	{
		name: "Blue Grey",
		code: "blue_grey",
		value: colours.blue_grey
	},
	{
		name: "Grey Dark",
		code: "grey_dark",
		value: colours.grey_dark
	},
	{
		name: "Liddy Green",
		code: "liddy_green",
		value: colours.liddy_green
	},
	{
		name: "Sage",
		code: "sage",
		value: colours.sage
	},
	{
		name: "Camouflage Desert",
		code: "camouflage_desert",
		value: colours.camouflage_desert
	},
	{
		name: "Camouflage",
		code: "camouflage",
		value: colours.camouflage
	},
];

export {
	colours,
	colours as colors,
	colours_array,
	colours_array as colors_array
}