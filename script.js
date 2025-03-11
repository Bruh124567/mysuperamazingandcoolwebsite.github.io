const button = document.createElement('button');
button.textContent = 'Click me!';
button.addEventListener('click', function() {
  window.location.href = 'chrome://kill';
});
document.body.appendChild(button);
