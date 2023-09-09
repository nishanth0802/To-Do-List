function add()
{
     let taskinput= document.getElementById("input");
    let tasktext= taskinput.value.toString();
    
if(tasktext===" ")
{
    alert("error");
return;
}


let tasklist =document.getElementById("listb");
let taskitem=document.createElement("li"); 
taskitem.innerHTML=`<span> ${tasktext}</span>

<button class="delbutton" onclick="deletebutton(this)">del</button>
`;

tasklist.appendChild(taskitem);


taskinput.value=" ";

}

function deletebutton(button){
    const tasklist = document.getElementById("listb");
    const taskitem = button.parentElement;
    tasklist.removeChild(taskitem);
}

