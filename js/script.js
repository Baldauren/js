'use strict';


// ! object
const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++){
            const a = prompt("Один из последних просмотренных фильмов?",'').trim(), //! метод trim() ол екі жақтан пробелдерді алып тастау үшін қажет
                b = prompt("на сколько оцените его?",'');
                personalMovieDB.movies[a] = b;
        
                if(a != null && b != null && a != '' && b != '' &&  a.length < 50 ){
                    console.log(personalMovieDB);
                    console.log('Done');
        
                } else {
                    console.log("error");
                    i--;
                }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("вы классик зритель");
        } else if (personalMovieDB.count >= 30){
            console.log("Вы киноман");
        } else {
            console.log("пройзошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function (){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i< 2; i++){
/*             let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            if(genre === '' || genre === null){
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
            personalMovieDB.genres[i - 1] = genre;
            } */

            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();

            if(genres === '' || genres === null){
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i +1 } - это ${item}`);
        });
    }
};




