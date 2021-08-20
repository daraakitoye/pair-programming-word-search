//pair programming with @akshathakulkarni

const transpose = require('./transpose');

const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return undefined;
    }
    const transposed = transpose(letters);

    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {

        if (l.includes(word)) {
            return true;
        }
    }

    const verticalJoin = transposed.map(ls => ls.join(''));
    for (l of verticalJoin) {

        if (l.includes(word)) {
            return true;
        }
    }
    return false;

}

module.exports = wordSearch;
