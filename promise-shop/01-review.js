'use strict'

function doneTimeout() {
  console.log('TIMED OUT!');
}

setTimeout(() => doneTimeout(), 300);
