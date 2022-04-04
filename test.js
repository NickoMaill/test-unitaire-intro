const math = require("./utils/math");

//PEER OR UNPEER FUNCTION
test("if params is a number & number is peer function return true", () => {
	const peer = math.peerOrUnpeer(32);
	expect(peer).toBe(true);
});

test("if params is a number & number is unpeer function return false", () => {
	const peer = math.peerOrUnpeer(33);
	expect(peer).toBe(false);
});

test("if params is a string function return false", () => {
	const peer = math.peerOrUnpeer("number");
	expect(peer).toBe(false);
});

test("if params is a string number function return true", () => {
	const peer = math.peerOrUnpeer("12");
	expect(peer).toBe(true);
});

//FORMAT DATE

test("if date matches with the pattern 'yyyy-mm-dd' function return 'dd/mm/yyyy'", () => {
	const date = math.formatDate("2020-12-02");
	expect(date).toBe("02/12/2020");
});

test("if date don't matches with the pattern 'yyyy-mm-dd' function return 'dd/mm/yyyy'", () => {
	const date = math.formatDate("grihgerzfherzmjrehzfhefzefh");
	expect(date).toBe(null);
});
