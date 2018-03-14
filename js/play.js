/*
  INSTRUCTIONS
    - Write all of your code inside the `main` function below.
    - Use this file to build/test your programs.
    - To save your work, when you finish a challenge:
        - Make a copy of this file in this `js/` directory and name it e.g. `all-blue.js`
        - Clean out this `play.js` file so you can start fresh on a new challenge

  RESERVED WORDS (do not use as variable names)
      row, colors, kyrel, initial_state

  AVAILABLE METHODS
      moveRight(), moveLeft(),
      useGreen(), useBlue(), draw(), erase(),
      onGreen(), onBlue()

  You can also configure the initial state of the row using the following key:
    '.' => empty
    'b' => blue
    'g' => green
*/

var initial_state = ['.', '.', 'b', '.', '.'];

function main() {
  
  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////
 for (let i = 0; i = initial_state.length; i++) {
  if (onBlue()) {
    erase();
    moveRight();
    draw();
  }
 } moveRight();



//   var n = 3;

//   for (let i = 0; i < initial_state.length; i++) {
//     if ((i + 1) % n === 0) {
//     moveRight();
//   } else {
//     erase();
//     moveRight();
//   }
// }


//   for (let i = 0; i < initial_state.length; i++) {
//     if (i % 2 === 0) {
//     moveRight();
//   } else {
//     erase();
//     moveRight();
//   }
// }

// for (i = 0; i < initial_state.length; i ++) {
//  if (i % 2 === 1) {
//    moveRight();
//   } else {
//   erase();
//   moveRight();
//    }
//  }

  
  // var n = 2;

  // for (let i = 0; i < n; i++) {
  //   useBlue();
  //   draw();
  //   moveRight();
  // }



  // if (onBlue()) {
  //   useBlue();
  // } else if (onGreen()){
  //   useGreen();
  // }

  // for (let i =0; i < initial_state.length; i++){
  //   draw();
  //   moveRight();
  // }
  

  // var i = 0;
  // while (initial_state[i]) {
  //   useBlue();
  //   draw();
  //   moveRight();
  //   i++;
  // }

  // for (let i = 0; i < initial_state.length; i++){
  //   if (i === 0){

  //   }
  // }

  // if (onBlue()) {
  //   erase();
  //   moveRight();
  //   moveRight();
  //   moveRight();
  //   moveRight();
  //   useBlue();
  //   draw();
  // } else if (onGreen()) {
  //   erase();
  //   moveRight();
  //   moveRight();
  //   moveRight();
  //   moveRight();
  //   useGreen();
  //   draw();
  // } else {
  //   erase();
  // }

  // if (onBlue()) {
  //   useBlue()
  // } else if (onGreen()) {
  //   useGreen()
  // }
  //   moveRight();
  //   moveRight();
  //   moveRight();
  //   moveRight();
  //   moveRight();
  // }

  // if ( onGreen() || onBlue() ) {
  //   erase();
  //   moveRight();
  //   moveRight();
  //   moveRight();
  //   moveRight();
  //   draw();
  // } 
  // //   moveRight();
  // //   moveRight();
  // //   moveRight();
  // //   moveRight();
  // //   moveRight();
  // // }
  // moveRight();
  // moveRight();
  // moveRight();
  // moveRight();



  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

} // <--- be careful not to delete or comment-out this closing bracket!
