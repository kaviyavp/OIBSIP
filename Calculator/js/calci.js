let display=document.getElementById('display');
buttons=document.querySelectorAll('button');
let displayValue=' ';
for (item of buttons){
    item.addEventListener('click', (e) => {
       buttonContent= e.target.innerText;
        if(buttonContent=='C'){
			displayValue=" ";
            display.value=displayValue;
        }
        else if(buttonContent=='='){
            display.value=eval(displayValue);
        }
        else{
           displayValue+=buttonContent;
           display.value=displayValue;
        }
    })
}
