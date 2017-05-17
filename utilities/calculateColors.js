const GONGRAM_COLORS = [
	"#000",
	"#00f",
	"#fff",
	"#0f0",
	"#f00"
]

export default ({ x, y }) => ({
	originColor: GONGRAM_COLORS[ (y * 2) % 5 ],
	otherColor: GONGRAM_COLORS[ x % 5 ]
})