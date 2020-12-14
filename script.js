$(function() {
  
  /** Daten für Timer*/
  function getCounterData(obj) {
    var hours = parseInt($('.number-hours', obj).text());
    var minutes = parseInt($('.number-minutes', obj).text());
    var seconds = parseInt($('.number-seconds', obj).text());
    
    return seconds + (minutes * 600) + (hours * 3600);
  }

  /**Startwerte */
  function setCounterData(s, obj) {  

    
    var hours = Math.floor((s % (60 * 60 * 24)) / (3600));
    var minutes = Math.floor((s % (60 * 60)) / 60);
    var seconds = Math.floor(s % 60);
    
    
    $('.number-hours', obj).html(hours);
    $('.number-minutes', obj).html(minutes);
    $('.number-seconds', obj).html(seconds); 
   
  }

  /** eigentlicher Countdown */
  if (localStorage.getItem('counter') != null){
    var count = localStorage.getItem("counter");
  }else{
    var count = 7200;
  }

  var timer = setInterval(function() {
    console.log(count);
    localStorage.setItem("counter",  count);
    if (count == 0) {
      $('.countdown-container').hide();
      return;
    }
    count--;    
    setCounterData(count, $(".countdown-container"));
  }, 1000);
});
