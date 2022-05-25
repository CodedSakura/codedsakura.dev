window.addEventListener("load", function () {
  const mailToSpan = document.getElementById("mailTo");
  const mailTo = document.createElement("a");
  mailTo.href = "mailto:sakura.coded@gmail.com";
  Array.from(mailToSpan.childNodes)
    .forEach(function (child) {
      return mailTo.append(child);
    });
  mailToSpan.replaceWith(mailTo);
});
