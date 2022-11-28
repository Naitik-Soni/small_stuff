var vals = document.getElementById('nam');
function display(){
	document.getElementById('demo').innerHTML=vals.value * vals.value;
}
document.getElementById('clk').onclick=display;