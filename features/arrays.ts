const carMakers = ["ford", "toyota", "chevy"];
const carMakers2: String[] = [];

const dates = [new Date(), new Date()];
const dates2: Date[] = [];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];
const carsByMake2: string[][] = [];

// Help with inference when extracting values
const myCar = carMakers[0];
const myCar2 = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
