function send() {
            const url ="https://webapp-amillasseau.vercel.app/api/save"
            const name = document.getElementById("name").value;
            const contact = document.getElementById("contact").value;
            const message = document.getElementById("message").value;
            const text = name + " ("+contact+") : "+message
            makeRequest(url, text);
          };
  function makeRequest(url, text) {
  // …

  httpRequest.onreadystatechange = alertContents;
  httpRequest.open("POST", url);
  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  httpRequest.send(`text=${encodeURIComponent(text)}`);
};
