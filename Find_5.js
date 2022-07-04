//2. Find the Fives.
//Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.

const Find_Five = (n) => 
{
  let count=0;
	 while(n>0){
	   let i=0;
	   i=parseInt(n%10);
	   if(i==5){
	     count++;
	   }
	   n=parseInt(n/10);
	 }
	 return(count);
};