const number = [4, 6, 8, 12, 43, 23]

// function isEven(num) {
//     if(num % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

const newValues = number.filter((num) => num % 2 == 0)

console.log(newValues)


const frontBeginners = [
    { name: 'Carlinhos da massa', age: 25, title: 'JR', test: 35 },
    { name: 'Joãzinho do pastel', age: 32, title: 'PL', test: 56 },
    { name: 'Harry do Potter', age: 80, title: 'SR', test: 90 },
    { name: 'Vitinho o pequeno', age: 50, title: 'JR', test: 55 },
    { name: 'Juvenal', age: 80, title: 'SR', test: 55 },
    { name: 'Torquato', age: 32, title: 'JR', test: 55 },
]

const titlePL = frontBeginners.filter((person) => person.title === 'PL')

console.log(titlePL)

const ageGt30 = frontBeginners.filter((person) => person.age > 30)

console.log(ageGt30)

const ageGt30AndJR = frontBeginners.filter((person) => person.age > 30 && person.title === 'JR')

console.log(ageGt30AndJR)

const ageGt30AndJRByName = frontBeginners
    .filter((person) => person.age > 30 && person.title === 'JR')
    .map((item) => item.name)

console.log(ageGt30AndJRByName)

const ageGt30AndJRByNameWithSome = frontBeginners
    .filter((person) => person.age > 30 && person.title === 'JR')
    .map((item) => item.name)
    .some((name) => name === 'Torquato')

console.log(ageGt30AndJRByNameWithSome)