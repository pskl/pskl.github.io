document.addEventListener('DOMContentLoaded', function() {
  const strikeThroughElements = document.querySelectorAll('.strikethrough');

  strikeThroughElements.forEach(element => {
    const children = element.querySelectorAll('*');

    if (children.length > 0) {
      let totalDelay = 0;
      children.forEach(child => {
        if (child.children.length === 0) {
          processElement(child, totalDelay);
          totalDelay += child.textContent.length * 50;
        }
      });
    } else {
      processElement(element, 0);
    }
  });

  function processElement(element, initialDelay) {
    const text = element.textContent;
    element.textContent = '';
    element.style.position = 'relative';

    const words = text.split(' ');
    let charIndex = 0;

    words.forEach((word, wordIndex) => {
      const wordSpeed = 30 + Math.random() * 40;
      const strikeHeight = 1 + Math.random() * 3;
      const verticalOffset = -10 + Math.random() * 20;

      word.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.position = 'relative';
        span.style.display = 'inline';

        const strike = document.createElement('span');
        strike.style.position = 'absolute';
        strike.style.left = '0';
        strike.style.top = `${50 + verticalOffset}%`;
        strike.style.width = '0';
        strike.style.height = `${strikeHeight}px`;
        strike.style.backgroundColor = 'currentColor';
        strike.style.transform = 'translateY(-50%)';
        strike.style.transition = 'width 0.3s ease-in-out';
        strike.style.pointerEvents = 'none';

        span.appendChild(strike);
        element.appendChild(span);

        setTimeout(() => {
          strike.style.width = '100%';
        }, initialDelay + (charIndex * wordSpeed));

        charIndex++;
      });

      if (wordIndex < words.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.textContent = ' ';
        element.appendChild(spaceSpan);
        charIndex++;
      }
    });
  }
});
