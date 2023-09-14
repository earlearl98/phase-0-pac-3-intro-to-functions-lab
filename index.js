function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log((string).toUpperCase());
}

function logWhisper(string) {
  console.log((string).toLowerCase()); 
}



function sayHiToHeadphonedRoommate(string) {
  // Check if the string is all lowercase
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  }
  
  // Check if the string is all uppercase
  if (string.toUpperCase() === string) {
    return "YES INDEED!";
  }
  
  // Check if the string is equal to "Let's have dinner together!"
  if (string === "Let's have dinner together!") {
    return "I would love to!";
  }

  // If none of the conditions above are met, you can provide a default response.
  // For example, you could return something like "What did you say?"
  
  // Alternatively, you could return an error message if needed.
  
  // Make sure to handle all possible cases based on the requirements.
}

// Example usages:
console.log(sayHiToHeadphonedRoommate('hello')); // "I can't hear you!"
console.log(sayHiToHeadphonedRoommate('HELLO')); // "YES INDEED!"
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // "I would love to!"

