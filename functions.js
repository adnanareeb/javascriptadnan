/* let coffeeIsGrinding = false;
const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans ();
pressGrindBeans ();



const CoffeeOrder = (Size, Type) => {   //parameters are specific variables very important
    console.log(`dispense: ${Size} ${Type}`);
}

CoffeeOrder("Grande","Latte");



const addUp = (num1, num2) => {
    return num1 + num2; // these are local variables
}

addUp(7,3);
console.log(addUp(2,5));


const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
console.log("the temperature is " + getFahrenheit (15) + "°F")



let orderCount = 1;
const takeOrder = (topping,toppingtwo) => {
    console.log(`order ${orderCount} Pizza with ${topping} and ${toppingtwo}`);
    orderCount++;
}
takeOrder("pineapple", "fish");
takeOrder("Chilli", "Chicken");
takeOrder("beef", "onion");
takeOrder("Donner", "chilli");



let accBal = 400;
let accPin = 1234;
const cashMachine = (pinNum, cash) => {
    if (pinNum == accPin && cash <= accBal) {
        console.log(`Your PIN is correct and the ${cash} you requested is being dispensed!`)    
    } else if (pinNum != accPin) {
        console.log(`PIN number is incorrect!. Please try again.`);
    } else {
        console.log(`Insufficient funds in your account! Please check and try again.`);
    }
}
cashMachine(1234, 300);
cashMachine(1235, 300);
cashMachine(1234, 410);
cashMachine(1235, 500);

*/

let orderCount = 1;
const sandwichOrder = (top1, top2, top3, top4, top5) => {
    console.log(`Sandwich is being prepared:
     ${top1}, ${top2}, ${top3}, ${top4}, ${top5}`);
}
sandwichOrder("pineapple", "fish", "mushroom", "lettice", "onion");