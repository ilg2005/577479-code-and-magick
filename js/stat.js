'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_TEXT_FONT = '16px PT Mono';
var CLOUD_TEXT_COLOR = 'rgba(0, 0, 0, 1)';
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var MAIN_PLAYER_NAME = 'Вы';
var BAR_COLOR_FOR_MAIN_PLAYER = 'rgba(255, 0, 0, 1)';
var BAR_INDENTATION = 50;
var INDENTATION = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloudText = function (ctx, msg, x, y, align) {
  ctx.font = CLOUD_TEXT_FONT;
  ctx.fillStyle = CLOUD_TEXT_COLOR;
  ctx.textAlign = align;
  ctx.fillText(msg, x, y);
};

var setBarHeight = function (ctx, i, times) {
  var maxTime = Math.max.apply(null, times);
  return BAR_MAX_HEIGHT * times[i] / maxTime;
};

var setBarColor = function (ctx, i, names) {
  if (names[i] === MAIN_PLAYER_NAME) {
    ctx.fillStyle = BAR_COLOR_FOR_MAIN_PLAYER;
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
  }
};

var renderStatsColumn = function (ctx, i, names, times) {
  var barHeight = setBarHeight(ctx, i, times);
  var barX = CLOUD_X + BAR_INDENTATION + (BAR_WIDTH + BAR_INDENTATION) * i;
  var barY = CLOUD_HEIGHT - 3 * INDENTATION - barHeight;
  ctx.fillStyle = setBarColor(ctx, i, names);
  ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);

  renderCloudText(ctx, names[i], barX, CLOUD_HEIGHT - INDENTATION);
  renderCloudText(ctx, Math.round(times[i]), barX, CLOUD_HEIGHT - barHeight - 4 * INDENTATION);
};

var renderStatsColumns = function (ctx, names, times) {
  for (var i = 0; i < names.length; i++) {
    renderStatsColumn(ctx, i, names, times);
  }
};

var renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + INDENTATION, CLOUD_Y + INDENTATION, CLOUD_SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  renderCloudText(ctx, 'Ура вы победили!', CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + 2 * INDENTATION, 'center');
  renderCloudText(ctx, 'Список результатов:', CLOUD_X + INDENTATION, CLOUD_Y + 4 * INDENTATION, 'left');
  renderStatsColumns(ctx, names, times);
};
