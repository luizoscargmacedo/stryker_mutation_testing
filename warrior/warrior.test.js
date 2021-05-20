const warrior = require('./warrior')

//array
const candidate = [{"name": "Thor", "location": "Asgard"},{"name": "Ragnar", "location": "Kattegat"}]
const warriorIdentified = {"name": "Thor", "location": "Asgard"}

describe('Warrior', () => {
    test('To search a warrior information', () => {
        expect(warrior(candidate, "Thor")).toEqual(warriorIdentified)
    })

    test('To search a warrior that is not on candidates list', () => {
        expect(warrior(candidate, "Harry")).toBeUndefined()
    });
});