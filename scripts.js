document.addEventListener('DOMContentLoaded', () => {
    const circle = document.getElementById('circle');
    // 웹페이지가 로드되면 동그라미를 중앙에 위치시킵니다.
    circle.style.top = '50%';
    circle.style.left = '50%';

    document.addEventListener('click', (e) => {
        // 클릭된 위치로 동그라미를 이동시킵니다.
        moveTo(circle, e.clientX, e.clientY);
    });
});

function moveTo(element, x, y) {
    // element를 (x, y) 위치로 선형적으로 이동시킵니다.
    const speed = 0.1; // 이동 속도 조절 변수
    const posX = element.offsetLeft;
    const posY = element.offsetTop;
    
    const dx = x - posX;
    const dy = y - posY;
    const distance = Math.sqrt(dx*dx + dy*dy);
    const steps = distance / (speed * 10);
    let stepCount = 0;
    
    const stepX = dx / steps;
    const stepY = dy / steps;
    
    function step() {
        if (stepCount < steps) {
            element.style.left = `${posX + stepX * stepCount}px`;
            element.style.top = `${posY + stepY * stepCount}px`;
            stepCount++;
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
}
