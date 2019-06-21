var panel = $("#trivia-game");

var questions = [{
  question: "' Hab SoSlI' Quch! ' is a Klingon phrase means what.",
  answers: ["our mother has a smooth forehead!", "Hello, nice weather where having.", "Captian, ive lost my marbles.", "Phasers set to stun."],
  correctAnswer: "our mother has a smooth forehead!"
}, {
  question: "In Epsiode 164, Data builds a android daughter. What was her name?",
  answers: ["Tasha", "Lar", "Almak", "Susie"],
  correctAnswer: "Lar"
}, {
  question: "How many crew can the Enterpise-D hold?",
  answers: ["130", "2003", "1,014", "9000"],
  correctAnswer: "1,014"
}, {
  question: "One letter is all it takes to discribe this omnipotent lifeform.",
  answers: ["X","Z", "Q", "A"],
  correctAnswer: "Q"
}, {
  question: "This device can make any food or beverage with the right programing.",
  answers: ["3D-printer", "Phaser", "Replicator", "Javascript"],
  correctAnswer: "Repilcator"
}, {
  question: "Deanna Troi is half human, half-''. ",
  answers: ["Bolian", "Betazoid", "Borg", "Bosnian"],
  correctAnswer: "Betazoid"
}, {
  question: "Wesley Crusher is played by which actor.",
  answers: ["Patrick Stewart", "Brent Spiner", "Wil Wheaton", "LeVar Burton"],
  correctAnswer: "Wil Wheaton"
}, {
  question: "Woopie Goldberg played this wise bartender.",
  answers: ["Shelby", "Beverly", "Argyle", "Guinan"],
  correctAnswer: "Guinan"
}, {
  question: "Where do the Borg eat fast food?",
  answers: ["At the local Borger King!","At the local Borger King!","At the local Borger King!", "At the local Borger King!", "At the local Borger King!"],
  correctAnswer: "At the local Borger King!"
}];

var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() === questions[8].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();
    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() === questions[9].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
      });

      this.result();
  },
    


  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
