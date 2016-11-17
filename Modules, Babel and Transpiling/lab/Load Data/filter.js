let data = require('./data');

function filter(property, value) {
    let result = data.filter((object, index) => {
        return object[property] == value;
    });

    return result;
}

module.exports = filter;