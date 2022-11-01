//identification 
const from = document.querySelectorAll('[name="from"]');
const to = document.querySelectorAll('[name="to"]');
const convertButton = document.getElementById('convert');
let fromUnit;
let toUnit;
let input = document.getElementById('input');
let output = document.getElementById('output');
let binary_regex =/^[0-1]{1,}$/g;
let decimal_regex =/^[0-9]+$/g;
let hex_regex = /^(0x)?[0-9a-f]+$/gi;


convertButton.addEventListener('click' , function() {
//From unit
 from.forEach( function(value , index , array)
 {
  if (array[index].checked)
  {
    fromUnit = array[index].nextElementSibling.nextElementSibling.textContent.toLowerCase().slice(0,1);
    //targets the text in the choice cards
    //to take that as the (from-unit) value
    //used the slice() method for switch statement
  }});
  //To unit 
  to.forEach( function(value , index , array)
 {
  if (array[index].checked)
  {
    toUnit = array[index].nextElementSibling.nextElementSibling.textContent.toLowerCase().slice(0,1);
}});
  switch(fromUnit)
  {
  case 'b':
   if (binary_regex.test(input.value) == false) break;
   if(toUnit == 'd')
   {
    output.textContent = parseInt(input.value, 2);
   }
   else if (toUnit == 'h')
   {
    output.textContent = parseInt(input.value, 2).toString(16).toUpperCase();
   }
   else 
   {
    output.textContent = input.value;
   }
  break;
  case 'd':
    if (decimal_regex.test(input.value) == false) break;
    if(toUnit == 'b')
    {
     output.textContent = Number(input.value).toString(2);
    }
    else if (toUnit == 'h')
    {
     output.textContent = Number(input.value).toString(16).toUpperCase();
    }
    else 
    {
     output.textContent = input.value;
    }
  break;
  case 'h':
    if (hex_regex.test(input.value) == false) break;
    if(toUnit == 'b')
    {
     output.textContent = (parseInt(input.value, 16).toString(2));
    }
    else if (toUnit == 'd')
    {
      output.textContent = parseInt(input.value, 16);
    }
    else 
    {
     output.textContent = input.value;
    }
  break;
 }
});
