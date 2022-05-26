import { useEffect, useRef } from 'react';
import styles from '@styles/Game.module.css';

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 300;

const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
let tab = 0;

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomColor() {
  return getRandomItem(colors);
}

class Ripple {
  position = {
    x: 0,
    y: 0
  }
  opacity = 1;
  radius = 10;
  dead = false;

  constructor(pos) {
    this.position = {...pos};
  }

  drawAndUpdate(ctx, deltaTime) {
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.strokeWidth = 1;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    this.radius = this.radius + 1 * deltaTime * 0.2;
    this.opacity = this.opacity - 0.02 * deltaTime * 0.1;
    if (this.opacity < 0) {
      this.dead = true;
    }
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

  radius = 10;
  color = '';
  dead = false;
  dieTimer = 0

  constructor(pos) {
    this.position = {...pos};
    this.color = getRandomColor();
    this.direction.x = (Math.random() * 2) - 1;
    this.direction.y = (Math.random() * 2) - 1;
  }

  drawAndUpdate(ctx, deltaTime) {
    this.dieTimer += deltaTime;

    if (this.dieTimer > 1000) {
      this.dead = true;
    }

    if (this.radius > 3) {
      this.radius = this.radius - 1 * deltaTime * 0.09;
    }

    if (this.radius < 1) {
      this.radius = 1;
    }

    this.position.x = this.position.x + this.direction.x * deltaTime * 0.2;
    this.position.y = this.position.y + this.direction.y * deltaTime * 0.2;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }
}

class Worm {
  pos = {
    x: 0,
    y: 0,
  };

  size = 6;
  speed = 0.2;
  dead = false;
  hide = false;
  tail = [];
  direction = 'top';
  color = '';
  directionTimer = 0
  hideTimer = 0;

  constructor(pos) {
    this.pos = {...pos};
    this.color = getRandomColor();
    this.setRandomDirection();
  }

  setRandomDirection() {
    const directions = ['up', 'down', 'left', 'right'];
    this.direction = getRandomItem(directions);
    this.tail.push({...this.pos});
  }

  drawAndUpdate(ctx, deltaTime) {
    this.hideTimer += deltaTime;
    this.directionTimer += deltaTime;

    if (this.hideTimer > 500) {
      this.hide = true;
    }

    if (this.directionTimer > 100) {
      this.directionTimer = 0;
      this.setRandomDirection();
    }

    this.tail.push({...this.pos});

    if (this.tail.length > 50) {
      this.tail.shift();
    }

    if (!this.hide) {

      switch (this.direction) {
        case 'up':
          this.pos.y -= this.speed * deltaTime;
          break;
        case 'down':
          this.pos.y += this.speed * deltaTime;
          break;
        case 'left':
          this.pos.x -= this.speed * deltaTime;
          break;
        case 'right':
          this.pos.x += this.speed * deltaTime;
        default:
          break;
      }

      ctx.fillStyle = this.color;
      ctx.fillRect(this.pos.x-(this.size/2), this.pos.y - (this.size/2), this.size, this.size);
    } else {
      let done = true;

      this.tail.forEach(pos => {
        if (!(this.pos.x === pos.x && this.pos.y === pos.y)) {
          done = false;
        }
      })

      if (done) {
        this.dead = true;
      }
    }

    for (let i = 1; i < this.tail.length; i++) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.tail[i].x-(this.size/2), this.tail[i].y - (this.size/2), this.size, this.size);
    }
  }
}


class Shape {
  dead = false;
  deathTimer = 0;
  rotation = 0;
  shape = '';
  color = '';
  pos = null;
  direction = { x: 0, y: 0 };
  lineWidth = 2;

  constructor(pos) {
    this.color = getRandomColor();
    this.pos = {...pos};
    this.direction.x = (Math.random() * 2) - 1;
    this.direction.y = (Math.random() * 2) - 1;
    this.shape = getRandomItem(['circle', 'square', 'triangle', 'cross'])
  }

  drawAndUpdate(ctx, deltaTime) {
    this.deathTimer += deltaTime;

    if (this.deathTimer > 500) {
      this.dead = true;
    }
    this.pos.x += this.direction.x * deltaTime * 0.2;
    this.pos.y += this.direction.y * deltaTime * 0.2;
    this.rotation += deltaTime * 0.006;

    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;

    this.createTransform(ctx, this.pos.x, this.pos.y, 1, this.rotation);

    switch (this.shape) {
      case 'cross':
        this.drawCross(ctx);
        break;
      case 'square':
        this.drawSquare(ctx);
        break;
      case 'triangle':
        this.drawTriangle(ctx);
        break;
      case 'circle':
        this.drawCircle(ctx);
        break;
      default:
        break;
    }
    this.createTransform(ctx, 0, 0, 1, 0);
  }


  createTransform(ctx, originX, originY, scale, rotate) {
    const xAxisX = Math.cos(rotate) * scale;
    const xAxisY = Math.sin(rotate) * scale;
    ctx.setTransform(xAxisX, xAxisY, -xAxisY, xAxisX, originX, originY);
  }

