// There are two soccer teams, Team Dumebi and
// Team Ciroma. They compete against each other 3
// times. The winner with the highest average score
// wins the a trophy!
// 1. Calculate the average score for each team, using
// the test data below

// 2. Compare the team's average scores to determine
// the winner of the competition, and print it to the
// console. Don't forget that there can be a draw, so
// test for that as well (draw means they have the same
// average score).

// 3. BONUS 1: Include a requirement for a minimum
// score of 100. With this rule, a team only wins if it has
// a higher score than the other team, and the same
// time a score of at least 100 points. HINT: Use a logical
// operator to test for minimum score, as well as
// multiple else-if blocks .

// 4. BONUS 2: Minimum score also applies to a draw!
// So a draw only happens when both teams have the
// same score and both have a score greater or equal
// 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Team Dumebi score 96, 108 and 89.
// Team Ciroma score 88, 91 and 110
// TEST DATA BONUS 1: Team Dumebi score 97, 112 and
// 101. Team Ciroma score 109, 95 and 123
// TEST DATA BONUS 2:Team Dumebi score 97, 112 and
// 101. Team Ciroma score 109, 95 and 106

// TASK 1
// NO 1
const dumebiAverage = ((96+108+89)/3);
console.log (dumebiAverage);

const ciromaAverage = ((88+91+110)/3);
console.log(ciromaAverage);

// NO 2
if (dumebiAverage > ciromaAverage){
    console.log(`Team Dumebi is the winner`)
}else if (ciromaAverage > dumebiAverage){
    console.log(`Team Ciroma is the winner`)
}else {
    console.log(`The game ended in a draw`)
}

// NO 3
const dumebiAverage1 = ((97+112+101)/3);
console.log (dumebiAverage1);

const ciromaAverage1 = ((109+95+123)/3);
console.log(ciromaAverage1);

if(dumebiAverage1 >= 100 && dumebiAverage1 > ciromaAverage1){
    console.log(`Team Dumebi wins`)
}else if (ciromaAverage1 >= 100 && ciromaAverage1 > dumebiAverage1){
    console.log(`Team Ciroma wins`)
}

// NO 4
const dumebiAverage2 = ((97+112+101)/3);
console.log (dumebiAverage2);

const ciromaAverage2 = ((109+95+106)/3);
console.log(ciromaAverage2);

if (dumebiAverage2 >= 100 && dumebiAverage2 > ciromaAverage2){
    console.log (`Team Dumebi Wins`)
}else if (ciromaAverage2 >= 100 && ciromaAverage2 > dumebiAverage2){
    console.log(`Team Ciroma Wins`)
}else if (ciromaAverage2 >= 100 && dumebiAverage2 >= 100 && ciromaAverage2===dumebiAverage2){
    console.log(`The game is a draw`)
}

// A school has following rules for grading system:
// a. Below 25 - F
// b. 26 to 45 - E
// c. 46 to 50 - D
// d. 51 to 60 - C
// e. 61 to 80 - B
// f. Above 81- A
// Ask user to enter marks and print the corresponding
// grade

const score =Number( prompt("Enter your score"));

if (score <= "25"){
    console.log("F")
}else if (score >=26 && score <=45 ){
    console.log(`E`)
}
else if (score >=46 && score<=50){
    console.log(`D`)
}
else if (score >=51 && score<=60){
    console.log(`C`)
}
else if (score >=61 && score<=80){
    console.log(`B`)
}else if (score >= 81 && score<= 100){
    console.log(`A`)
}else {
    console.log(`Invalid Score`)
}
