(function(exports) {
  function NoteController(aNoteList = NoteList, aNoteListView = NoteListView) {
    this.noteList = new aNoteList;
    this.newNote = this.noteList.makeNote("Favourite drink: seltzer")
    this.noteListView = new aNoteListView(this.noteList)
  };

  NoteController.prototype.display = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.displayNoteList()
  };

  exports.NoteController = NoteController;

})(this);

noteController = new NoteController
noteController.display();
