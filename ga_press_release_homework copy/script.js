
//opens the email form
let topLink = document.getElementById('top_link');
topLink.addEventListener("click", openEmailForm);

function openEmailForm () {
  document.getElementById('email_box').style.visibility = 'visible';
}

//closes the email form
let closeButton = document.getElementById('close_button');
closeButton.addEventListener("click", closeEmailForm);

function closeEmailForm () {
  document.getElementById('email_box').style.visibility = 'hidden';
}

//on submit, thanks the user on the main page
document.getElementById("submit_button").addEventListener("click", sayThanks);

function sayThanks () {
  closeEmailForm();
  document.getElementById("be_in_touch").style.height = "30px";
  document.getElementById("be_in_touch").style.padding = "15px";
  document.getElementById("be_in_touch").innerHTML = 'Thanks, we\'ll be in touch!';
}


