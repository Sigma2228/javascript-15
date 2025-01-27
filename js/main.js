const salary = [
    {name: 'Oleg', balance: 5000},
    {name: 'Sergiy', balance: 10000},
    {name: 'Pavlo', balance: 7000}
]
const total = Object.values(salary).reduce((acc, value) => acc + value.balance, 0 )
console.log(total)
const friends = [
    {name: 'Oleg', friend: 'Andriy'},
    {name: 'Sergiy', friend: 'Andriy'},
    {name: 'Pavlo', friend: 'Artem'}
]
const friendName = 'Andriy'
const findFriend = friends.reduce((acc, user) => {
    if(user.friend === friendName){
     acc.have.push(friendName)
    }
    else {
        acc.havent.push('Немає друга')
    }
    return acc
}, {have: [], havent: []})
console.log(findFriend)
const peoples = [
    {name: 'Petro', numberfriend: 5},
    {name: 'Muhaylo', numberfriend: 2},
    {name: 'Yuriy', numberfriend: 8},
    {name: 'Matviy', numberfriend: 10}
]
const sortPeoples = peoples.reduce((acc, person) => {
    if(person.numberfriend >= 5 && person.numberfriend <= 10) {
     acc.over5friend.push(person.name)
    }
    else {
        acc.under5friend.push(person.name)
    }
    return acc
}, {over5friend: [], under5friend: []})

console.log(sortPeoples)
const users = [
    {name: 'Borus', skills: 'football'},
    {name: 'Artem', skills: 'hookey'},
    {name: 'David', skills: 'voleyball'},
    {name: 'Cigan', skills: 'basketball'}
]
const masiv = users.map(el => el.name + ': ' + el.skills).sort()
console.log(masiv)