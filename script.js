// Define the password types and their corresponding links
const passwordTypes = {
  pero1: "https://sites.google.com/site/nzjzpgzpravni/home",
  pero2: "https://docs.google.com/spreadsheets/u/0/d/e/2PACX-1vTtC8ZGOp9E8HGLFk3HH0HK1T8aqoDWNkH-BysgDEvRJ6ugffSI9ezspr4gJbFY4q_oNUSZvPvRUqJs/pubhtml?gid=1845877428&single=true",
  pero3: "https://sites.google.com/site/nzjzpgzpravni/pravniakti?authuser=0",
  pero4: "https://sites.google.com/site/nzjzpgzpravni/kadrovi?authuser=0",
  pero5: "https://sites.google.com/site/nzjzpgzpravni/odsjek-za-op%C4%87e-i-tehni%C4%8Dke-poslove?authuser=0"
};

// Handle form submission
document.getElementById("passwordForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const password = document.getElementById("password").value;
  const link = passwordTypes[password];
  if (link) {
    window.location.href = link;
  } else {
    alert("Kriva šifrica majmunčino zavodska! Pokušaj ponovno unesti šifricu.");
  }
});