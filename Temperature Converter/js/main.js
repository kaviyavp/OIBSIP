function convertTemp(){
	let val=document.getElementById("value-input");
	let resultval=document.getElementById("result-value");
	let inputval=document.getElementById("input-value");
	let outputval=document.getElementById("output-value");

	val.addEventListener("keyup",convertTemp);
	inputval.addEventListener("change",convertTemp);
	outputval.addEventListener("change",convertTemp);

	let inputValue=inputval.value;
	let outputValue=outputval.value;
	
	// Celsius
	if(inputValue==="celsius" && outputValue==="celsius"){
		resultval.value=val.value;
	}
	else if(inputValue==="celsius" && outputValue==="fahrenhiet"){
		resultval.value=Number((val.value*9)/5)+32;
	}	
    else if(inputValue==="celsius" && outputValue==="kelvin"){
		resultval.value=Number(val.value)+273.15;
	}

  // Fahrenhiet
	if(inputValue==="fahrenhiet" && outputValue==="celsius"){
		resultval.value=Number((val.value-32)*5)/9;
	}
	else if(inputValue==="fahrenhiet" && outputValue==="kelvin"){
		resultval.value=Number(((val.value-32)*5)/9)+273.15;
	} 
	else if(inputValue==="fahrenhiet" && outputValue==="fahrenhiet"){
		resultval.value=val.value;
	}

  // Kelvin
	if(inputValue==="kelvin" && outputValue==="celsius"){
		resultval.value=Number(val.value)-273.15;
	} 
	else if(inputValue==="kelvin" && outputValue==="fahrenhiet"){
		resultval.value=Number(((val.value-273.15)*9)/5)+32;
	} 
	else if(inputValue==="kelvin" && outputValue==="kelvin"){
		resultval.value=val.value;
	}
}

function resetForm(){
  document.getElementById("form").reset();
} 

