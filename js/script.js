const numberOfFilms = 'Сколько фильмов вы уже посмотрели?';

const personalMovieDB = {
    count:"26",
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const questionForUser1 = prompt("Один из последних просмотренных фильмов?");
const questionForUser2 = prompt("на сколько оцените его?");

personalMovieDB.movies = questionForUser1, questionForUser2;

console.log(personalMovieDB);