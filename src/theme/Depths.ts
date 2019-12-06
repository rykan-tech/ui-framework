const Depth = (depth: number) => {
	return `0 ${depth / 2.5}px ${depth / 2.5 + depth / 2}px 0 rgba(0, 0, 0, .5), 0 ${depth / 16}px ${depth / 5}px 0 rgba(0, 0, 0, .4)`;
}

const Depths = {
	depth4: "0 1.6px 3.6px 0 rgba(0,0,0,.132),0 .3px .9px 0 rgba(0,0,0,.108)",
	depth8: "0 3.2px 7.2px 0 rgba(0,0,0,.132),0 .6px 1.8px 0 rgba(0,0,0,.108)",
	depth16: "0 6.4px 14.4px 0 rgba(0,0,0,.132),0 1.2px 3.6px 0 rgba(0,0,0,.108)",
	depth32: "0 12.8px 28.8px 0 rgba(0,0,0,.22),0 2.4px 7.2px 0 rgba(0,0,0,.18)",
	depth64: "0 25.6px 57.6px 0 rgba(0,0,0,.22),0 4.8px 14.4px 0 rgba(0,0,0,.18)",
}

Depths.depth4 = Depth(4);
Depths.depth8 = Depth(8);
Depths.depth16 = Depth(16);
Depths.depth32 = Depth(32);
Depths.depth64 = Depth(64);

export { Depths, Depth };