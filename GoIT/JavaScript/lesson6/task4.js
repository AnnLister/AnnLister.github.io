var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

function ageSort(a, b){
    if(a.age < b.age)
        return -1;
    if(a.age > b.age)
        return 1;
    return 0;
}
people.sort(ageSort);

console.log(people[0].age);