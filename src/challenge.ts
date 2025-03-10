// 🌶️🌶️🌶️ Extra

// `logger` function that:
// - Accepts "array" parameter which holds elements of the same type
// - log every element in an array
// example:
// logger<string>(["one", "two", "three"]);
// logger<number>([1, 2, 3]);
// logger<number | string>([1, 2, 3, "one", "two", "three"]);
function logger<T>(array: T[]): void {
  // write your code here...
  array.forEach((item) => console.log(item));
}

// `toCelsius` function that:
// - Accepts "temperatures" parameter of type "number[]", representing temperature values in Fahrenheit.
// - Returns an array containing the converted temperatures in Celsius.
// - The conversion equation is: C = (F - 32) * (5/9)
// example:
// toCelsius([32, 68, 100, 212]); // => [0, 20, 37.7778, 100]
function toCelsius(temperatures: number[]): number[] {
  // write your code here...

  return temperatures.map((temp) => (temp - 32) * (5 / 9));
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

  return temperatures.filter((temp) => temp > threshold); // replace empty array with what you see is fit
}

// `logHottestDays` function that:
// - Accepts "temperatures" parameter of type "number[]", representing temperature values in Fahrenheit.
// - Accepts "threshold" parameter of type "number"
// - Log temperatures that exceed the threshold to the console IN DEGREES CELSIUS  (hint: you can combine all previous functions)
function logHottestDays(temperatures: number[], threshold: number): void {
  // write your code here...
  const hottestTemp = toCelsius(hottestDays(temperatures, threshold));
  logger(hottestTemp);
}

export { logger, toCelsius, hottestDays, logHottestDays };
