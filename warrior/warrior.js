function warrior(candidate, document) {
    return candidate.find(function(item) {
        return item.name === document;
    });
}

module.exports = warrior