console.log("Tests:");

(function(exports) {

  console.log("Constructor:")

  function test1() {
    assert.describe("Should make an instance of Note")
    var note = new Note();
    assert.isInstanceOf(Note, note);
  };

  function test2() {
    assert.describe("Should set text of Note")
    var message = "My favourite language is Ruby"
    var note = new Note(message)
    assert.isEqual(message, note.text)
  }

  test1();
  test2();
})(this);
