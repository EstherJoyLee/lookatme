window.onload = function(){

  alert("It's being updated\nSlow like a turtle...🐢");

  const chickIcon = document.getElementById('chick-icon');
  const chickContainer = document.querySelector('.chick-container');
  
  document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      // Get the background color at the mouse position
      const color = getBackgroundColor(mouseX, mouseY);
      
      // Calculate the contrasting color for the icon
      const contrastingColor = getContrastingColor(color);
  
      // Adjust the position of the chick icon based on mouse coordinates
      chickContainer.style.transform = `translate(${mouseX - 50}px, ${mouseY - 50}px`;
  
      // Update the fill color of the chick icon with the contrasting color
      chickIcon.style.fill = contrastingColor;
  });
  
  function getBackgroundColor(x, y) {
      const pixel = getPixelAtMousePosition(x, y);
      const color = rgbToHex(pixel[0], pixel[1], pixel[2]);
      return color;
  }
  
  function getPixelAtMousePosition(x, y) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 1;
      canvas.height = 1;
  
      context.getPixel = function (x, y) {
          return this.getImageData(x, y, 1, 1).data;
      };
  
      return context.getPixel(x, y);
  }
  
  function rgbToHex(r, g, b) {
      return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
  }
  
  function getContrastingColor(hexColor) {
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);
  
      // Calculate the luminance of the background color
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
      // Choose white or black based on the luminance for contrast
      return luminance > 0.5 ? '#000' : '#FFF';
  }

}
