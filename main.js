let array = [3,5,8,12,65,42,124,67,87,88]
sum =0;
let c=0;
for(i=0; i<array.length; i++){
     if(array[i]%2 == 0){
	     sum+=array[i];
		 c++;
	 }
}
let avg = sum/c;

console.log(`sum of even elements in ${array} is ${sum}`);
console.log(`average of even elements in ${array} is ${avg}`);


	     