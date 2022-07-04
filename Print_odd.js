//5. Print the Odds.
//Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

const Print_Odd = (N) => 
{
  let i=2;
  console.log(i);
  
  for(let i=2; i<N; i++){
    if(i%2 === 0){
      i++;
    }
    console.log(i);
  }
};