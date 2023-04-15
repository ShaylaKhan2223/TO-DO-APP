
let inputBox=document.getElementById("input-box")
let listContainer=document.getElementById("list-container")
function addTask(){
    while (inputBox.value===""){
        alert ("You need to write something ")
        i++;
    }
    if (inputBox.value ===''){
        alert ("You need to write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
      
        span.innerHTML=" &#10008"
        li.appendChild(span);

    }
    inputBox.value=" ";
    saveData()
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData()
}
else if (e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData()
}
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");  
}
showTask();







