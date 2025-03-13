function firstWord(s) {
    // Trim leading and trailing spaces
    s = s.trim();
    
    // Find index of first space
    const index = s.indexOf(' ');
    
    // If no space is found, return the entire string
    if (index === -1) return s;
    
    // Return substring from 0 to first space
    return s.substring(0, index);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
