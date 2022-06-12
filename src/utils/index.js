

const spacesToHyphens = (str) => str.replaceAll(' ', '-');

const objValuesToStr = obj => obj? Object.values(obj).join(',') : '';

const objPropertiesToStr = obj => obj? Object.getOwnPropertyNames(obj) : '';

export {
    spacesToHyphens,
    objValuesToStr,
    objPropertiesToStr,
}