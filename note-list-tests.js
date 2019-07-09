console.log("Note List Tests:");

(function(exports) {

  console.log("Constructor")
  function test1() {
    describe("Should have an empty array on instantiation")
    var noteList = new NoteList();
    assert.isEqual(noteList.listOfNotes.length, 0)
  }

  test1()
})(this);
