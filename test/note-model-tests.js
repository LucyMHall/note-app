console.log("Note Tests:");

(function(exports) {

  console.log("Constructor:")

  function test1() {
    describe("Should make an instance of Note")
    var note = new Note();
    assert.isInstanceOf(Note, note);
  };

  function test2() {
    describe("Should set text of Note")
    var message = "My favourite language is Ruby"
    var note = new Note(message)
    assert.isEqual(message, note.text)
    note.resetCounter()
  }

  function test3() {
    describe("Should give a note a unique identifier of 0 if first note")
    var note = new Note("My favourite language is Ruby")
    assert.isEqual(0, note.id)
    note.resetCounter()
  }

  function test4() {
    describe("Should give a note a unique identifier of 1 if second note created")
    var firstNote = new Note("first note")
    var secondNote = new Note("second note")
    assert.isEqual(1, secondNote.id)
    secondNote.resetCounter()
  }

  function test5() {
    describe("Should give a note a unique identifier of 5 if sixth note created")
    new Note("first note")
    new Note("second note")
    new Note("third note")
    new Note("fourth note")
    new Note("fifth note")
    var sixthNote = new Note("sixth note")
    assert.isEqual(5, sixthNote.id)
    sixthNote.resetCounter()
  }

  test1();
  test2();
  test3();
  test4();
  test5();
})(this);
