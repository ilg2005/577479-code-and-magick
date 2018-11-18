'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_SPACE = 50;
var SPACE = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloudText = function (ctx, msg, x, y, align) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.textAlign = align;
  ctx.fillText(msg, x, y);
};

var renderStatsColumn = function (ctx, i, times) {
  var maxTime = Math.max.apply(null, times);
  var barHeight = BAR_MAX_HEIGHT * times[i] / maxTime;
  ctx.fillRect(CLOUD_X + BAR_SPACE + (BAR_WIDTH + BAR_SPACE) * i, CLOUD_HEIGHT - 3 * SPACE - barHeight, BAR_WIDTH, barHeight);


};

var renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SPACE, CLOUD_Y + SPACE, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(255, 255, 255, 1)');
  renderCloudText(ctx, 'Ура вы победили!', CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + 2 * SPACE, 'center');
  renderCloudText(ctx, 'Список результатов:', CLOUD_X + SPACE, CLOUD_Y + 4 * SPACE, 'left');
  renderStatsColumn(ctx, 1, times);
};