function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    if (str.length <= 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return isPalindrome(str.slice(1, -1));
    }
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
