// Variables
var emptyVariable;
var message = "Hello world"
var firstName, lastName = "ABC";

// Nunmber
// JS - математические операции 
var exampleNumber1 = 123;
var exampleNumber2 = 123.45;
var exampleNumber3 = Infinity; //-Infinity
var exmapleNumber4 = NaN;  //Not a Number

// document.write(typeof exampleNumber1);



// String
var exampleString = "Hello world";
var exampleString2 = 'Hello world';
var exampleString3 = `Hello world`;
var exampleString4 = "4";

// Boolean
var exampleBoolean1 = true;
var exampleBoolean2 = false;


// Special types
var exampleNull = null;
var exampleUNdefined1;
var exampleUndefined2 = undefined;

// document.write(exampleUNdefined);

// Not now
var exampleBigInt = 15161631615n;
// Symbol - Not now
var exampleSymbol = Symbol("id");

// Objects
var exampleObject1 = {};
var exampleObject2 = Math;

// // Weird stuff
//  document.write(typeof null); //object




// Output
// alert("Hello world");
// var result = prompt("Hello world"); string
// var result = confirm("Hello world"); boolean
// document.write("Hello world");


var exampleTypeConversion1 = 5 + "5";
var exampleTypeConversion2 = 5 + 5 + "5";
var exampleTypeConversion3 = true + 2; //true=1
var exampleTypeConversion4 = new String(5);
var exampleTypeConversion5 = new Number("10");
var exampleTypeConversion6 = new Boolean("");
// document.write(exampleTypeConversion3);


// Math
// Operand x = 5 + 6;
// Operands: 5,6
// Operator: +

// Unary operator
var x = 5;
x = -x;


// var y = "3";
// y = +y;

// Binary operator
var x = 1, y = 3;
y = x + y;

var exampleMath1 = 5 + 6;
var exampleMath2 = 5 - 6;
var exampleMath3 = 5 / 6;
var exampleMath4 = 5 * 6;

// Remainder
var exampleMath5 = 5 % 2; //1
var exampleMath6 = 6 % 2; //0

// Exponent
var exampleMath7 = 2 ** 4;

// document.write(5 * (2 / 3) - 5);


// Fast modify 
var exampleMath8 = 4;
exampleMath8 += 5;
exampleMath8 -= 3;  //exampleMath8 = exampleMath8 - 3


// Increment  / decrement
var exampleMath9 = 0;
exampleMath9++;
exampleMath9--;
++exampleMath9;
--exampleMath9;

// Comparisons
var exampleComparisons1 = 6 > 5; //true
var exampleComparisons2 = 6 < 5; //false
var exampleComparisons3 = 6 >= 5; //true
var exampleComparisons4 = 6 <= 5; //false
var exampleComparisons5 = 6 === 5; //false
var exampleComparisons6 =6 == 5; //false
var exampleComparisons7 = "5" == 5; //true
var exampleComparisons2 = "5" != 5; //true


// If else
/*
1.Если чайник кипит
 Выключить газ
 Иначе
 Проверить позже
 */
 

// var age = prompt("How old are you?");

// var votingyears = age - 18;
// if (+age === NaN) {
//   alert("Wrong input. Numbers only.")
// }
// else if (votingYears < 0) {
//   alert("You are too young to vote!")
// }
// else {
//   alert("You could've vote for " + votingYears + " years")

// }


/*
Если пользователь ввел число 13
 Спросить снова
*/

// var userNumber; //undefined
// while (userNumber != 13) {
//    userNumber = prompt("Write thirteen as a number")
// }

/*
Начни с числа 1
Увеличивать число на единицу
Пока число меньше или равно  3
 */
for (var index = 1; index <= 3; index++) {
  document.write(index);
}