
//@match http://www.wanikani.com/review/session*

if (answerChecker) {
  var evaluate = answerChecker.evaluate;
  var answermap = {};
  answerChecker.evaluate = function(e,t) {
    var res = evaluate(e,t);
    if (res.passed === false) {
      var currItem = $.jStorage.get('currentItem');
      var k = currItem.id + '-' + e;
      answermap[k] = answermap[k] ? answermap[k] + 1 : 1;
      if (answermap[k] >= 3 ) {
        console.log('Leech item cleared');
        res.passed = true;
        res.accurate = true;
      }
    }
    return res;
  };
} else {
  alert('no checker found');
}
