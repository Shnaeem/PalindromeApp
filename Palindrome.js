function checkPalindrom (str) {
  if(str == str.split('').reverse().join('')){
    document.getElementById("rName").value = `${str} is a palindrome`;
  }else{
    document.getElementById("rName").value = `${str} is not a palindrome`;
  }
}
