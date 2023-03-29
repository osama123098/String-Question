function valid_anagram(s,t){
    // check the length 
    if(s.length!= t.length){
        return false
    }

    //object to calculate the accarrence of
    //character 
    let freq = {}
    for(let i =0; i<s.length; i++){
        //first time object is null that why
        freq[s[i]]=(freq[s[i]]| 0) + 1
    }
    for(let i = 0; i<t.length; i++){
        freq[t[i]]=(freq[t[i]]| 0) - 1
        //if decreament is negative
        //return false
        if(freq[t[i]] < 0){
            return false
        }
    }
    return true

}
let str ='anagram'
console.log(valid_anagram(str,'gramana'))