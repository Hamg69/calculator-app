function checkHistory() {
	return document.getElementById("history-values").innerText;
}

function printHistory(fig) {
	document.getElementById("history-values").innerText = fig;
}
function checkOutput() {
	return document.getElementById("output-values").innerText;
}

function printOutput(fig){
	if(fig=="") {
		document.getElementById("output-values").innerText = fig;
	}
	else{
		document.getElementById("output-values").innerText = getFormattedNumber(fig);
	}
}
function getFormattedNumber(fig) {
	let n = Number(fig); 
	let value = n.toLocaleString("en");
	return value;
}
printOutput("4765487");
function reverseNumberFormat(fig){
	return Number(fig.replace(/,/g,""))
};
alert(reverseNumberFormat(getOutput()));