(function(exports) {

  function NoteListView(aNoteList) {
    this.noteList = aNoteList
    this.noteListContents = aNoteList.listOfNotes
  };

  NoteListView.prototype.displayNoteList = function() {
    if(this.noteListContents.length == 0) {
      return ""
    } else {

      var arrayOfHTML = []

      this.noteListContents.forEach(function(element) {
        arrayOfHTML.push(`<li><div>${element.text}</div></li>`);
      });

      return `<ul>${arrayOfHTML.join()}</ul>`
    }
  };

  exports.NoteListView = NoteListView;
})(this);
