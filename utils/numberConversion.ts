function convertNumberToAbbreviations(val: number): string {
    const valueToString = val + "";
    const abbriviations = ["", "k", "m", "b", "t"];

    // dividing the value by 3.
    const numberOfDivoision = Math.floor(valueToString.length / 3);

    // calculating the precised value.
    const expectedValue =
        numberOfDivoision !== 0 ? val / Math.pow(1000, numberOfDivoision) : val;

    let finalValue = parseFloat(expectedValue.toPrecision(2));

    if (finalValue % 1 !== 0) {
        finalValue = finalValue.toFixed(1) as unknown as number;
    }

    // appending the letter to precised value.
    return finalValue + abbriviations[numberOfDivoision];
}

export default convertNumberToAbbreviations;
