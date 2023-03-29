function remove_consecutive(str){
    let s = str[0]
    for(let i = 1; i < str.length; i++){
        if(str[i]!=str[i-1]){
            s+=str[i]
        }
    }
    return s
}   
let str = 'aabbcccc' 
console.log(remove_consecutive(str))