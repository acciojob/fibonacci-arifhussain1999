function fibonacci(num) {
// your code here
	 if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 0;  
    }
	
	let a=0, b=1,temp;
	for (let i = 2; i < num; i++) {
       temp = a + b;
        a = b;
        b = temp;
    }
    return a;
}

module.exports = fibonacci;
