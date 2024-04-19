// function addtask(){
//     var input = document.querySelector('#input').value;
//     input = input.trim();
//     // var value = input.trim();
//     if(input == ''){
//         alert('Please Enter Task !!');
//     }else{
//         var lists = document.querySelector('.list-group');
//         var listItem = document.createElement('li');
//         listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
//         listItem.innerHTML = input;
//         var delIcon = document.createElement('i');
//         delIcon.className ='fa-solid fa-trash';
//         var comicon = document.createElement('i');
//         comicon.className = 'fa-solid fa-circle-check';
//         delIcon.oneclick = function(){
//             lists.removeChild(listItem);
//         }
//         listItem.appendChild(delIcon);
//         lists.appendChild(listItem);

//     }
// }

function addTask(){
    var input = document.querySelector('#input').value;
    var value = input.trim();
    if(value==''){
        alert('Please Enter Task!!');
    }else{
        var lists = document.querySelector('.list-group');
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = value;
        var delicon = document.createElement('i');
        delicon.className = 'fa-solid fa-trash';
        comicon = document.createElement('i');
        comicon.className = 'fa-solid fa-check';
        delicon.onclick = function(){
            listItem.removeChild(delicon);
            listItem.appendChild(comicon);
            alert('Task Completed!');
            listItem.classList.add('bg-info');
           // listItem.remove();
        }
        comicon.onclick = function(){
            listItem.removeChild(comicon);
            listItem.appendChild(delicon);
            alert('Task Completed!');
            listItem.classList.remove('bg-info');
        }
        listItem.appendChild(delicon);
        lists.appendChild(listItem);
    }
}