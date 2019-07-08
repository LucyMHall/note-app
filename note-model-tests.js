console.log("Tests:");

(function(exports) {
  function testNoteIsInstanceofNote() {
    var note = new Note();
    assert.isInstanceOf(Note, note);
  };
  testNoteIsInstanceofNote();
})(this);
