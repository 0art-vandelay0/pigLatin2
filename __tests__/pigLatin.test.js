import {pigLatin, reversePigLatin} from "../src/pigLatin";

describe("pigLatin", () => {

    test('should turn the original sentence into piglatin', () => {
        expect(pigLatin("this is a phrase")).toEqual("isthay isway away rasephay");
    });

});

describe("reversePigLatin", () => {


    test('should reverse the pig Latin sentence into original english', () => {
        expect(reversePigLatin("isthay isway away rasephay")).toEqual("this is a phrase");
    });
});