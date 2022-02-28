import { useEffect, useRef } from 'react';
import styles from '@styles/Game.module.css';

const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

class Ripple {
  position = {
    x: 0,
    y: 0
  }
  opacity = 1;
  radius = 10;

  constructor(pos) {
    this.position = {...pos};
  }

  draw_and_update(ctx, deltaTime) {
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.strokeWidth = 1;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    this.radius = this.radius + 1 * deltaTime * 0.09;
    this.opacity = this.opacity - 0.02 * deltaTime * 0.07;
  }
}

class Circle {
  position = {
    x: 0,
    y: 0
  }

  direction = {
    x: 0,
    y: 0
  }
  radius = 40;
  color = '';
  die = false;

  constructor(pos) {
    this.position = {...pos};
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.direction.x = (Math.random() * 2) - 1;
    this.direction.y = (Math.random() * 2) - 1;
    setTimeout(() => this.die = true, 5000);
  }
  draw_and_update(ctx, deltaTime) {
    if (this.radius > 1) {
      this.radius = this.radius - 1 * deltaTime * 0.09;
    }
    if (this.radius < 1) {
      this.radius = 1;
    }
    this.position.x = this.position.x + this.direction.x * deltaTime * 0.09;
    this.position.y = this.position.y + this.direction.y * deltaTime * 0.09;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }
}


function game(ctx, canvas) {
  let mousePos = {
    x: 0,
    y: 0,
  };
  let ripples = [];
  let circles = [];
  let deltaTime = 0;
  let previousTime = 0;

  function updateMousePos(event) {
    mousePos = getMousePos(canvas, event);
  }

  function createEffect() {
    ripples.push(new Ripple(mousePos));
    for (let i =0; i < 15; i++) {
      circles.push(new Circle(mousePos));
    }
  }

  document.addEventListener('mousemove', updateMousePos);
  document.addEventListener('mousedown', createEffect);

  function loop(elapsedTime) {
    deltaTime = elapsedTime - previousTime;
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = "white";
    let ripplesToDestroy = [];
    for (let i = 0; i < ripples.length; i++) {
      if (ripples[i].opacity < 0) {
        ripplesToDestroy.push(i);
      }
    }
    for (let i = 0; i < ripples.length; i++) {
      if (ripplesToDestroy.includes(i)) {
        ripples.splice(i ,1);
      }
    }
    let circlesToDestroy = [];
    for (let i = 0; i < circles.length; i++) {
      if (circles[i].die) {
        circlesToDestroy.push(i);
      }
    }
    for (let i = 0; i < circles.length; i++) {
      if (circlesToDestroy.includes(i)) {
        circles.splice(i ,1);
      }
    }
    ripples.forEach(ripple => ripple.draw_and_update(ctx, deltaTime));
    circles.forEach(circle => circle.draw_and_update(ctx, deltaTime));
    requestAnimationFrame(loop);
    previousTime = elapsedTime;
  }

  loop(0);
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
      scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
      scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

  return {
    x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
  }
}

export default function Game() {
  const canvasEl = useRef(null);

  useEffect(() => {
    const ctx = canvasEl.current.getContext('2d');
    game(ctx, canvasEl.current);
  }, []);

  return (<>
    <div className={styles.container}>
      <div className={styles['top-bar']}>
        <span className={styles.circle} />
        <span className={styles.circle} />
        <span className={styles.circle} />
      </div>
      <canvas ref={canvasEl} height="300" width="500"/>
    </div>
  </>);
}
