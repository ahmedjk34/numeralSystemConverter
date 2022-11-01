//identification 
const from = document.querySelectorAll('[name="from"]');
const to = document.querySelectorAll('[name="to"]');
const convertButton = document.getElementById('convert');
let fromUnit;
let toUnit;

convertButton.addEventListener('click' , function() {
//From unit
 from.forEach( function(value , index , array)
 {
  if (array[index].checked)
  {
    fromUnit = array[index].nextElementSibling.nextElementSibling.textContent.toLowerCase().slice(0,1);
    alert(fromUnit)    
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
    alert(toUnit)    
  }});
});
switch(fromUnit)
{
 case 'b':
 break;
 case 'd':
 break;
 case 'h':
 break;
}