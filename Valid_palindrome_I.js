function valid_palindrome(str){
    let r = str.length-1, l = 0
    
    while(l<=r){
        //check left is symbols or not
        if(/[\W_]/.test(str[l])){
            l++
        }
        //check right is symbols or not
        else if(/[\W_]/.test(str[r])){

            r--
        }

        //check left and right element 
        else{
            if(str[l].toLowerCase() != str[r].toLowerCase()){
                return false
            }
            l++
            r--
        }
    }
    return true
}
let str = "A man, a plan, a canal: Panama"
console.log(valid_palindrome(str))