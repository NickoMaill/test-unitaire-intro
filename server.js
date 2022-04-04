const math = require("./utils/math");

test("if sum up two numbers", () => {
	const result = math.sum(1, 2);
	expect(result).toBe(3);
});
