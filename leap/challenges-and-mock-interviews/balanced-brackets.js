
function isBalancedBrackets(str){
    // Create stack 
    const stack = [];

    for(let i = 0; i<str.length; i++){
      const item = str[i];
      if(item==='('){
        // Push the opening brackets
        stack.push(item)
      } else if (item===')'){ 
        // When you need to pop but the stack is empty, return false
        if(stack.length < 1){
          return false;
        }
        // When you encounter a cosing bracket, pop the stack
        stack.pop();
      }
    }
   
    // If length of stack is greater than 0, return false
    if(stack.length > 0){
      return false;
    }

    return true;
}
