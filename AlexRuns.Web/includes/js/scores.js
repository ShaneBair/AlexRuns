var scores = {
  rootUrl: '/api/highscores/',
  previousName: '',

  postScore: function(score) {
    var name = prompt("Please enter your name for the leaderboard", scores.previousName);
    scores.previousName = name;

    $.ajax({
        type: "POST",
        url: this.rootUrl + "post",
        data: {
          'Name': name,
          'Score': score
        },
        success: function(msg){
            scores.getScores();
       },
       error: function(){
            console.log("oh noes");
       }
     });
  },

  getScores: function() {
    $.ajax({
        type: "GET",
        url: this.rootUrl + "get",
        success: function(resultScores){
            console.log(resultScores);
            var resultHtml = "";
            if(resultScores){
              resultHtml += "<ul>";
              _.forEach(resultScores, function(highScore) {
                resultHtml += '<li><strong>' + highScore.Name + '</strong> - ' + highScore.Score + '</li>';
              });
              resultHtml += "</ul>";
            }
            $('#highscores').html(resultHtml);
       },
       error: function(){
            console.log("oh noes");
       }
     });
  }
};

$(document).ready(function(){
  scores.getScores();
});
