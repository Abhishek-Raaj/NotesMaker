shownotes();

document.getElementById('add').addEventListener('click',function(e)
{
    
    let notes_value=document.getElementById('notes-field');
    if(notes_value.value!="")
    {
  var item=localStorage.getItem("notes");
  if(item==null)
  notesobj=[];
  else
  notesobj=JSON.parse(item);
  notesobj.push(notes_value.value);
  localStorage.setItem("notes",JSON.stringify(notesobj));
    }
    else
    alert("You havenot entered any input");
shownotes();
});

// to display notes on screen
function shownotes(){
    var card=document.getElementById('card2');
    var item=localStorage.getItem("notes");
  if(item==null)
  notesobj=[];
  else
  notesobj=JSON.parse(item);
  if(notesobj.length!=0)
  {
  notesobj.forEach(function(element,index) {
    card.innerHTML +=` <div class="card" id="card" style="width: 18rem;">
     <div class="card-body">
    <h5 class="card-title">Notes:${index+1}</h5>
    <p class="card-text">${element}</p>
    <button class="btn btn-primary" id="${index}" onclick="deletenode(this.id)">DELETE</button>
  </div></div>`;
  });
}
else
card.innerHTML=` <h1 style="text-align: center; font-weight: bold;"> Your notes are Empty please add note </h1>`;
}


//DELete node

function  deletenode(id)
{
    var item=localStorage.getItem("notes");
    if(item==null)
    notesobj=[];
    else
    notesobj=JSON.parse(item);
     notesobj.splice(id,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    location.reload();
}

//search Element


const search=document.getElementById('search-input');
var found=document.getElementById('found');
search.addEventListener('input',function(e)
{
   let value2=search.value.toLowerCase();

  var node= document.getElementsByClassName('card');
  var i=0;
  Array.from(node).forEach(function(element,index){
     let str= document.getElementsByTagName('p')[index].innerText;
       if(str.includes(value2))
       {
         i=2;
          element.style.display="block";  
       }
          else
          {
          element.style.display="none";
          }

  });
if(i==0)
found.style.display="block";
else
found.style.display="none";



});
