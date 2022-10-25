// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
// after we finish this array, make a loop that goes through the array of employees
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
    
  
    let retName = employee.name; // make this the employee
    let retBonusPercentage = 0
    if(employee.reviewRating >= 2) {
        // console.log(retBonusPercentage);
    }
    if(employee.reviewRating === 3){
      retBonusPercentage += 4;
      // console.log(retBonusPercentage);
    }      
    if(employee.reviewRating === 4){
      retBonusPercentage += 6;
        // console.log(retBonusPercentage);
    }
    if(employee.reviewRating === 5){
      retBonusPercentage += 10;
        // console.log(retBonusPercentage);
    }
    if (employee.employeeNumber.length === 4 ) {
      retBonusPercentage += 5;
      // console.log(retBonusPercentage);
    }

    if(employee.annualSalary > 65000) {
      retBonusPercentage -= 1;
      // console.log('annualSalary is over 65000');
    }
    if (retBonusPercentage > 13 ){
      retBonusPercentage = 13;
      // console.log('Bounus maxed out!')
    }
    if (retBonusPercentage < 0 ){
      retBonusPercentage = 0;
      // console.log('Work harder next year !')
    }
  let retTotalBonus = Math.round(employee.annualSalary * retBonusPercentage * .01);
  let retTotalÇompensation = retTotalBonus + +employee.annualSalary;

    
  // return new object with bonus results
  // make this a basic object, not an array of objects
  return {
    name: retName,
    bonusPercentage: retBonusPercentage,
    totalCompensation: retTotalÇompensation,
    totalBonus: retTotalBonus
  }
  



}
// console.log(calculateIndividualEmployeeBonus(  {
//   name: 'Atticus',
//   employeeNumber: '2405',
//   annualSalary: '47000',
//   reviewRating: 3
// }
// ))


for (const employee of employees) {
  console.log(calculateIndividualEmployeeBonus(employee));
}
$(document).ready(function(){
  for (const employee of employees) {
    $(".showBonusInfo").text(`${calculateIndividualEmployeeBonus(employee).name} gets a $${calculateIndividualEmployeeBonus(employee).totalBonus} bonus`);
  }

});