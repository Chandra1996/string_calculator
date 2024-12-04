function add(numbersString) {
    if (!numbersString) return 0; // Handle empty string

    let delimiter = /,|\n/; // Default delimiters: comma or newline
    if (numbersString.startsWith("//")) {
        const delimiterMatch = numbersString.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            const rawDelimiter = delimiterMatch[1];
            delimiter = new RegExp(rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape special characters
            numbersString = numbersString.slice(delimiterMatch[0].length);
        }
    }

    const numArray = numbersString.split(delimiter).map(num => Number(num));
    const negatives = numArray.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
console.log(add("1,2,3")); // Output: 6
console.log(add("//;\n1;2;3")); // Output: 6
module.exports = add;
