function longest_prefix(strs){
    //check array is empty
    if(!strs.length){
        return '';
    }
    
    //Find the shortest array element
    //if current is less than next element take small 
    const shortest = strs.reduce((x,y)=>x.length>y.length?y:x)
    
    //iterate the array to shortest element time
    for(let i=0; i < shortest.length; i++){
        //check is the character is same in all string
        for(let  j = 0; j < strs.length; j++ ){
            if(strs[j][i]!==shortest[i]){
                // if not return the longest prefix
                return shortest.slice(0,i)
            }
        }
    }
    //if all the character match,return shortest 
    // or the string is empty return empty
    return shortest
}

let str = [""]
console.log(longest_prefix(str))
