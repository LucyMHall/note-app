console.log("Single Note View Tests:");

(function(exports) {

  console.log("Constructor:")

  function test1() {
    describe("it takes a note as a parameter and stores it")
    var note = new Note("Favourite drink: seltzer")
    var singleNoteView = new SingleNoteView(note)
    assert.isInstanceOf(Note, singleNoteView.note)
  };

  function test2() {
    describe("it displays a single note with HTML")
    var note = new Note("Favourite drink: seltzer")
    var singleNoteView = new SingleNoteView(note)
    assert.isEqual("<div>Favourite drink: seltzer</div>", singleNoteView.displayNote())
  }

  test1();
  test2();

})(this);
