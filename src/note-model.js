(function(exports) {

var counter = -1

  function Note(text) {
    this.text = text;
    counter ++;
    calculateID = function() {
        return counter
      }
    this.id = calculateID()
    };

Note.prototype.resetCounter = function() {
  counter = -1
}
  exports.Note = Note;
  exports.counter = counter;
})(this);
