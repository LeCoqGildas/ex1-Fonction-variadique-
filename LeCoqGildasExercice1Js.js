/******************************************************************************
LE COQ GILDAS
Exercice 1 - Fonction variadique (4pt)


/*FUNCTION*********************************************************************/

//This function adder tack only two arguments
function adder(l, r){
	return function(v){
		return l(v) + r(v);
	}
}

//We would like to add too many arguments
function adder(/* args */){
	//We must convert them to array
	var args = Array.prototype.slice.call(arguments);
	//Finaly the outcome of arguments(who are function) gone in value
	var value = 0;
	return function(e){
		//Function are realised immediately in the forEach and there out is added to value
        args.forEach(function(val){
            value += val(e);		  
	   });
	   return value;
	}	
}

function mult(v){
	return function(e){
		return v*e;
	}
}

//This function return a substract between two value
function sub(val1){
	return function(val2){
		return val1 - val2;
	}
}
//END_OF_FUNCTION***************************************************************


//Teste
console.log(adder(mult(2), mult(4))(2));//12

console.log(adder()(0)); // 0
console.log(adder()(1)); // 0
console.log(adder(mult(2))(1)); // 2
console.log(adder(mult(2), mult(2))(1)); // 4
console.log(adder(mult(2), mult(2), mult(2))(1)); // 6
console.log(adder(mult(2), sub(2), mult(2))(1)); // 5





