var num1 = document.getElementById('value');
var num2 = document.getElementById('number');
function calculate(){
	var i=0, product=1;
	for(i=1;i<=(num2.value);i++){
		product*=(num1.value);
	}
	document.getElementById('demo').innerHTML = product;
}
document.getElementById('clk').onclick = calculate;