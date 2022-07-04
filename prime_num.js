//7. Check whether a Number is a prime or not.
//Write a program which takes  a number from user and check whether number is prime number or not a prime number.

const Prime_Check = (N) => 
{
let i=1;
let result=0;
while(i < N){
  if(N%i === 0){
  result++;
}
  i++;
}
if(result===1){
  return("YES");
}
else{
  return("NO");
}
};