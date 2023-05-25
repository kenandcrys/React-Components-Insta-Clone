function solution(inputString) {
    const stack = [];
    let currentSubstring = '';
debugger
    for (let c of inputString) {
      if (c === '(') {
        stack.push(currentSubstring);
        currentSubstring = '';
debugger
      } else if (c === ')') {
        currentSubstring = stack.pop() + currentSubstring.split('').reverse().join('');
debugger
      } else {
        currentSubstring += c;
      }
    }
debugger
    return currentSubstring;
      }

solution("foo(bar(baz))blim")
