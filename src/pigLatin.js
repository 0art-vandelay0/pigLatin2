export function pigLatin(text) {
    const textArray = text.split(" ");
    // textArray = ["hello", "world", "this", "is", "a", "test"]
    const vowels = ["a", "e", "i", "o", "u"];
    const wordsToPL = [];

    textArray.forEach(function(element) {
        const char1 = element[0].toLowerCase();
        if (vowels.includes(char1)) {
            wordsToPL.push(element + "way");
            // wordsToPL = ["hello", "world", "this", "ISWAY", "AWAY", "test"]
        } else {
            const char2 = element[1].toLowerCase();
            if (vowels.includes(char2)) {
                const elementWoFirstChar = element.slice(1);
                wordsToPL.push(elementWoFirstChar + char1 + "ay");
                // wordsToPL = ["ELLOHAY", "ORLDWAY", "this", "isway", "away", "ESTAY"]
            } else {
                const elementWoSecondChar = element.slice(2);
                wordsToPL.push(elementWoSecondChar + char1 + char2 + "ay");
                // wordsToPL = ["ellohay", "orldway", "ISTHAY", "isway", "away", "esttay"]
            }
        }
    });
    // return wordsToPL;
    return wordsToPL.join(" ");
}

export function reversePigLatin(text) {
    const wordsArray = text.split(" ");
    const reversedWords = [];

    wordsArray.forEach(function(word) {
        if (word.endsWith("way")) {
            reversedWords.push(word.slice(0, -3));
        } else if (word.endsWith("ay")) {
            const modifiedWord = word.slice(0, -2);
            reversedWords.push(modifiedWord);
        } else {
            const match = word.match(/[aeiou]/i);
            if (match) {
                const vowelIndex = match.index;
                const consonantCluster = word.substring(0, vowelIndex);
                const remainingWord = word.substring(vowelIndex, word.length - 2);
                reversedWords.push(consonantCluster + remainingWord);
            }
        }
    });

    return reversedWords.join(" ");
}

