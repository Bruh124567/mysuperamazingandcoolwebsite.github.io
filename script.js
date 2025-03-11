const button = document.createElement('button');
button.textContent = 'Click me!';
button.addEventListener('click', function() {
  alert('Button clicked!');
});
document.body.appendChild(button);
