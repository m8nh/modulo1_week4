let MyDate = function (day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function (){
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        this.day = day
    }
    this.setMonth = function (month) {
        this.month = month
    }
    this.setyear = function (year) {
        this.year = year
    }
};
let date = new MyDate(2,2,2022)
let day = date.getDay()
let month = date.getMonth()
let year = date.getYear()
console.log(day + "/" + month + "/" + year);