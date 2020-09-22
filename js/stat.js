"use strict";

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 20;
const FORM_GAP = 10;
const FONT_GAP = 50;
const BAR_GAP = 30;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = -150;
const barWidth = 40;
const TITLE = `Ура вы победили!`;
const DESCRIPTION = `Список результатов: `;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};
const getTitle = (ctx, text, description) => {
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillStyle = `#000`;
  ctx.fillText(text, CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText(description, CLOUD_X + GAP, CLOUD_Y + GAP * 2);
};
const getCollor = (name) => {
  return name === `Вы`
    ? `rgba(255, 0, 0, 1)`
    : `hsla(237, ${Math.round(Math.random() * 100)}%, 50%, 1)`;
};
window.renderStatistics = (ctx, players, times) => {
  renderCloud(ctx, CLOUD_X + FORM_GAP, CLOUD_Y + FORM_GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);
  getTitle(ctx, TITLE, DESCRIPTION);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000000`;
    ctx.fillText(
        players[i],
        CLOUD_X + GAP + (TEXT_WIDTH + barWidth) * i,
        CLOUD_HEIGHT - FONT_GAP / 2
    );

    ctx.fillText(
        times[i].toFixed(),
        CLOUD_X + GAP + (TEXT_WIDTH + barWidth) * i,

        (BAR_HEIGHT * times[i]) / maxTime + CLOUD_HEIGHT - TEXT_WIDTH
    );
    ctx.fillStyle = getCollor(players[i]);
    ctx.fillRect(
        CLOUD_X + GAP + (TEXT_WIDTH + barWidth) * i,
        CLOUD_HEIGHT - BAR_GAP,
        barWidth,
        (BAR_HEIGHT * times[i]) / maxTime
    );
  }
};
