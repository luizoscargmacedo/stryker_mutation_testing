function isUserOldEnough(user) {
    return user.age >= 18;
}

function isPositive(number) {
    var result = false;
    if (number >= 0) {
        result = true;
    } 
    return result;
}

module.exports = {
    isUserOldEnough,
    isPositive,
};