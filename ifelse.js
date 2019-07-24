/*if (1 != "1") { 
    console.log(true)
}
else {
    console.log(false);
}
*/

/* let age = 18;
let country = "UK";

if (age > 17 && country == "UK") { 
    console.log("You are old enough")
}
else {
    console.log ("You aren't old enough")
}


let password = "password"

if ( password.length < 8 )
{ console.log("password is too short")
}
else {
    console.log ("logged in");
}

// .length counts 

*/
/*
let num = 15;
let divnum = 3;
let divnum2 = 5;

if ( num % divnum ===0 && num % divnum2 ===0 ){
    console.log ("This Number is divisible by 3 and 5")
}
else {
    console.log ("This number is not divisible by 3 and 5")
}
*/
/*
let num = 9;
let divnum = 3;
let divnum2 = 5;

if ( num % divnum ===0 && num % divnum2 ===0 ){
    console.log ("Fizz Buzz")
}
else if (num % divnum ===0){
    console.log("fizz")
}
else if (num % divnum2 ===0){
    console.log("buzz")
}
else {
    console.log ("num")
}

*/

/*

{       
    static boolean isPalindrome(int n) 
    {    
        // Find the appropriate divisor 
        // to extract the leading digit 
        int divisor = 1; 
        while (n / divisor >= 10) 
            divisor *= 10; 
       
        while (n != 0) 
        { 
            int leading = n / divisor;  
            int trailing = n % 10; 
       
            // If first and last digit  
            // not same return false 
            if (leading != trailing)   
                return false; 
       
            // Removing the leading and trailing 
            // digit from number 
            n = (n % divisor) / 10; 
       
            // Reducing divisor by a factor  
            // of 2 as 2 digits are dropped 
            divisor = divisor / 100; 
        } 
        return true; 
    } 
       
    // Driver code 
    public static void main(String args[]) 
    { 
        if(isPalindrome(1001)) 
            System.out.println("Yes, it is Palindrome"); 
        else
            System.out.println("No, not Palindrome"); 
    }  
} 
*/
/*
let n = 121;
let num = 1;
let num1 = n / num;
let num2 = n % 10;
if ( num1 != num2) {
    console.log("false")
}
n = (n % num) / 10;
num = num / 100 
    console.log("True")

            console.log("Yes, it is Palindrome"); 
        else
            console.log("No, not Palindrome"); 
    */


let space1 = "x";
let space2 = "x";
let space3 = "x";
let space4 = "x";
let space5 = "x";
let space6 = "o";
let space7 = "o";
let space8 = "x";
let space9 = "x";
if (space1 == space2 && space1 == space3){
    console.log("Winner")
} else { 
    console.log("Loser")
}
console.log("    |   |   ");
console.log(` ${space1}  | ${space2} |  ${space3} `);
console.log("    |   |   ");
console.log("-------------");
console.log("    |   |   ");
console.log(` ${space4}  | ${space5} |  ${space6} `);
console.log("    |   |   ");
console.log("-------------");
console.log("    |   |   ");
console.log(` ${space7}  | ${space8} |  ${space9} `);
console.log("    |   |   ");
