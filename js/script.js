var a1="Amsterdam" 
var a2="London"
var arrayAmsterdam = [1500,500,1800,700];
var arrayLondon = [2500,1500,1000,900];


function average(array){
	var length = 0;
	var sum = 0;
	var average_array = 0;
	for (var i = 0 ; ; i++){

		if (array[i]){

			length++;
			sum += array[i];

			console.log("the length is:" +length);
			console.log("the sum price is:" +sum);

		} else {
			break; 
		}
	}
	average_array = sum / length;
	return average_array;
}
var average1 = average(arrayAmsterdam);
var average2 = average(arrayLondon);

console.log(average1);
console.log(average2);

document.getElementById("London").innerHTML=London+average2
document.getElementById("difprice").innerHTML=average2-average1

try {alert("average1");}
catch(e){console.log(e.average1);}