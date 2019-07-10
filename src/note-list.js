(function(exports) {
  function NoteList() {
    this.listOfNotes = [];
  };

  NoteList.prototype.makeNote = function(text, noteConstructor = Note) {
    this.listOfNotes.push(new noteConstructor(text));
  };

  exports.NoteList = NoteList;
})(this);
