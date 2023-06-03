let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let saves = 0
function increment() {
    count += 1
    countEl.textContent = count
    if(count == 5){
        countEl.style.color = "red";
    }
    
}

function save() {
    
    let countStr = ""
    
    if(saves == 0){
        countStr = count;
    }
    else{
        countStr = " - " + count;
    }
    saveEl.textContent += countStr
    countEl.style.color = "black";
    countEl.textContent = 0
    saves += 1
    count = 0
}
