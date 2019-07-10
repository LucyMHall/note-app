console.log("Note List Tests:");

(function(exports) {

  console.log("Constructor")
  function test1() {
    describe("Should have an empty array on instantiation")
    var noteList = new NoteList();
    assert.isEqual(noteList.listOfNotes.length, 0)
  }

  console.log("makeNote")
  function test2() {
    describe("Should store an element in the list of notes")
    var noteList = new NoteList();
    noteList.makeNote("Example Text");
    assert.isEqual(noteList.listOfNotes.length, 1);
  }

  function test3() {
    describe("Should create an instance of Note")
    var noteList = new NoteList();
    noteList.makeNote("Example Text");
    assert.isInstanceOf(Note, noteList.listOfNotes[0]);
  }

  function test4() {
    describe("Should create an instance of Note with text property")
    var noteList = new NoteList();
    noteList.makeNote("Example Text");
    assert.isEqual("Example Text", noteList.listOfNotes[0].text);
  }

  function test5() {
    describe("Should append a new element to the existing list of notes")
    var noteList = new NoteList();
    noteList.makeNote("Example Text");
    noteList.makeNote("Example Text 2");
    assert.isEqual(noteList.listOfNotes.length, 2);
  }

  test1();
  test2();
  test3();
  test4();
  test5();
})(this);
