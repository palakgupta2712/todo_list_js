document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('add').addEventListener('click', outCome)

    function outCome(e){
        e.preventDefault();
       let task = document.getElementById('task');
       let task_list = document.getElementById('task_list');

       if(task.value != "")
       {
           alert(` ${task.value} item added`);
           let li = document.createElement('li');
           li.innerHTML = `${task.value}` 
           task_list.appendChild(li); 
           task.value=""
 
        
       }
       else{
           alert("Enter a task!")
       }
    }
})