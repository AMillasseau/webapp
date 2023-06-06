function send() {
            const url ="ask/save.php"
            const name = document.getElementById("name").value;
            const contact = document.getElementById("contact").value;
            const message = document.getElementById("message").value;
            makeRequest(url, name, contact, message);
          };
  function makeRequest(url, userName) {
  // …

  httpRequest.onreadystatechange = alertContents;
  httpRequest.open("POST", url);
  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  httpRequest.send(`userName=${encodeURIComponent(userName)}`);
};
