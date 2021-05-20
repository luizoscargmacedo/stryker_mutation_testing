const { isUserOldEnough, isPositive } = require('./warriorAge')

describe('Unit testing to validate the Age', () => {
    test('Warrior between the age limit to fight', () => {
        let user = {
            name: "Siegfried",
            age: "25"
        }
        let ageResult = isUserOldEnough(user)
        expect(ageResult).toBe(true)
    })

    test('Minimum age to fight', () => {
        let user = {
            name: "Fenrir",
            age: "18"
        }
        let ageResult = isUserOldEnough(user)
        expect(ageResult).toBe(true)
    })

    test('Validation if warrior is under minimum age to fight', () => {
        let user = {
            name: "Ivor",
            age: "14"
        }
        let ageResult = isUserOldEnough(user)
        expect(ageResult).toBe(false)
    })
})

describe('Unit testing to verify if the number is Positive', () => {
    test('Positive 10', () => {
      let number = "10";
      let result = isPositive(number)
      expect(result).toBe(true)
    })

    // mutant validation
    test('number 0', () => {
     let number = "0";
     let result = isPositive(number)
     expect(result).toBe(true)
    }) 

    test('Negative  simulation -9', () => {
      let number = "-9";
      let result = isPositive(number)
      expect(result).toBe(false)
    });
});