// Создаем объект Map
let myMap = new Map();
myMap.set("Германия", "Берлин")
myMap.set("Швеция", "Стокгольм")
myMap.set(1, "Москва")

let newArray = [];
// Перебор Map в цикле for
for (let result of myMap){
    newArray.push(result);
}
console.log(newArray);

let newArrayOfStrings = [];
// Перебор Map с помощью Array.from
// Позволяет на лету выполнять операции с парой ключ-значение
Array.from(myMap, ([key,value]) => newArrayOfStrings.push(`${key} - ${value}`) );
console.log(newArrayOfStrings);



const saveText = function () {
    let currentText = document.getElementsByTagName("input")[0].value.toLowerCase();
    alert("Предыдущий текст: " + this.lastText + "\n " +
        "Текущий текст: " + currentText);
    this.lastText = currentText;
}
