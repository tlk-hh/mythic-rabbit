$(function() {
  function getCounterData(obj) {
    var hours = parseInt($('.number-hours', obj).text());
    var minutes = parseInt($('.number-minutes', obj).text());
    var seconds = parseInt($('.number-seconds', obj).text());
    return seconds + (minutes * 60) + (hours * 3600);
  }

  function setCounterData(s, obj) {
    var hours = Math.floor((s % (60 * 60 * 24)) / (3600));
    var minutes = Math.floor((s % (60 * 60)) / 60);
    var seconds = Math.floor(s % 60);

    $('.number-hours', obj).html(hours);
    $('.number-minutes', obj).html(minutes);
    $('.number-seconds', obj).html(seconds);
  }

  var count = getCounterData($(".countdown-container"));

  var timer = setInterval(function() {
    count--;
    if (count == 0) {
      $('.countdown-container').hide();
      return;
    }
    setCounterData(count, $(".countdown-container"));
  }, 1000);
});