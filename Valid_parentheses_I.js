function valid_parenthses(s){
    let stack = []
    for (let temp of s){
        if(')'==temp){
            if(!('('==stack.pop())){
                return false
            }
        }
        else if('('==temp){
            stack.push(temp)
        }
        else if(']'==temp){
            if(!('['==stack.pop())){
                return false
            }
        }
        else if('['==temp){
            stack.push(temp)
        }
        else if('}'==temp){
            if(!('{'==stack.pop())){
                return false
            }
        }
        else if('{'==temp){
            stack.push(temp)
        }
    }
    if(stack.length == 0){
        return true
    }
    else 
        return false
}
let s = "(]"
console.log(valid_parenthses(s))