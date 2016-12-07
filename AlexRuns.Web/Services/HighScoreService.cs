using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AlexRuns.Web.Services
{
    using LiteDB;
    using Models;

    public class HighScoreService
    {
        public IEnumerable<HighScore> GetHighScores(int count = 10)
        {
            var scores = new List<HighScore>();

            try
            {
                using (var db = new LiteDatabase("C:/DevPersonal/Games/craftyjs/AlexRunsForever/AlexRuns.Web/App_Data/scores.db"))
                {
                    var scoresCollection = db.GetCollection<HighScore>("HighScore");
                    scores = scoresCollection.FindAll().OrderBy(hs => hs.Score).ToList();
                }
            }
            catch(Exception ex)
            {

            }

            return scores;
        }

        public void AddHighScore(HighScore score)
        {
            try
            {
                if (score != null)
                {
                    using (var db = new LiteDatabase("C:/DevPersonal/Games/craftyjs/AlexRunsForever/AlexRuns.Web/App_Data/scores.db"))
                    {
                        var scoresCollection = db.GetCollection<HighScore>("HighScore");

                        scoresCollection.Insert(score);
                    }
                }
            }
            catch(Exception ex)
            {

            }
        }

        public void DeleteHighScore(int id)
        {
            try
            {
                using (var db = new LiteDatabase("C:/DevPersonal/Games/craftyjs/AlexRunsForever/AlexRuns.Web/App_Data/scores.db"))
                {
                    var scoresCollection = db.GetCollection<HighScore>("HighScore");

                    scoresCollection.Delete(id);
                }
            }
            catch(Exception ex) { }
        }
    }
}