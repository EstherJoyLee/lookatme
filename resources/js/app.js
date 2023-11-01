window.onload = function(){

  // 페이지가 로드될 때 알림을 표시합니다.
  alert("업데이트 중입니다\n느리지만 거북이처럼...🐢");

  // DOM 요소에 대한 참조를 가져옵니다.
  const chickIcon = document.getElementById('chick-icon');
  const chickContainer = document.querySelector('.chick-container');
  const contrastThreshold = 128; // 색상 대비를 조절하는 임계값

  // 마우스 이벤트를 감지하여 처리합니다.
  document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX; // 마우스의 X 좌표
      const mouseY = e.clientY; // 마우스의 Y 좌표

      // 마우스 위치의 배경 색상을 가져옵니다.
      const color = getBackgroundColor(mouseX, mouseY);

      // 대비 색상을 계산합니다.
      const contrastingColor = getContrastingColor(color);

      // 마우스 좌표를 기반으로 chick 아이콘의 위치를 조정합니다.
      chickContainer.style.transform = `translate(${mouseX - 50}px, ${mouseY - 50}px`;

      // chick 아이콘의 채우기 색상을 대비 색상으로 업데이트합니다.
      chickIcon.style.fill = contrastingColor;
  });

  // 마우스 위치에 따라 배경 색상을 가져오는 함수
  function getBackgroundColor(x, y) {
    // Get the element at the mouse position
    const element = document.elementFromPoint(x, y);

    // Get the computed background color of the element
    const computedBackgroundColor = window.getComputedStyle(element).backgroundColor;
    console.log("x: " + x + ", y: " + y)
    console.log(computedBackgroundColor)
    return computedBackgroundColor;
}


  // 무작위 색상을 생성하는 함수
  function getRandomColor() {
      const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      return randomColor;
  }

  // 배경 색상을 대비 색상으로 변환하는 함수
  function getContrastingColor(bgColor) {
      // 배경 색상을 RGB 배열로 변환합니다.
      const bgRgb = hexToRgb(bgColor);

      // 배경 색상의 밝기를 계산합니다.
      const brightness = (bgRgb.r * 299 + bgRgb.g * 587 + bgRgb.b * 114) / 1000;

      // 밝기에 따라 대비 색상을 선택합니다.
      const contrastingColor = brightness > contrastThreshold ? 'black' : 'white';

      return contrastingColor;
  }

  // 16진수 색상을 RGB 형식으로 변환하는 함수
  function hexToRgb(hex) {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
  }

}