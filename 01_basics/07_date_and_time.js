// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate1 = new Date(2023, 0, 23);
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-14-2023");
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // getMonth() returns 0-based index, so add 1
console.log(newDate.getDay()); // getDay() returns 0 (Sunday) to 6 (Saturday)

console.log(`${newDate.getDay()} and the time`);

// Corrected locale string usage
let formattedDate = newDate.toLocaleString("default", {
    weekday: "long",
});
console.log(formattedDate);
