function calculate() {
    
    document.querySelectorAll(".num").forEach(item => {
        item.addEventListener("click", function(){
            document.getElementById("output").textContent += item.value;
        })
    })
    document.querySelectorAll(".operator").forEach(item => {
        item.addEventListener("click", function(){
            document.getElementById("output").textContent += " " + item.value + " ";
        })
    })
    document.getElementsByClassName("equal")[0].addEventListener("click", function(){
        document.getElementById("history").classList.add("blur")
        document.getElementById("history").textContent = document.getElementById("output").textContent;
        let checkPercent = document.getElementById("history").textContent.replace("%","")
        document.getElementById("output").textContent = 
        document.getElementById("history").textContent.includes("%")?
        eval(checkPercent/100):
        eval(document.getElementById("history").textContent)
    })
}
calculate()

function clearOutput(){
    document.getElementsByClassName("clear")[0].addEventListener("click", function(){
        document.getElementById("history").textContent = ""
        document.getElementById("output").textContent = ""
    })
    document.getElementsByClassName("delete")[0].addEventListener("click", function(){
        let output = document.getElementById("output").textContent
        output = output.substring(0, output.length-1)
        document.getElementById("output").textContent = output;
    })
}
clearOutput()
