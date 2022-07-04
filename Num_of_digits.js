//1. Find the number of digits
// Take a number from the user and print the count of digits in that number.

const Find_Digits = (N) => 
{
   let count=0;
  while(N>0){
    N=parseInt(N/10);
    count++;
  }
  return(count);
};