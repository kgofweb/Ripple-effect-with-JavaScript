// DOM elements
const buttons = document.querySelectorAll('button');

// Event listener
buttons.forEach(btn => btn.addEventListener('click', showBorder));
buttons.forEach(btns => btns.addEventListener('click', rippleEffect));

function showBorder() {
   buttons.forEach(btn => btn.classList.remove('border'));
   this.classList.add('border');
}

function rippleEffect(event) {
   let circle = document.createElement('div');
   circle.classList.add('ripple');
   // Append child
   this.appendChild(circle);

   // Set click position mouseEvent
   circle.style.top = event.clientY - this.offsetTop + 'px';
   circle.style.left = event.clientX - this.offsetLeft + 'px';
   circle.style.transform = 'translate(-50%, -50%) scale(0)';
}