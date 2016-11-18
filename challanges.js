//takes a size and returns a string of alternating 1'S AND 0'S
function stringy(size){
	var string = '';
	for(var i = 0; i < size; i++){//loop that says if 0 is less than size add one to i
		if(i % 2 == 0){//mod divide i by 2 and if there is no remainder its even 
			string += '1';//adds a string of "1"
		}else{
			string += '0';//adds a string of "0"
		}
	}
	return string; //return the string
}
///////////////////////////////////////////////////////////
function reverse(number){//function to run everything
	var array = [];//sets up the array
	var length = num.length;//sets up the length of the array
	for(var i = (length - 1); i > -1; i--){//loop that takes the length of the array
		//and goes back one in the index then pushes it to the array.
		array.push(num[i]);
	}
	return array;
}
///////////////////////////////////////////////////////////
function fib(times){
	var a=0;
	var b=1;//set up the variables
	var ans=1;
	for(var i = 2; i <=times; i++){//set i as 2 and and make it so that while the
		// value of i is less than times continue the loop
		ans=a+b;//set answer to a + b
		a=b;//make a = b 
		b=ans;// make b = answer
	}
	return ans;
}
///////////////////////////////////////////////////////////
//for this one i would look up code to check a specific date and find out 
//how to set it to expire.
//for the actual function I think that it will be and if else statement
// to return true or false depending on what the date is 
function checkCoupon(){//set the function with name checkCoupon
		if(Date() >= "June 15, 2014"){ //if the date is greater than or equal to "June 15, 2014"
			return true;//return true
		}else{
			return false;//else return false
		};
};
var coupon= new Date("June 3, 2013"); //new instance of date
checkCoupon(coupon);//call the function
/////////////////////////////////////////////////////////////
//this one ive put a lot of research into fot this question we have to 
//uses regex for the regex code that i have the first section in the 
//square brackets says that both capical and lower case letters can be
//passed in as well as numbers 1-9 and a _. next it needs a @ then takes 
//more lowercase letters and numbers 1-9 and at the end the ending needs
//at least 2 and up to 3 characters to be true. 
//after the regex code you return the tested email thread that is passed in
//to see if it meets all the requirements set in the regex.
function checkEmail(email){
    var re = /[a-zA-Z0-9._]+@[a-z0-9._]+\.[a-z]{2,3}$;/
    return re.test(email);
}
checkEmail();

