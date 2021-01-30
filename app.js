document.getElementById("heading").innerHTML =
  localStorage["title"] || "Cadambra"; // default text
document.getElementById("content").innerHTML =
  localStorage["text"] || "Type here"; // default text

setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
  localStorage["text"] = document.getElementById("content").innerHTML; // content div
}, 1000);
