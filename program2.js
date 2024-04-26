function longestSubsing(s) {


    let maxLength = 0;
    let start = 0;
    let charMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charMap[char] !== undefined && charMap[char] >= start) {
            start = charMap[char] + 1;
        }

        charMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}


const inputsing = "abcabcbb";
console.log("Length of longest subsing without repeating characters:", longestSubsing(inputsing)); 


module.exports = { longestSubsing };
