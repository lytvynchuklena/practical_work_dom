// РОБОТА В АУДИТОРІЇ

// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

let textHeader = document.getElementById('main_header');
textHeader.style.color = 'red';
textHeader.innerText = 'mon-year';


// b) робить шириниу елементу ul 400px


let htmlULElement = document.getElementsByTagName('ul');

htmlULElement[0].style.width = '400px';


// c) робить шириниу всіх елементів з класом linkList шириною 50%


let liElement = document.getElementsByClassName('linkList');
for (let i = 0; i < liElement.length; i++) {
    liElement[i].style.width = '50%';
}


// d) отримує текст який зберігається в елементі з класом listElement2


let liElement2 = document.getElementsByTagName('li');
console.log(liElement2[1].innerText);


// e) отримує всі елементи li та змінює ім колір фону на сірий


let htmlLiElement = document.getElementsByTagName('li');
for (let i = 0; i < htmlLiElement.length; i++) {
    htmlLiElement[i].style.backgroundColor = 'gray';
}


// f) отримує всі елементи 'a' та додає їм клас anchor


//
// let aElement = document.getElementsByTagName('a');
// for (let i = 0; i < aElement.length; i++) {
//     aElement[i].classList.add('anchor');
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aElement = document.getElementsByTagName('a');
for (let i = 0; i < aElement.length; i++) {
    if (aElement[i].innerText === 'link3') {
        aElement[i].style.fontSize = '40px';
    }
}


// l) отримати елементи p та змінити їм padding на 20px

let pElement = document.getElementsByTagName('p');
for (let i = 0; i < pElement.length; i++) {
    pElement[i].style.padding = '20px'

}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)


let textElement = document.getElementsByClassName('text2');
for (let i = 0; i < textElement.length; i++) {
    textElement[i].innerHTML = 'mon-year';

}


//
// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html


let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

let htmlTitleElement = document.createElement('h1');
htmlTitleElement.innerText = 'Правила бойцовского клуба';
document.body.appendChild(htmlTitleElement);

let htmlDivElement = document.createElement('div');

htmlDivElement.id = 'wrap';
document.body.appendChild(htmlDivElement);


for (let i = 0; i < rules.length; i++) {
    const ruleDiv = document.createElement('div');

    ruleDiv.classList.add('rules', 'rule' + (i + 1))


    ruleDiv.innerHTML = `
    <h2>${rules[i].title}</h2> 
    <p>${rules[i].body}</p>`;

    htmlDivElement.appendChild(ruleDiv);
}


// ===========================================================================


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]


let usersWithCities = [];
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (let userWithId of usersWithId) {
    for (let cityWithId of citiesWithId) {
        if (userWithId.id === cityWithId.user_id) {
            usersWithCities.push({
                id: userWithId.id,
                name: userWithId.name,
                age: userWithId.age,
                status: userWithId.status,
                address: {
                    user_id: cityWithId.user_id,
                    country: cityWithId.country,
                    city: cityWithId.city
                }
            });
        }
    }
}

console.log(usersWithCities);











