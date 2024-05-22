function getNewsletter() {
  let userEmail = document.getElementById("email").value;
  let send;
  
  if (userEmail !== undefined && userEmail !== null) {
    send = "Subscipción realizada";
  } else {
    send = "Email no apto";
  }
  document.getElementById("newsletter").innerHTML = send;
}

document.addEventListener('DOMContentLoaded', function() {
  let sendButton = document.getElementById('button');
  sendButton.addEventListener('click', getNewsletter);
});