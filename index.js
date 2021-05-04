// @ts-check

const { sample } = require("@jonahsnider/util");

const boolean = [false, true];

/** @type {import('prettier').Options} */
module.exports = {
	get printWidth() {
		return sample([20, 80, 100, 120, 140, 160]);
	},
	get tabWidth() {
		return sample([0, 2, 4, 6, 8]);
	},
	get useTabs() {
		return sample(boolean);
	},
	get semi() {
		return sample(boolean);
	},
	get singleQuote() {
		return sample(boolean);
	},
	get quoteProps() {
		return sample(["as-needed", "consistent", "preserve"]);
	},
	get jsxSingleQuote() {
		return sample(boolean);
	},
	get trailingComma() {
		return sample(["es5", "none", "all"]);
	},
	get bracketSpacing() {
		return sample(boolean);
	},
	get jsxBracketSameLine() {
		return sample(boolean);
	},
	get arrowParens() {
		return sample(["avoid", "always"]);
	},
	get insertPragma() {
		return sample(boolean);
	},
	get proseWrap() {
		return sample(["always", "never", "preserve"]);
	},
	get htmlWhitespaceSensitivity() {
		return sample(["css", "strict", "ignore"]);
	},
	get vueIndentScriptAndStyle() {
		return sample(boolean);
	},
	get endOfLine() {
		return sample(["lf", "crlf", "cr"]);
	},
};

