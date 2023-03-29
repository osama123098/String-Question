function valid_parenthses(s){
    //use array like a stack
    let stack = []

    //hashmap use object or dictionary
    let close_open ={')':'(',']':'[','}':'{'}

    for(c of s){
        //check c is key of any open parenstheses 
        if(c in close_open){
            //check stack is not empty and check the
            //last element of stack is the close pair of
            //open braces
            
            //if(stack && stack[stack.length-1] == close_open[c]){
            //    stack.pop()
            //}
            //else{
            //    //the open parestheses is not matching
            //    return false
            //}
            
            //getting the top element
            //if stack is empty
            const top_element = stack.pop()  || '#'
            let temp = close_open[c]
            if(close_open[c]!==top_element){
                return false

            }

        }
        else{
            stack.push(c)
        }
    }
    //if the stack is empty so the pair are eleminated
    return stack.length === 0;
}
console.log(valid_parenthses('[]'))