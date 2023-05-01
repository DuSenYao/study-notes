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

/**
 * 检测两个矩形是否相交
 * @param {{x: number, y: number, width: number, height: number}} rectA
 * @param {{x: number, y: number, width: number, height: number}} rectB
 * @returns {boolean}
 */
export function checkRect(rectA, rectB) {
  return !(
    rectA.x + rectA.width < rectB.x ||
    rectB.x + rectB.width < rectA.x ||
    rectA.y + rectA.height < rectB.y ||
    rectB.y + rectB.height < rectA.y
  );
}

/**
 * 检测两个圆是否相交
 * @param {{x: number, y: number, radius: number}} circleA
 * @param {{x: number, y: number, radius: number}} circleB
 * @returns {boolean}
 */
export function checkCircle(circleB, circleA) {
  return Math.sqrt((circleB.x - circleA.x) ** 2 + (circleB.y - circleA.y) ** 2) < circleA.radius + circleB.radius;
}

const KEY_MAP = new Map([
  ['ArrowLeft', 'left'],
  ['ArrowRight', 'right'],
  ['ArrowUp', 'top'],
  ['ArrowDown', 'bottom'],
  ['w', 'top'],
  ['s', 'bottom'],
  ['a', 'left'],
  ['d', 'right']
]);

/**
 * @description 将 key 转为方向
 * @param {string} key
 * @returns {string} 'left' | 'right' | 'top' | 'bottom'
 */
export function useKeyDirection(key) {
  if (typeof key !== 'string') return '';
  return KEY_MAP.get(key) || '';
}

/**
 * 获取随机颜色
 * @returns {string} color
 */
export function getRandomColor() {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}

/**
 * 获取随机数
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
