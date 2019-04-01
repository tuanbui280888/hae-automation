let csvToJson = require('convert-csv-to-json');

class JSONHandling {
    /**
       * @param {string} csvFilePath    path to csv file
       * @returns {object}
       */
    convertToJSON(csvFilePath) {
        let json = csvToJson.fieldDelimiter(',') .getJsonFromCsv(csvFilePath);;
        return json;
    }
}
module.exports = new JSONHandling();