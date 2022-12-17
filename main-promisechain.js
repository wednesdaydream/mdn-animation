
//使用 Web Animations API 对图像进行动画处理

const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//使用Web Animations API中的 element.animate()方法
    /* animate()方法返回 Animation 对象。这个对象有一个 finished 属性，
    这是一个会在动画播放结束时兑现（fulfilled）的 Promise */
const animation = alice1.animate(aliceTumbling, aliceTiming).finished;

animation
    .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
    .then(() => alice3.animate(aliceTumbling, aliceTiming))

