// const { Target } = require("lucide-react");

window.addEventListener("load", () => {
  const $ = (id) => document.getElementById(id);

  // Popup to trigger if user doesn't fill out this field
  $("id").addEventListener("blur", (e) => {
    if (!e.target.value) e.target.reportValidity();
  });

  $("empForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`ID: ${$("id").value}`);
    console.log(`Name: ${$("name").value}`);
    console.log(`Extension: ${$("ext").value}`);
    console.log(`Email: ${$("email").value}`);
    console.log(`Department: ${$("department").value}`);
  });
});
