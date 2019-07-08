console.log("Tests:");

(function(exports) {
  function testNoteIsInstanceofNote() {
    var note = new Note();
    if(!(note instanceof Note)) {
      throw new Error("not an instance of Note");
    }
  };
  testNoteIsInstanceofNote();
})(this);
