console.log("Single Note View Tests:");

(function(exports) {

  console.log("Constructor:")

  function test1() {
    var note = new Note("Favourite drink: seltzer")
    var singleNoteView = new SingleNoteView(note)
    assert.isInstanceOf(Note, singleNoteView.note)
  };

  function test2() {
    var note = new Note("Favourite drink: seltzer")
    var singleNoteView = new SingleNoteView(note)
    assert.isEqual("<div>Favourite drink: seltzer</div>", singleNoteView.displayNote)
  }

  test1();
  test2();

})(this);
