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

    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.position = 'relative';
      span.style.display = 'inline';

      const strike = document.createElement('span');
      strike.style.position = 'absolute';
      strike.style.left = '0';
      strike.style.top = '50%';
      strike.style.width = '0';
      strike.style.height = '2px';
      strike.style.backgroundColor = 'currentColor';
      strike.style.transform = 'translateY(-50%)';
      strike.style.transition = 'width 0.3s ease-in-out';
      strike.style.pointerEvents = 'none';

      span.appendChild(strike);
      element.appendChild(span);

      setTimeout(() => {
        strike.style.width = '100%';
      }, initialDelay + (index * 50));
    });
  }
});
