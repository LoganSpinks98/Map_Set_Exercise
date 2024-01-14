//1, 2, 3, 4


// "ref"


/* [[[1, 2, 3], true], [[1, 2, 3], false]]; */


const hasDuplicate = array => new Set(array).size !== array.length;


function isAVowel(character) {
    return "aeiou".includes(character);
}
function vowelCount(string) {
    const vowelCountMap = new Map();
    for (let character of string) {
        let lowerCaseCharacter = character.toLowerCase();
        if (isAVowel(lowerCaseCharacter)) {
            if (vowelCountMap.has(lowerCaseCharacter)) {
                vowelCountMap.set(lowerCaseCharacter, vowelCountMap.get(lowerCaseCharacter)+1);
            }
            else {
                vowelCountMap.set(lowerCaseCharacter, 1);
            }
        }
    }
    return vowelCountMap;
}