  drawCircle(ctx) {
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, 2 * Math.PI);
    ctx.stroke();
  }

  drawCross(ctx) {
    this.drawLine(ctx, - 5, - 5, + 5, + 5);
    this.drawLine(ctx, + 5, - 5, - 5, + 5);
  }

  drawLine(ctx, startPosX = 0, startPosY = 0, endPosX = 0, endPosY = 0) {
    ctx.beginPath();
    ctx.moveTo(startPosX, startPosY);
    ctx.lineTo(endPosX, endPosY);
    ctx.stroke();
  }

  drawSquare(ctx) {
    const size = 12;
    ctx.strokeRect(-size / 2, -size / 2, size, size);
  }

  _drawPoly(ctx, posX = 0, posY = 0, radius = 0, numberOfSides = 3) {
    ctx.beginPath();
    ctx.moveTo(posX + radius * Math.cos(0), posY + radius * Math.sin(0));
    for (let i = 1; i <= numberOfSides; i += 1) {
      ctx.lineTo(posX + radius * Math.cos(i * 2 * Math.PI / numberOfSides), posY + radius * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
    ctx.closePath();
    ctx.stroke();
  }

  drawTriangle(ctx) {
    this._drawPoly(ctx, 0, 0, 10, 3);
  }
}

function game(ctx, canvas) {
  let mousePos = {
    x: 0,
    y: 0,
  };

  let mouseOnCanvas = false;

  let spawnerPos = {
    x: Math.random() * CANVAS_WIDTH,
    y: Math.random() * CANVAS_HEIGHT
  };

  let spawnerVel = {
    x: Math.random(),
    y: Math.random()
  };

  let spawnerTimer = 0;

  const bodies = [];
  let deltaTime = 0;
  let previousTime = 0;

  function createEffect(pos) {
    switch (tab) {
      case 0:
        bodies.push(new Ripple(pos));
        for (let i = 0; i < 5; i++) {
          bodies.push(new Circle(pos));
        }
        break;
      case 1:
        if (bodies.length < 100) {
          bodies.push(new Worm(pos));
        }
        break;
      case 2:
        for (let i = 0; i < 3; i++) {
          bodies.push(new Shape(pos));
        }
      default:
        break;
    }
  }

  function updateMousePos(event) {
    mousePos = getMousePos(canvas, event);
    if (mouseOnCanvas) {
      spawnerPos = mousePos;
    }
  }

  document.addEventListener('mousemove', updateMousePos);
  document.addEventListener('touchmove', updateMousePos);
  canvas.addEventListener('mouseenter', () => { mouseOnCanvas = true; });
  canvas.addEventListener('pointerenter', () => { mouseOnCanvas = true; });
  canvas.addEventListener('mouseleave', () => { mouseOnCanvas = false; });
  canvas.addEventListener('pointerleave', () => { mouseOnCanvas = false; });

  function cleanDeadBodies(bodies) {
    const bodiesToClean = []
    for (let i = 0; i < bodies.length; i++) {
      if (bodies[i].dead) {
        bodiesToClean.push(i);
      }
    }
    for (let i = 0; i < bodies.length; i++) {
      if (bodiesToClean.includes(i)) {
        bodies.splice(i ,1);
      }
    }
  }

  function loop(elapsedTime) {
    deltaTime = elapsedTime - previousTime;
    spawnerTimer += deltaTime;

    spawnerPos.x += spawnerVel.x * deltaTime * 0.5;
    spawnerPos.y += spawnerVel.y * deltaTime * 0.5;

    if (spawnerPos.x < 0) {
      spawnerVel.x = -spawnerVel.x;
      spawnerPos.x = 0;
    }
    if (spawnerPos.y < 0) {
      spawnerVel.y = -spawnerVel.y;
      spawnerPos.y = 0;
    }
    if (spawnerPos.x > CANVAS_WIDTH) {
      spawnerVel.x = -spawnerVel.x;
      spawnerPos.x = CANVAS_WIDTH;
    }
    if (spawnerPos.y > CANVAS_HEIGHT) {
      spawnerVel.y = -spawnerVel.y;
      spawnerPos.y = CANVAS_HEIGHT;
    }

    if (spawnerTimer > 20) {
      spawnerTimer = 0;
      createEffect(spawnerPos);
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "white";

    cleanDeadBodies(bodies);

    bodies.forEach(body => body.drawAndUpdate(ctx, deltaTime));

    requestAnimationFrame(loop);
    previousTime = elapsedTime;
  }

  loop(0);
}

function getMousePos(canvas, e) {
  const rect = canvas.getBoundingClientRect(); // abs. size of element
  const scaleX = canvas.width / rect.width;    // relationship bitmap vs. element for X
  const scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

  let mouseX = 0;
  let mouseY = 0;

  if (e.touches && e.touches.length == 1) {
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;
  } else if (e.clientX && e.clientY) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  return {
    x: (mouseX - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: (mouseY - rect.top) * scaleY     // been adjusted to be relative to element
  }
}

export default function Game() {
  const canvasEl = useRef(null);

  useEffect(() => {
    tab = Math.floor(Math.random() * 3);
    const ctx = canvasEl.current.getContext('2d');
    game(ctx, canvasEl.current);
  }, []);

  return (<>
    <div className={styles.container}>
      <div className={styles['top-bar']}>
        <span className={styles.circle} onClick={() => tab = 0}/>
        <span className={styles.circle} onClick={() => tab = 1}/>
        <span className={styles.circle} onClick={() => tab = 2}/>
      </div>
      <canvas ref={canvasEl} height={CANVAS_HEIGHT} width={CANVAS_WIDTH} style={{touchAction: 'none'}}/>
    </div>
  </>);
}
