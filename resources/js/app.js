// 1. GenBuzz Function

//Write your code below this line:

const genBuzz = (lowerLimit,upperLimit) => {
   
    if(typeof lowerLimit !=='number'){
   console.log(`${lowerLimit} is not a number`);
   return;
};
if(typeof upperLimit!=='number'){
    console.log(`${upperLimit} is not a number`);
    return;
};
if (lowerLimit > upperLimit){
    console.log(` ${lowerLimit} is larger than ${upperLimit} 'please enter valid numbers`)
}
    //  for(i= lowerLimit; i<=upperLimit; i++){

        while (lowerLimit<= upperLimit){

        
    if (lowerLimit % 3===0){
        console.log('Gen');
        
    }
    else if (lowerLimit % 5===0){
        console.log("Buzz");
    }
     else if (lowerLimit % 15===0 ){
    console.log("GenBuzz");
    }
    lowerLimit++ ;

    };
    }
     genBuzz (2,8);


// 2. Leap Year

//Write your code below this line:
const year = (leapyear) =>{
 if ( leapyear% 400 === 0){
     console.log (`${leapyear} is Leap year`)
 }
 else if (leapyear % 100 === 0){
    console.log (`${leapyear} is  not a Leap year`) 
}
else if (leapyear % 4 === 0){
    console.log (`${leapyear} is   a Leap year`) 
}
};
year(2004);

// 3. Random Exercises

//Write your code below this line:

 const  RandomExcercise = ["Push-ups", "Sit-ups", "Bear Crawls",
  "1 mile run", "60 second plank", "Burpees", "Jumping Jacks",
   "Squats"," Weighted Squats", "Inch Worms"];
      
   
       const RandomExerciseGenerator = (numOfExercise) => {

          for ( i=0;i<numOfExercise; i++){

         excerciseItem = Math.floor(Math.random() * RandomExcercise.length);
         
         console.log( RandomExcercise[excerciseItem]);
         
        } 
       }; 
      RandomExerciseGenerator(5);


// 4. Perfect Square

// Write your code below this line:
 
const perfectSquare =(numperfect) => {
   
    let num1=1;
    while (num1 * num1 <= numperfect) {
        if (num1 * num1===numperfect){
       // console.log (`${numperfect} is a perfect square`)
        return true;
    };
        num1++
    }
    //console.log (`${numperfect} is NOT a perfect square`)
     return false;
     
   
    };
    // Find all perfect squares between 1 to 100.
    for ( i=0;i<100; i++){

       if (perfectSquare (i)==true ){
           console.log(`${i} is perfectsquare`)
       } ;
       };
    //    check 10 random numbers between 1to 100.
       for ( i=0;i<10; i++){
          randomNum=Math.floor(Math.random()* 100) 
       if (perfectSquare(randomNum)==true) {
          console.log(`${randomNum} is perfectsquare`)
       }else{
        console.log(`${randomNum} is NOT a perfectsquare`) 
       };
        
               
       };
     
    