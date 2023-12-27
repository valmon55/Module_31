/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */
//let session =  new Map();
//используем объект
//let session = {
//    "startDate": new Date().toLocaleString(),
//    "userAgent": window.navigator.userAgent,
//    "userAge": prompt("Пожалуйста, введите ваш возраст?")
//};
//sessionStorage.setItem("startDate", new Date().toLocaleString());
//sessionStorage.setItem("userAgent", window.navigator.userAgent);
//sessionStorage.setItem("userAge", prompt("Пожалуйста, введите ваш возраст?"));
/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession(logger, checker){
    // Сохраним время начала сессии
    if (window.sessionStorage.getItem("startDate") == null) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }
    if (window.sessionStorage.getItem("userAgent") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }
    if (window.sessionStorage.getItem("userAge") == null) {
        let age = prompt("Пожалуйста, введите ваш возраст ?");
        window.sessionStorage.setItem("userAge", age);

        /* Возраст отсутствовал в sessionStorage. Значит, это первый визит пользователя, и
        при прохождении проверки на возраст он увидит приветствие*/
        checker(true)
    } else {
        /* Пользователь заходит не первый раз, приветствие не показываем. */
        checker(false)
    }
    /* Вызываем переданную в качестве колл-бэка функцию логирования.
        передавать в качестве коллбека не обязательно, можно вызвать и напрямую, но мы добавили для повторения.
    */
    logger()
}

/*
* Проверка возраста пользователя
* 
* */
let checker = function ( newVisit ){

    if (window.sessionStorage.getItem("userAge") >= 18) {
        if (newVisit) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        }
    }
    else{
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. ВыL будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}


/*
* Вывод данных сессии в консоль
* 
* */
let logger = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate") );
    console.log('Данные клиента: ' + window.sessionStorage.getItem("userAgent") );
    console.log('Возраст пользователя: : ' + window.sessionStorage.getItem("userAge") );
}

/*
* Функция для фильтраци контента
* Будет вызываться благодаря атрибуту oninput на index.html
* 
* */

function filterContent(){
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i < elements.length; i++ ){
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if(!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())){
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Всплывающее окно будет показано по таймауту
* 
* */
// setTimeout(() =>
//     alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
// 7000);




