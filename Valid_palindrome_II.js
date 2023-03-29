function valid_palindrome(str){
    //lower the case & replace the symbols with 
    //help of RE
    str = str.replace(/[\W_']/g,'').toLowerCase()
    
    //make the string to array
    //reverse it
    //join it again as string
    return str === str.split('').reverse().join('')

}
console.log(valid_palindrome('A man, a plan, a canal: Panama'))