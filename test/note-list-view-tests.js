console.log("Note-List-View Tests:");

(function(exports) {

  console.log("Constructor:")

  function test1() {
    describe("take a note list model upon instantiation")
    var aNoteList = new NoteList
    var noteListView = new NoteListView(aNoteList);
    assert.isInstanceOf(NoteList, noteListView.noteList);
  };

  console.log("displayNoteList")

  function test2() {
    describe("returns an empty string if note list is empty")
    var aNoteList = new NoteList
    var noteListView = new NoteListView(aNoteList)
    assert.isEqual("", noteListView.displayNoteList())
  };

  function test3() {
    describe("return one line of bulleted html if 1 note present")
    var aNoteList = new NoteList
    aNoteList.makeNote("Buy milk");
    var noteListView = new NoteListView(aNoteList)
    assert.isEqual("<ul><li><div>Buy milk</div></li></ul>", noteListView.displayNoteList())
  };

  function test4() {
    describe("return twos line of bulleted html if 2 notes are present")
    var aNoteList = new NoteList
    aNoteList.makeNote("Buy milk");
    aNoteList.makeNote("Buy bread");
    var noteListView = new NoteListView(aNoteList)
    var expectedHTML = "<ul><li><div>Buy milk</div></li>,<li><div>Buy bread</div></li></ul>"
    assert.isEqual(expectedHTML, noteListView.displayNoteList())
  };

  function test5() {
    describe("only returns the first 20 characters of the note")
    var aNoteList = new NoteList
    aNoteList.makeNote("Yesterday all my troubles seemed so far away");
    var noteListView = new NoteListView(aNoteList)
    var numberOfHTMLCharacters = 29
    var numberOfExpectedNoteCharacters = 20
    var totalNumberOfExpectedCharacters = 49
    assert.isEqual(49, noteListView.displayNoteList().length)
  }



  test1();
  test2();
  test3();
  test4();
  test5();
})(this);
