function duplicate_more(s){
    //make map the new varialbe
    let temp = new Map
    for(let i =0; i < s.length; i++){

        //if(!temp.get(s[i])){
        //    temp.set(s[i], 1) 
        //}
        //else{
        //    temp.set(s[i],temp.get(s[i])+1)
        //}
        
        //check the character is present
        if(temp.has(s[i])){
            //so increase it
            temp.set(s[i],temp.get(s[i])+1)
        }
        else{
            //set the charaacter with value 1
            temp.set(s[i],1)
        }
    }
    //iterating through the unordered map
    for(let [key ,value] of temp){
        if(value>2){
            console.log(`${key}: ${value}`)
        }
    }

}
let str = 'sassdfaalanaasdasndlgvk'
duplicate_more(str)