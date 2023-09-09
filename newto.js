function add()
{
     let taskinput= document.getElementById("input");
    let tasktext= taskinput.value.toString();
    
if(tasktext===" ")
{
    alert("EMPTY TASKS CANNOT BE added ");
return;
}


let tasklist =document.getElementById("listb");
let taskitem=document.createElement("li"); 
taskitem.innerHTML=`<span> ${tasktext}</span>

<button class="delbutton" onclick="deletebutton(this)">del</button>
`;

tasklist.appendChild(taskitem);


taskinput.value=" ";


taskitem.addEventListener("click", function donebutton () {
    let span = this.querySelector('span');
    if (span.style.textDecoration === "line-through") {
        span.style.textDecoration = "none";
    } else {
        span.style.textDecoration = "line-through";
    }
});




}


function deletebutton(button){
    let tasklist = document.getElementById("listb");
    let taskitem = button.parentElement;
    tasklist.removeChild(taskitem);
}



   




