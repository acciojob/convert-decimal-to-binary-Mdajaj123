function decimalToBinary(num) {
  // your code here
	let str=""
	while(num>0){
		let lastdigit=num%2;
		str=lastdigit+str;
		num=Math.flooor(num/2);
		return str;
	}
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
