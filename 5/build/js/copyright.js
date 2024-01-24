"use strict";
// const year = document.getElementById("year") as HTMLElement
// const thisYear = new Date().getFullYear()
// year.setAttribute("dateTime", thisYear)
// year.textContent = thisYear
// 1st
// let year: HTMLElement | null
// year = document.getElementById("year")
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//   year.setAttribute("dateTime", thisYear)
//   year.textContent = thisYear
// }
// 2nd
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("dateTime", thisYear);
year.textContent = thisYear;
