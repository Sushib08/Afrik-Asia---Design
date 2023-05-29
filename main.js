fetch("../../components/header.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector("header").innerHTML = html;
  });

fetch("../../components/footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector("footer").innerHTML = html;
  });
