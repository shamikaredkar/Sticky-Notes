# Sticky Notes App

![Sticky Notes App Demo](https://github.com/shamikaredkar/StickyNotes/blob/main/Preview.mov)

## Purpose

The Sticky Notes App is a simple web application that allows users to create, edit, and delete sticky notes. The notes are stored locally in the browser's local storage, so they persist even after the browser is closed or the page is refreshed.

---

## Features

- Create new sticky notes
- Edit existing sticky notes
- Delete sticky notes
- Notes are saved in the browser's local storage
  
---

## Usage

- Click the "+" button to add a new sticky note.
- Click on a sticky note to edit its content.
- Double-click a sticky note to delete it after confirmation.

## Code Structure

### HTML

- `index.html`: The main HTML file that includes the structure of the app.

### CSS

- `src/main.css`: The CSS file that styles the sticky notes app.

### JavaScript

- `src/main.js`: The JavaScript file that handles the functionality of the app.

## How It Works

### HTML

The main container of the app is a `div` with the id `app`, which contains a button for adding new notes.

### CSS

The CSS file styles the body, the main container, and the notes. It uses a grid layout to arrange the notes and provides styling for the note elements and the add note button.

### JavaScript

The JavaScript file includes the following main functions:

- `getNotes()`: Retrieves all notes from local storage.
- `saveNotes(notes)`: Saves the given array of notes to local storage.
- `createNoteElement(id, content)`: Creates a new textarea element to represent a sticky note.
- `addNote()`: Adds a new note to the local storage and the DOM.
- `updateNote(id, newContent)`: Updates the content of a specific note in local storage.
- `deleteNote(id, element)`: Deletes a specific note from local storage and removes its element from the DOM.

### Event Listeners

- The `addNoteButton` has an event listener for the `click` event to add a new note.
- Each note element has an event listener for the `change` event to update the note content in local storage.
- Each note element has an event listener for the `dblclick` event to delete the note after confirmation.
