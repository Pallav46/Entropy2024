import React, { useEffect } from "react";
import './Button.css';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class NoiseButton extends window.window.PIXI.Application {
  constructor(options) {
    super({
      autoStart: false,
      autoResize: true,
      transparent: true,
    });
    _defineProperty(
      this,
      "resize",
      NoiseButton.debounce(
        async () => {
          if (this.setSize()) {
            this.container.removeChildren(
              0,
              this.container.children.length - 1
            );

            this.addGraphics();
            this.createTimeLine();
            this.render();
          }
        },
        this,
        100
      )
    );
    this.options = Object.assign(
      {
        backgroundColor: 0x4875cc,
        backgroundAlpha: 1,
        polygon: "0, 0, 0, 0",
        borderColor: 0x4875cc,
        borderWidth: 0,
        wavesAlpha: 1,
        displacementScale: { x: 30, y: 50 },
        displacementMap: "http://digitalfreepen.com/images/2017/whitenoise.png",
      },
      options
    ); // example of the received polygon string
    // '30, 0, 30, 0'
    this.polygon = this.options.polygon
      .replace(/\s/g, "")
      .split(",")
      .map((el) => {
        const number = el | 0;
        return number > this.options.borderWidth
          ? number - this.options.borderWidth / 2
          : number;
      });
    this.offset = 20;
    this.animate = false;
    return this.createCanvas();
  }
  async createCanvas() {
    this.options.element.classList.add("noise-container");
    this.view.classList.add("noise-canvas");
    this.options.element.appendChild(this.view);
    this.container = new window.PIXI.Container();
    this.stage.addChild(this.container);
    if (this.options.waves) {
      const wavesTexture = await this.loadTexture(this.options.waves);
      this.waves = new window.PIXI.Sprite(wavesTexture);
    }
    this.noiseSprite = window.PIXI.Sprite.fromImage(this.options.displacementMap);
    this.setSize();
    this.addGraphics();
    this.bindEvents();
    this.render();
    this.options.element.classList.add("canvas-ready");
  }
  static debounce(func, context, wait, immediate) {
    let timeout;
    return function () {
      const args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  addGraphics() {
    this.container.addChild(this.getPolygon(true));
    if (this.options.waves) this.drawWaves();
    const rect = new window.PIXI.Graphics();
    rect.beginFill(0, 0);
    rect.drawRect(0, 0, this.width, this.width);
    this.container.addChild(rect);
    this.container.addChild(this.getPolygon());
    this.setMask();
    this.addFilter();
  }
  setMask() {
    let mask = this.getPolygon();
    this.stage.addChild(mask);
    this.container.mask = mask;
  }
  drawWaves() {
    this.waves.alpha = 1 - this.options.wavesAlpha;
    this.waves.y = this.height * this.options.wavesPos.y;
    this.container.addChild(this.waves);
    this.waves.width = this.waves.height = this.width;
  }
  setSize() {
    const parentWidth = this.options.element.offsetWidth;
    const parentHeight = this.options.element.offsetHeight;
    this.width = parentWidth + this.offset * 2;
    this.height = parentHeight + this.offset * 2;
    if (this.oldWidth !== this.width) {
      this.renderer.resize(this.width, this.height);
      this.oldWidth = this.width;
      return true;
    } else return false;
  }
  loadTexture(src) {
    return new Promise((resolve) => {
      const loader = new window.PIXI.loaders.Loader();
      loader.add("waves", src);
      loader.load((loader, resources) => resolve(resources.waves.texture));
    });
  }

  addFilter() {
    this.container.addChild(this.noiseSprite);

    this.noiseFilter = new window.PIXI.filters.DisplacementFilter(this.noiseSprite);
    this.container.filters = [this.noiseFilter];
    this.noiseSprite.position.x = -this.width;
    this.noiseSprite.width = this.width * 3;
    this.noiseFilter.scale.x = 0;
    this.noiseFilter.scale.y = 0;
  }

  createTimeLine() {
    this.timeline = new window.TimelineMax({
      onUpdate: this.render.bind(this),
      paused: true,
      onStart: () => (this.animate = true),
      onComplete: () => (this.animate = false),
    })
      .to(this.noiseFilter.scale, 0.2, {
        x: this.options.displacementScale.x,
        y: this.options.displacementScale.y,
      })
      .fromTo(
        this.noiseSprite,
        0.5,
        { x: -(this.noiseSprite.width * 0.66) },
        { x: 0 },
        "-=.2"
      )
      .to(this.noiseFilter.scale, 0.2, { x: 0, y: 0 }, "-=.2");
  }

  play() {
    if (!this.animate) this.timeline.play(0);
  }

  bindEvents() {
    this.createTimeLine();
    this.options.element.addEventListener("mouseenter", this.play.bind(this));
    window.addEventListener("resize", this.resize.bind(this));
  }

  getPolygon(background) {
    const points = this.polygon;
    const graphics = new window.PIXI.Graphics();
    const width = this.width - this.offset * 2 - this.options.borderWidth;
    const height = this.height - this.offset * 2 - this.options.borderWidth;

    graphics.position.x = this.offset + this.options.borderWidth / 2;
    graphics.position.y = this.offset + this.options.borderWidth / 2;

    const arrayLines = [
      [0, points[0]],
      [points[0], 0],
      [width - points[1], 0],
      [width, points[1]],
      [width, height - points[2]],
      [width - points[2], height],
      [points[3], height],
      [0, height - points[3]],
      [0, points[0]],
    ];

    graphics.lineStyle(this.options.borderWidth, this.options.borderColor);

    graphics.beginFill(
      this.options.backgroundColor,
      background ? 1 - this.options.backgroundAlpha : 0
    );

    for (let i = 0, prevCoords = []; i < arrayLines.length; i++) {
      if (
        prevCoords.length &&
        prevCoords[0] === arrayLines[i][0] &&
        prevCoords[1] === arrayLines[i][1]
      )
        continue;
      if (i === 0) {
        graphics.moveTo(arrayLines[i][0], arrayLines[i][1]);
        prevCoords = arrayLines[i];
        continue;
      }

      prevCoords = arrayLines[i];
      graphics.lineTo(arrayLines[i][0], arrayLines[i][1]);
    }

    graphics.endFill();

    return graphics;
  }
}

const setupExamples = () => {
  new NoiseButton({
    element: document.querySelector(".noise_btn--border"),
    polygon: "30, 0, 30, 0",
    wavesPos: { x: 0, y: 0 },
    borderWidth: 5,
    borderColor: "0xFFFFFF",
    backgroundAlpha: 1,
    wavesAlpha: 0.8,
    waves: "https://cdn.rawgit.com/av-dev/noise-button/930cbd38/Z3hB7It.png",
    displacementMap:
      "https://cdn.rawgit.com/av-dev/noise-button/930cbd38/displace-map.jpeg",
  });
};

const Button = () => {
  useEffect(() => {
    setupExamples();
  }, []);

  return (
    <div className="flex_container">
      <a className="noise_btn noise_btn--border" href="#">
        <strong>Register</strong>
      </a>
    </div>
  );
};

export default Button;
