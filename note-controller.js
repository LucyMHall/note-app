(function(exports) {
  function NoteController(aNoteList = NoteList, aNoteListView = NoteListView) {
    this.noteList = new aNoteList();
    this.noteListView = new aNoteListView(this.noteList)
  };

  NoteController.prototype.createNote = function(text) {
    this.noteList.makeNote(text)
  };

  NoteController.prototype.display = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.displayNoteList()
  };


  NoteController.prototype.getNoteFromUrl = function(location) {
    return location.hash.split("#notes/")[1]
  };

  NoteController.prototype.displaySingleNote = function(note, aSingleNoteView = SingleNoteView) {
    this.singleNoteView = new aSingleNoteView(note)
    return this.singleNoteView.displayNote();
  };

  NoteController.prototype.showNote =function(noteId) {
    var desiredElement;
    this.noteList.listOfNotes.forEach(function(element) {
      if(element.id == noteId) {
        desiredElement = element
      }
    });
    var desiredHTML = this.displaySingleNote(desiredElement)
    elementToChange = document.getElementById("app")
    elementToChange.innerHTML = desiredHTML
  }

  NoteController.prototype.showNoteCurrentPage = function() {
    console.log("======" + window.location)
    console.log("=======" + this.showNote)
    console.log(this.getNoteFromUrl)
    this.showNote(this.getNoteFromUrl(window.location));
  };

  NoteController.prototype.makeUrlChangeShowNote = function() {
    console.log("Are you ready for this?")
    console.log(this)
    window.addEventListener("hashchange", this.showNoteCurrentPage.bind(this));
  };

  exports.NoteController = NoteController;

})(this);

noteController = new NoteController
noteController.createNote("Hello friends")
noteController.createNote("Bonjour")
noteController.display();
noteController.makeUrlChangeShowNote()
