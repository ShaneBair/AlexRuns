using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AlexRuns.Web.Controllers.Api
{
    using Models;
    using Services;

    public class HighScoresController : ApiController
    {
        // GET: api/HighScores
        [HttpGet]
        public IEnumerable<HighScore> Get()
        {
            var highscoreService = new HighScoreService();

            return highscoreService.GetHighScores();
        }

        // POST: api/HighScores
        [HttpPost]
        public void Post([FromBody]HighScore score)
        {
            var highscoreService = new HighScoreService();

            highscoreService.AddHighScore(score);
        }

        // PUT: api/HighScores/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/HighScores/5
        public void Delete(int id)
        {
            var highscoreService = new HighScoreService();

            highscoreService.DeleteHighScore(id);
        }
    }
}
