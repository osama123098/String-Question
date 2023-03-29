function duplicate(s){
    //make object
    let duplicate = {}
    //initialize all the element to 0
    for(let i = 0; i < s.length ;i++){
        duplicate[s[i]]=0
    }
    //count the accurence 
    for(let i = 0; i < s.length ;i++){
        duplicate[s[i]]++
    }
    //print the duplicate
    for(let count in duplicate){
        if(duplicate[count]>1){
            console.log(`${duplicate[count]} is ${count}`)
        }
    }

}
let str = 'test string'
duplicate(str)