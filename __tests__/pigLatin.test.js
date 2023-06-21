import pigLatin from "../src/pigLatin";

describe("pigLatin", () => {

    test('should return an array of words', () => {
        expect(pigLatin("hello world this is a test")).toEqual(["ellohay", "orldway", "isthay", "isway", "away", "esttay"]);
    });
});