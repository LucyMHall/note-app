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
    assert.isEqual("<ul><li><div>Buy milk</div></li>,<li><div>Buy bread</div></li></ul>", noteListView.displayNoteList())
  };



  test1();
  test2();
  test3();
  test4();
})(this);
