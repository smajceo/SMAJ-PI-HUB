document.getElementById("registerForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Registration successful (demo)");
});

// Normal login placeholder
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Login system will be connected to backend soon.");
});

// Pi Wallet login placeholder
document.getElementById("piLoginBtn").addEventListener("click", function(){
  alert("Pi Wallet authentication coming next.");
});

console.log("Auth page loaded");