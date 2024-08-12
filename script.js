function fibonacci(num) {
// your code here
	if(num<=1) {
		return num;
	}
	
	let a=0, b=1,temp;
	for(let i=2;i<=num;i++){
		temp=a+b;
		a=b;
		b=temp;
	}
	return b;
}

module.exports = fibonacci;
