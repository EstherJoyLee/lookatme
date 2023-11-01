window.onload = function(){

  alert("It's being updated\nSlow like a turtle...🐢");

  const chickIcon = document.getElementById('chick-icon');
  const chickContainer = document.querySelector('.chick-container');
  const contrastThreshold = 128; // 색상 대비를 조절하는 임계값
  
  document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      // Get the background color at the mouse position
      const color = getBackgroundColor(mouseX, mouseY);
  
      // Calculate the contrast color
      const contrastingColor = getContrastingColor(color);
  
      // Adjust the position of the chick icon based on mouse coordinates
      chickContainer.style.transform = `translate(${mouseX - 50}px, ${mouseY - 50}px`;
  
      // Update the fill color of the chick icon with the contrasting color
      chickIcon.style.fill = contrastingColor;
  });
  
  function getBackgroundColor(x, y) {
      // You can replace this with your own logic to get the background color
      // For example, you can capture the color of the background element at (x, y)
      // Here, we're just using a random color as an example
      const randomColor = getRandomColor();
      return randomColor;
  }
  
  function getRandomColor() {
      const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      return randomColor;
  }
  
  function getContrastingColor(bgColor) {
      // Convert the background color to an RGB array
      const bgRgb = hexToRgb(bgColor);
  
      // Calculate the brightness of the background color
      const brightness = (bgRgb.r * 299 + bgRgb.g * 587 + bgRgb.b * 114) / 1000;
  
      // Choose white or black for contrasting color based on brightness
      const contrastingColor = brightness > contrastThreshold ? 'black' : 'white';
  
      return contrastingColor;
  }
  
  function hexToRgb(hex) {
      // Convert a hexadecimal color to RGB format
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
  }
  
}
