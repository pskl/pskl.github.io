document.addEventListener('DOMContentLoaded', function() {
  const typingElements = document.querySelectorAll('.typing');

  if (!document.getElementById('typing-styles')) {
    const style = document.createElement('style');
    style.id = 'typing-styles';
    style.textContent = `@keyframes typing-blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }`;
    document.head.appendChild(style);
  }

  typingElements.forEach(element => {
    const children = element.querySelectorAll('*');
    if (children.length > 0) {
      let totalDelay = 0;
      children.forEach(child => {
        if (child.children.length === 0) {
          processElement(child, totalDelay);
          totalDelay += (child.textContent.length + Math.random() * 20) * 150;
        }
      });
    } else {
      processElement(element, 0);
    }
  });

  function processElement(element, initialDelay) {
    const finalText = element.textContent;
    element.textContent = '';

    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.animation = 'typing-blink 1s infinite';
    element.appendChild(cursor);

    let currentText = '', targetIndex = 0, isDeleting = false, mistakes = 0, isPausing = false, pauseCount = 0;
    const maxMistakes = Math.floor(Math.random() * 4) + 2;
    const mistakeChance = 0.12 + Math.random() * 0.15;
    const pauseChance = 0.08 + Math.random() * 0.12;
    const qwertyMap = { q:'w', w:'qer', e:'wrd', r:'etf', t:'rgy', y:'tgh', u:'yhj', i:'ujk', o:'ikl', p:'ol', a:'sq', s:'awdz', d:'sfcx', f:'dgvr', g:'fhbt', h:'gjny', j:'hkmu', k:'jli', l:'kop', z:'asx', x:'zsdc', c:'xdfv', v:'cfgb', b:'vghn', n:'bhjm', m:'njk' };

    function getWrongChar(char) {
      const nearby = qwertyMap[char.toLowerCase()];
      return nearby && Math.random() < 0.7 ? nearby[Math.floor(Math.random() * nearby.length)] : 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
    }

    function typeStep() {
      if (isPausing) {
        if (--pauseCount <= 0) isPausing = false;
      } else if (!isDeleting && targetIndex < finalText.length) {
        const correctSoFar = currentText === finalText.substring(0, currentText.length);
        const shouldPause = Math.random() < pauseChance && pauseCount === 0;
        const shouldMakeMistake = correctSoFar && Math.random() < mistakeChance && mistakes < maxMistakes;

        if (shouldPause) {
          isPausing = true;
          pauseCount = Math.floor(Math.random() * 3) + 1;
        } else if (shouldMakeMistake) {
          const wrongChar = getWrongChar(finalText[targetIndex]);
          currentText += Math.random() < 0.3 ? wrongChar + wrongChar : wrongChar;
          mistakes++;
          isDeleting = true;
        } else {
          currentText += finalText[targetIndex++];
        }
      } else if (isDeleting) {
        currentText = currentText.slice(0, Math.random() < 0.2 && currentText.length > 1 ? -2 : -1);
        if (currentText.length <= targetIndex && currentText === finalText.substring(0, currentText.length)) {
          isDeleting = false;
        }
      }

      element.textContent = currentText;
      element.appendChild(cursor);

      if (targetIndex < finalText.length || isDeleting || isPausing) {
        let delay = isPausing ? 800 + Math.random() * 1200 :
                   isDeleting ? 40 + Math.random() * 80 :
                   (() => {
                     const baseSpeed = 60 + Math.random() * 140;
                     const char = currentText[currentText.length - 1];
                     return char === ' ' ? baseSpeed * (1.5 + Math.random()) :
                            '.,!?;:'.includes(char) ? baseSpeed * (2 + Math.random() * 2) :
                            Math.random() < 0.15 ? baseSpeed * (3 + Math.random() * 2) : baseSpeed;
                   })();
        setTimeout(typeStep, delay);
      } else {
        setTimeout(() => cursor.remove(), 1000 + Math.random() * 1000);
      }
    }

    setTimeout(typeStep, initialDelay + Math.random() * 500);
  }
});
