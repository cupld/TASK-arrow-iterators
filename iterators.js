/*************************************
 * Challenge 1: engineer(array)
 *
 * - Accepts an array
 * - Logs every element of the array with "eng" next to it
 * eg: engineer(["zainab","omar","zahraa"]) => eng.zainab, eng.omar, eng.zahraa
 ************************************/
// const engineer = (array) => {forEach(element => {
//   console.log('eng.${element}')};
//   // input code here

// }

const engineer = (array) => {
  array.forEach((e) => console.log('eng.${e}'));
    
  };


/*************************************
 * Challenge 2: toKWD(wallets)
 *
 * - Write a function named toKWD
 * - Accepts an array of wallets
 *   in USD
 * - Returns an array of wallets
 *   in KWD
 *
 * The conversion is:
 *   kwd = usd * 0.30
 ************************************/
// const toKWD = function (wallets){
//   return wallets.map((wallets) => wallet * 0.3)
// };

const toKWD = (wallets) => wallets.map((waller) => wallet *0.3);

/**************************************
 * Challenge 3: richestWallet(wallets,maxAmount)
 *
 * - Write a function named richestWallet
 * - Accepts an array of wallets
 * - Accepts a max amount
 * - Returns an array of wallets
 *   that exceed the maxAmount
 ***************************************/
const richestWallet = (wallets,maxAmount) => wallets.filter(e => e > maxAmount);
// function richestWallet(wallets,maxAmount){
//   return wallets.filter((wallet) => wallet > maxAmount)
// }


/******************************************
 * Challenge 4: makeLiteralGrades(grades)
 *
 * - Write a function named makeLiteralGrades
 * - Accepts an array of grades as numbers
 * - Converts evrey grade to its currosponding
 * literal grade in the following scale
 * 90-100 : A
 * 80-90  : B
 * 70-80  : C
 * 60-70  : D
 * < 60   : F
 * Example: makeLiteralGrades([90, 70, 40]) should return ["A", "C", "F"]
 *******************************************/
// function makeLiteralGrades (grades) { 

// if (grades >= 90) {
//   //console.log("A")
//   grades.map((e) => e);
//   return "A";
// }
// else if (grades >= 80) {
//   //console.log("B")
//   grades.map((e) => e);
//   return "B";
// }
// else if (grades >= 70){
//   //console.log("C")
//   grades.map((e) => e);
//   return "C";
// }
// else if (grades >= 60){
//   //console.log("D")
//   grades.map((e) => e);
//   return "D";
// }
// else{
//   //console.log("F")
//   grades.map((e) => e);
//   return "F";
// }
// }

// function makeLiteralGrades(grades) {

//   return grades.map => (grade) {
//     if (grade >= 90){
//       return "A";
//     }
//     else if (grade >= 80){
//       return "B";
//     }
//     else if (grade >= 70){
//       return "C";
//     }
//     else if (grade >= 60){
//       return "D";
//     }
//     else {
//       return "F";
//     }
//     }
//   }


  const makeLiteralGrades = (grades) => {
    if (grade >= 90){
      return "A";
    }
    else if (grade >= 80){
      return "B";
    }
    else if (grade >= 70){
      return "C";
    }
    else if (grade >= 60){
      return "D";
    }
    else {
      return "F";
    }
    }
  
  