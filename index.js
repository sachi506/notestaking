//If User adds note add it to the local storage
let addbtn = document.getElementById('btnadd')
show();
// console.log(addbtn)
addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt')
    let notes = localStorage.getItem('notes')
    //while you want to display on screen you need object so we used double quotes here and add note 
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        // Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
    }

    notesObj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    // Use the JavaScript function JSON.stringify() to convert obj into a JavaScript string:
    addtxt.value = "";
    console.log(notesObj)
    show();
})
function show() {
    let notes = localStorage.getItem('notes')
    //while you want to display on screen you need object so we used double codes here
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        // Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
    }
    let html = ""
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}"onclick="deletenote(this.id)"class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;

    });
    let noteselement = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteselement.innerHTML = html;
    }
    else {
       
    }
}
//function to delete notes
function deletenote(index) {
    //we will delete this element just with the help of index we dont need value
    console.log(`we are deleting note from ${index} index`);
    let notes = localStorage.getItem('notes')
    //while you want to display on screen you need object so we used double quotes here and add note 
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        // Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
    }
    notesObj.splice('index', 1);
    //splice take the 2 arguments starting element from where we have to delete and number of items to delete
    localStorage.setItem('notes', JSON.stringify(notesObj));
    show();


}


//for the search button
let search = document.getElementById('searchtxt');
search.addEventListener('input', function () {
    let inputval = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        //we want inner text that include in P tag
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // The display property also allows the author to show or hide an element. It is similar to the visibility property. However, if you set display:none, it hides the entire element, while visibility:hidden means that the contents of the element will be invisible, 
        // but the element stays in its original position and size.
        // visit w3schools for more info
    })
})