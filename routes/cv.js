let express = require('express');
let router = express.Router();

router.get('/wrike', function (req, res) {
  let projects = [
    {
      name: "Crocodile Online Game",
      client: "Lipton",
      used_technology: "Flash platform, ActionScript 3.0",
      my_role: "Client-side Programmer",
      team_size: "3 people",
      platforms: "Web Social Networks - Facebook, VK, OK",
      project_description: "Rules: One player should draw word generated by app. Other player should guess what word has imaged. 2.8 million unique register gamers in social networks!",
      what_i_have_done: [
        "GUI programming",
        "OOP architecture",
        "Game logic"
      ],
      duration: "about 6 months"
    },
    {
      name: "Crocodile Online Game1",
      client: "Lipton",
      used_technology: "Flash platform, ActionScript 3.0",
      my_role: "Client-side Programmer",
      team_size: "3 people",
      platforms: "Web Social Networks - Facebook, VK, OK",
      project_description: "Rules: One player should draw word generated by app. Other player should guess what word has imaged. 2.8 million unique register gamers in social networks!",
      what_i_have_done: [
        "GUI programming",
        "OOP architecture",
        "Game logic"
      ],
      duration: "about 6 months"
    }
  ];
  res.render('cv', {
    title: 'CV for Wrike',
    styles: '<link rel="stylesheet" href="/css/cv.css">',
    projects,
    layout: false
  });
});

module.exports = router;