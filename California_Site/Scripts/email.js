function getEmail() {
    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    if (email !== confirm) {
        alert("Matching Email not found! Please try again");
        event.preventDefault(); 
    }
}

// Revision 1 comment: ensured the var confirm matched the data present in tuple to ensure functionality --
// Additionally, realized that the formsubmit.co needed to be activated for my spam email before it would work correctly --
// Tested with my primary email account and although it may prompt for a captcha, it is now confirmed working.


// Modelled this function from this resource https://stackoverflow.com/questions/7381150/how-to-send-an-email-from-javascript
