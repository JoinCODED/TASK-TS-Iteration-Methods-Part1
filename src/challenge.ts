// 🌶️🌶️🌶️ Extra

// let greaterThanTwentyFive = numbers.filter((number) => (number >= 25 ? true : false));

// return greaterThanTwentyFive;

// let squaredNumbers = numbers.map((number) => {
//   return number ** 2;
// });

// return squaredNumbers;
// const numbers: number[] = [1, 2, 3];
// const strings: string[] = ["apple", "b", "c"];
// type T = (numbers: number[], strings: string[]) => void;

// `logger` function that:
// - Accepts "array" parameter which holds elements of the same type
// - log every element in an array
// example:
// logger<string>(["one", "two", "three"]);
// logger<number>([1, 2, 3]);
// logger<number | string>([1, 2, 3, "one", "two", "three"]);
function logger<T>(array: T[]): void {
	array.forEach((item) => console.log(item));
}
// 	let number = numbers.map((value) => {
// 		console.log(value);

logger([]);
// function loggers<T>(array: T[]): void {
// 	let string = strings.map((value) => {
// 		console.log(value);
// 	});
// }

// loggers(strings);

// `toCelsius` function that:
// - Accepts "temperatures" parameter of type "number[]", representing temperature values in Fahrenheit.
// - Returns an array containing the converted temperatures in Celsius.
// - The conversion equation is: C = (F - 32) * (5/9)
// example:
// toCelsius([32, 68, 100, 212]); // => [0, 20, 37.7778, 100]
function toCelsius(temperatures: number[]): number[] {
	// write your code here...
	let conversion = temperatures.map((f) => (f - 32) * (5 / 9));
	return conversion; // replace empty array with what you see is fit
}

// `hottestDays` function that:
// - Accepts "temperatures" parameter of type "number[]"
// - Accepts "threshold" parameter of type "number"
// - Return an array of temperatures that exceed the provided threshold
// example:
// hottestDays([30, 40, 50, 60, 70], 45]); // => [50, 60, 70]
// hottestDays([80, 90, 100, 110], 95); // => [100, 110]
function hottestDays(temperatures: number[], threshold: number): number[] {
	// write your code here...
	let listOfHottestDays = temperatures.filter((temp) => temp > threshold);
	return listOfHottestDays; // replace empty array with what you see is fit
}

// `logHottestDays` function that:
// - Accepts "temperatures" parameter of type "number[]", representing temperature values in Fahrenheit.
// - Accepts "threshold" parameter of type "number"
// - Log temperatures that exceed the threshold to the console IN DEGREES CELSIUS  (hint: you can combine all previous functions)
function logHottestDays(temperatures: number[], threshold: number): void {
	// write your code here...
	const hotOnly = hottestDays(temperatures, threshold);
	const converted = toCelsius(hotOnly);
	logger(converted);
}

export { logger, toCelsius, hottestDays, logHottestDays };
