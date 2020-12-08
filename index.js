console.log("Eats your Beets");

// const sayHi = () => {
//   console.log("HIIIIIIIIIIIII!!!");
// }

// module.exports = {
//   sayHi: () => {
//       console.log('HELLO')
//   }
// }

module.exports = {
  sayHi: () => {
      const { exec } = require("child_process");

exec("open https://www.youtube.com/watch?v=5qap5aO4i9A", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`yo`);
});
  }
}

const { sayHi } = require('lofi-beats');

sayHi();
