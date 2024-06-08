const notesContainer = document.getElementById('app');
const addNoteButton = notesContainer.querySelector(".add-note")

//WHEN THE PAGE LOADS UP, GET ALL NOTES AND DISPLAY THEM TO THE USER
getNotes().forEach(note => {
    const noteElemet = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElemet, addNoteButton);
})

addNoteButton.addEventListener("click", () => addNote());

//RETRIEVE ALL NOTES FROM LOCAL STORAGE
function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

//TAKE AN ARRAY OF NOTES AND STORE THE NEW NOTES TO LOCAL STORAGE
/*
1. TAKES YOUR JAVASCRIPT ARRAY OF NOTES AND STRINGIFYS THEM AS JSON BEFORE STORING IT IN LOCAL STORAGE KEY.
*/
function saveNotes(notes){
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

//HELP BUILD HTML ELEMENT TO REPRESENT A NOTE
function createNoteElement(id, content){
//CREATE A NEW TEXT AREA TO REPRESENT A SINGLE STICKY NOTE
const element = document.createElement("textarea");
element.classList.add("notes");
element.value = content;
element.placeholder = "Start typing...";

//WHEN THE USER CHANGES THE CONTENT OF THE TEXT AREA- UPDATE THE CONTENTS IN LOCAL STORAGE
element.addEventListener("change", () => {
    //element.value = MOST RECENTLY UPDATED CONTENT
    updateNote(id, element.value)
});


element.addEventListener("dblclick", () =>{
    const doDelete =  confirm("Are you sure you want to delete?");
    if (doDelete){
        deleteNote(id, element);
    }
})

return element;



}

//ADD A NEW NOTE TO LOCAL STORAGE & HTML
function addNote(){
    //ADD A NEW NOTE OBJECT TO THE ARRAY AND RESAVE THE ARRAY
    const notes = getNotes();
    const noteObject = {
        id: Math.floor(Math.random() * 1000000),
        content: ""
    };

    const noteElemet = createNoteElement(noteObject.id, noteObject.content)
    notesContainer.insertBefore(noteElemet, addNoteButton);
    notes.push(noteObject);
    saveNotes(notes);
}

function updateNote(id, newContent){
    const notes = getNotes();
    const targetNote = notes.filter(note => note.id == id)[0];
    targetNote.content = newContent;
    saveNotes(notes);

}

//TAKES ID AND HTML ELEMENT
function deleteNote(id, element){
    const notes = getNotes().filter(note => note.id != id);
    saveNotes(notes);
    notesContainer.removeChild(element);
}