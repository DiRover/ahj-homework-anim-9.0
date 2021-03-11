export default class ButtonPusher {
    constructor(parent) {
        this.press = true;
        this.parent = parent; //записываем контейнер для лайков
        //массив стилей с разными траекториями движения лайков
        this.styles = ['like-transition-first', 'like-transition-second', 'like-transition-third', 'like-transition-fourth'];
        this.interval = undefined; //переменная для работы с функцией интервалов
    };

    pushDown() {//для понимания что кнопка нажата
        this.press = true;
    };

    pushUp() {//для понимания что кнопка отжата
        this.press = false;
    };

    getRandom(max) {//метод для получения случайного числа (индекса) и получения определённого стиля
        return Math.floor(Math.random() * Math.floor(max));
    };

    createLike() {//метод создания лайка
        if (this.press) {//проверяем нажата ли кнопка
            const randomIndex = this.getRandom(4);//определяем случайный индекс в массиве классов с разной траекторией
            const like = document.createElement('div');//создаём элемент с сердечка
            like.setAttribute('class', `like ${this.styles[randomIndex]}`);//присваиваем случайный класс с траекторией
            this.parent.append(like);//запускаем элемент с сердечком в контейнер
            setTimeout(() => like.remove(), 510);//убираем сердечко когда оно достигло 200 пикселей
        }
        console.log('+')
    };

    buttonPress() {//метод обработки нажатия кнопки
        this.interval = setInterval(() => {this.createLike()}, 200);
    }

    deleteInterval() {//удаляем интервал после отжатия кнопки для избежания утечки памяти
        clearInterval(this.interval);
    }
};
