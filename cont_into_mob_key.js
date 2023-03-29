
function printSequence(s,inp){
    // initialize the empty string
    let str = ''
    for (const char of inp) {
        
    
        //check for space
        if(char == ' '){
            str+=0
        }
        else{
            //65 of A in ASCII
            str+=s[char.charCodeAt(0)-65]
        }

    }
    return str
}
let str = [ "2", "22", "222",
            "3", "33", "333",
            "4", "44", "444",
            "5", "55", "555",
            "6", "66", "666",
            "7", "77", "777", "7777",
            "8", "88", "888",
            "9", "99", "999", "9999" ]

let input = "OSAMA LOVES CODING";
console.log(printSequence(str,input))