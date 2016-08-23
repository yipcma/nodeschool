var concat = require('concat-stream');

var stream = concat(function(buffer) {
  console.log(buffer.toString().split('').reverse().join(''));
})

//cannot further pipe into stdout because concat makes a non-readable stream; thus use console.log in callback instead

// another way is https://github.com/nodeschool/discussions/issues/90#issuecomment-237982881
process.stdin.pipe(stream);
