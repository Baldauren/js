'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();


// ! object
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};



function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?",'').trim(),
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
}
rememberMyFilms();



function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("вы классик зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("пройзошла ошибка");
    }
}
detectPersonalLevel();


function showMyDB (hidden) {
    if(!hidden)
    console.log(personalMovieDB);
}
showMyDB(personalMovieDB.privat);

function writeYourGenre () {
    for(let i = 1; i<=3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenre();