const text = document.getElementById('txt');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
  text.textContent = "Powered by ElectronJS";
  button.textContent = "Clicked";
});