document.addEventListener('DOMContentLoaded', function() {
  const STEP = 2.8;
  const MAX_PASSES = 14;
  const CHAR_DELAY = 70;
  const PASS_PAUSE = 450;

  const palette = getComputedStyle(document.documentElement);
  const cssVar = name => palette.getPropertyValue(name).trim();

  const DARK = cssVar('--pastel-dark');
  const ACCENTS = [
    cssVar('--pastel-red'),
    cssVar('--pastel-yellow'),
    cssVar('--pastel-pink'),
    cssVar('--pastel-green')
  ];

  document.querySelectorAll('h1.post-title').forEach(setup);

  function setup(element) {
    const text = element.textContent.trim();
    if (!text) return;

    const cs = getComputedStyle(element);
    element.style.position = 'relative';
    element.style.color = DARK;

    const step = { x: STEP * Math.SQRT1_2, y: -STEP * Math.SQRT1_2 };
    const offset = { x: step.x, y: step.y };
    let layers = [];
    let accentIndex = 0;
    let prevAccent = false;

    function nextColor() {
      if (prevAccent) {
        prevAccent = false;
        return DARK;
      }
      prevAccent = true;
      return ACCENTS[accentIndex++ % ACCENTS.length];
    }

    function makeLayer(color) {
      const layer = document.createElement('span');
      layer.setAttribute('aria-hidden', 'true');
      layer.style.position = 'absolute';
      layer.style.top = '0';
      layer.style.left = '0';
      layer.style.boxSizing = 'border-box';
      layer.style.paddingTop = cs.paddingTop;
      layer.style.paddingLeft = cs.paddingLeft;
      layer.style.color = color;
      layer.style.pointerEvents = 'none';
      layer.style.whiteSpace = 'pre';
      layer.style.willChange = 'transform';
      layer.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
      element.appendChild(layer);
      return layer;
    }

    function typePass() {
      const layer = makeLayer(nextColor());
      layers.push(layer);
      let i = 0;

      (function typeChar() {
        layer.textContent = text.slice(0, i + 1);
        i++;
        if (i < text.length) {
          setTimeout(typeChar, CHAR_DELAY);
        } else {
          setTimeout(nextPass, PASS_PAUSE);
        }
      })();
    }

    function nextPass() {
      if (layers.length >= MAX_PASSES) {
        layers.forEach(function(l) { l.remove(); });
        layers = [];
        offset.x = step.x;
        offset.y = 0.6 * step.y;
      } else {
        offset.x += step.x;
        offset.y += 0.6 * step.y;
      }
      typePass();
    }

    typePass();
  }
});
