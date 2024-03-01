export {};
const baseSpacing = 2;

function generateSpacing() {
    const result : {[key: string]: any} = {};

    for (let i = 0; i <= 100; i++) {
        const halfNumber = i + 0.5;
        result[halfNumber.toString()] = `${halfNumber * baseSpacing}px`;
        result[i] = `${i * baseSpacing}px`;
    }

    return result;
}

module.exports = { generateSpacing };
