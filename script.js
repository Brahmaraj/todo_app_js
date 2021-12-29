var arr_of_obj = new Set();
var card_title;
var card_item;
var first_card;
var delete_div;
var cloned_list_item;
var value_id;
var done_button;
var title_for_list;
var temp;
function modal(){
    document.getElementById("modal-div").style.display = "block";
};
function addCard(){
    card_title = document.getElementById("modal-input-box").value;
    createObj(card_title);
}
function closeModal(){
    document.getElementById("modal-div").style.display = "none";
}
var subtask = new Map;
function createObj(title){
    var card_obj = {
        title: title,
        id: Date.now(),
        subtask
    };
    arr_of_obj.add(card_obj);
    createCard(card_obj.id);
};

function addList(){
    cloned_list_item = document.querySelector(".this-list-element").cloneNode(true);
    //done_button = document.querySelector('.in-list-button').cloneNode(true);
    card_item = document.getElementById('modal-input-box-card').value;
    //card_item.style.color = "black";
    console.log(cloned_list_item);
    cloned_list_item.innerText =  card_item; //card_item +
    cloned_list_item.style.display = "block";
    cloned_list_item.style.color = 'black';
    cloned_list_item.setAttribute('id',`${Date.now()}`);
    cloned_list_item.setAttribute('value',`${Date.now()}`);
    done_button = document.createElement('button');
    done_button.setAttribute('id',`check-done-${Date.now()}`);
    done_button.setAttribute('class','mark-as-done-class');
    done_button.setAttribute('value',`${Date.now()}`);

    // done_button.setAttribute('style','backgrond-color')
    done_button.innerText = ' mark as done';
    done_button.setAttribute('style','font-size:10px; background-color:blue;')
    console.log(done_button);
    cloned_list_item.appendChild(done_button);
    console.log(cloned_list_item);
    cloned_list_item.setAttribute('onClick',"completedTask(this.value)");
    console.log(document.getElementById(`${value_id}`));
    
    for(obj of arr_of_obj){
        for(prop in obj){
            if(obj.id == value_id){
                obj.subtask.set(`${card_item}`,`${Date.now()}`);
               //title_for_list = obj.title;
                card_item = '';
                break;
            }
        }
    }
    //console.log(title_for_list);
    //document.getElementById(`${value_id}`).getElementsByTagName('hr').appendChild(cloned_list_item);
    console.log(document.getElementById('check-done'));
    console.log(done_button);
    console.log(cloned_list_item);
    console.log(arr_of_obj);
    document.getElementById(`${value_id}`).getElementsByClassName('add-list-after-this')[0].appendChild(cloned_list_item).appendChild(done_button);
    //document.getElementById(`${value_id}`).insertBefore(cloned_list_item, )
    cloned_list_item = '';
}

function closeCardModal(){
    document.getElementById('modal-div-card').style.display = "none";
}

function addSubtask(val) {
    document.getElementById("modal-div-card").style.display = "block";
    console.log(val);
    value_id = val;
};

function deleteCard(val){
    delete_div = document.getElementById(`${val}`);
    console.log(val);
    for(obj of arr_of_obj){
        for(prop in obj){
        if (obj.id==val)
        arr_of_obj.delete(obj);
        break;
        }
    }
    delete_div.parentNode.removeChild(delete_div);
    first_card = 0;
    console.log(arr_of_obj);
};

function createCard(){
    if(arr_of_obj.size==0){
    document.getElementById('outer-container').innerHTML = "EMPTY";
    first_card = 0;
    }
    else {
    first_card = document.querySelector('.card').cloneNode(true);
    display(first_card);
}};
function completedTask(value){
    temp = document.getElementById(`${value}`).innerText;
    document.getElementById(`${value}`).style.textDecoration = 'line-through';
    document.getElementById(`${value}`).style.color = 'red';
    document.getElementById(`check-done-${value}`).innerHTML = '';
    // document.getElementById(`${value}`).innerHTML = `<del>${temp}</del>`;
    console.log(document.getElementById(`${value}`))
    //document.getElementById(`${abc}`).innerHTML =
    console.log(value);
}
function display(card){
    if(card==0){
        document.getElementById('outer-container').innerHTML = "EMPTY";
    }
    else {
    arr_of_obj.forEach(element => {
        card.id = element.id;
        card.querySelector(".card-head").innerHTML = element.title;
        card.setAttribute("value",`${element.id}`);
        card.setAttribute("display","block");
        card.setAttribute("min-height","300px");
        card.querySelector(".delete-button-in-card").setAttribute("value",`${element.id}`);
        card.querySelector(".delete-button-in-card").setAttribute("onClick","deleteCard(this.value)");
        card.querySelector(".add-button-in-card").setAttribute("value",`${element.id}`);
        card.querySelector(".add-button-in-card").setAttribute("onClick","addSubtask(this.value)");
        
    });
    card.style.display = "block";
    document.getElementById("outer-container").appendChild(card);
}}

