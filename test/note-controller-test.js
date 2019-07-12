// console.log("Note Controller Tests:");
//
// (function(exports) {
//
//   console.log("Contructor")
//
//   function test1() {
//     describe("instantiates a note controller")
//     return NoteController;
//     var theNoteController = new NoteController;
//     assert.isInstanceOf(NoteController, theNoteController);
//   };
//
//   console.log("display")
//
//   function test2() {
//     describe("changes innerHTML of app element")
//
//     function MockNoteList(){
//       this.makeNote = function(text) {};
//     }
//     function MockNoteListView(mockNoteList) {
//       this.displayNoteList = function() {
//         return "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
//       }
//     }
//
//     var theNoteController = new NoteController(MockNoteList, MockNoteListView);
//     theNoteController.display()
//     var element = document.getElementById("app")
//     assert.includes("<ul><li><div>Favourite drink: seltzer</div></li></ul>", element.innerHTML)
//   }
//
//   test1();
//   test2();
//
// })(this);
