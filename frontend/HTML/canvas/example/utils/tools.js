/**
 * 鼠标
 * @param {HTMLElement} cnv
 */
export function useMouse(cnv) {
  let mouse = { x: 0, y: 0 };
  let down = false;

  cnv.addEventListener('mousedown', () => {
    down = true;
  });
  cnv.addEventListener('mouseup', () => {
    down = false;
  });

  cnv.addEventListener('mousemove', (e) => {
    let rect = cnv.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  return {
    isDown() {
      return down;
    },
    getMouse() {
      return mouse;
    }
  };
}

/**
 * canvas
 * @param {string} id canvas id
 */
export function useCanvas(id = 'canvas') {
  let cnv = document.getElementById(id);
  let cxt = cnv.getContext('2d');

  return {
    cnv,
    cxt
  };
}
