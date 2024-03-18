// Function to return the input string in all uppercase

function shout(string) {
   
   return string.toUpperCase();

  }
 
  
// Function to return the input string in all lowercase
  function whisper(string) {
    return string.toLowerCase();

  }


  //Function to log the input string in all caps
  function logShout(string) {
    console.log(string.toUpperCase());
  }
 
  //Function to log the input string in all lowercase
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }


  //  Function to respond based on the input string
  function sayHiToHeadphonedRoommate(string) {
        if (string === string.toLowerCase()) {
            return "I can't hear you!";

        } else if 
        (string === string.toUpperCase()) {
            return  "YES INDEED!";

        }else if
        (string === "Let's have dinner together!") {
            return "I would love to!";
        }
  }