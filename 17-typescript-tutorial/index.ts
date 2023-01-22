let hisChannel: string = 'Front Beginners'
let is20K: boolean = true

hisChannel += ' has 20K followers'

console.log(hisChannel)

const num: number = 10
const regex: RegExp = /^[0-9]/

const array1: string[] = hisChannel.split('')
const array2: number[] = [1, 2, 3, 4, 5]
const array3: Array<number | string> = [1, 2, 3, 4, 5, 'a']

interface objectProps {
    name: string
    role: string
    isAdmin: boolean
    age?: number
}

const object: objectProps = {
    name: 'Wesley Pedro',
    role: 'Developer',
    isAdmin: true,
}

function example({ name, role, isAdmin, age }: objectProps) { }

const ids: Record<number, string> = {
    [10]: 'a',
    [20]: 'b',
}

ids[30] = 'c'

console.log(ids[30] === 'asd' ? 'True' : 'False')

const arrayTest = [1, 2, 3].map((v) => `${v + 1}`)
console.log(arrayTest)