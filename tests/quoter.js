// 예제 실행용, 나중에 지우자

var quotes = require('./quotes.json');

exports.getRandomOne = function() {
  var totalAmount = quotes.length;
  var rand = Math.ceil(Math.random() * totalAmount);
  return quotes[rand];
}
