function isIsogram(str) {
  //Write your solution here
  str = new Set(str).size === str.length;
  if (str === true) {
    return "Yes";
  } else {
    return "No";
  }
}

isIsogram("Machine");
