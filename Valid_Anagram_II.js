function valid_anagram(s, t){
    // check the length 
    if(s.length!= t.length){
        return false
    }
    
    //convet to string to lower case beacause of size of array 
    s = s.toLowerCase()
    t = t.toLowerCase()
    
    //create array size of 26 
    //size of alphabets
    let freq = new Array(26).fill(0)
    for(let i = 0; i < s.length; i++){
        //find the charcode value 
        //subtract 97 to marks at correct index
        //a is 97 so 97-97 is '0' index
        freq[s.charCodeAt(i)-97]++

    }
    for(let i=0; i < t.length; i++){
        freq[t.charCodeAt(i)-97]--
        if( freq[t.charCodeAt(i)-97] <= 0){
            return false
        }

    }
    return true
}
console.log(valid_anagram('anagram','car'))