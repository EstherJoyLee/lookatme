window.onload = function(){

  alert("It's being updated\nSlow like a turtle...🐢");

  const chickIcon = document.getElementById('chick-icon');
  const chickContainer = document.querySelector('.chick-container');
  
  document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      // Adjust the position of the chick icon based on mouse coordinates
      chickContainer.style.transform = `translate(${mouseX - 50}px, ${mouseY - 50}px`;
  
      // Calculate a dynamic fill color based on mouse position
      const red = mouseX / window.innerWidth * 255;
      const green = mouseY / window.innerHeight * 255;
      const blue = 128; // You can adjust this value as needed
  
      // Update the fill color of the chick icon
      chickIcon.style.fill = `rgb(${red}, ${green}, ${blue})`;
  });

}
