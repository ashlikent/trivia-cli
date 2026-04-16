const { select, confirm } = require("@inquirer/prompts");
const questions = require("./questions");

async function startGame() {
  console.log("🎮 Welcome to the Trivia CLI Game!");
  console.log("Answer the questions and see your final score.");
  console.log("-----------------------------------");

  const wantsToPlay = await confirm({
    message: "Would you like to start the quiz?"
  });

  if (!wantsToPlay) {
    console.log("Maybe next time!");
    return false;
  }

  return true;
}

async function askQuestion(questionObj) {
  const answer = await select({
    message: questionObj.question,
    choices: questionObj.choices.map(choice => ({
      name: choice,
      value: choice
    }))
  });

  if (answer === questionObj.answer) {
    console.log("✅ Correct!");
    return true;
  } else {
    console.log("❌ Incorrect!");
    return false;
  }
}

async function run() {
  const started = await startGame();

  if (!started) return;


if (!questions.length) {
  console.log("No questions available.");
  return;
}

  let score = 0;
  const startTime = Date.now();

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    console.log(`\nQuestion ${i + 1} of ${questions.length}`);
    const isCorrect = await askQuestion(question);
    if (isCorrect) {
      score++;
    }
  }

  if (!questions.length) {
    console.log("No questions available.");
    return;
  }

  const endTime = Date.now();
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
  showResults(score, questions.length, timeTaken);
  
}

function showResults(score, totalQuestions, timeTaken) {
  console.log("\n======================");
  console.log("🎮 Game Over!");
  console.log("======================");

  if (score === totalQuestions) {
    console.log("🔥 Perfect score! Amazing job!");
  } else if (score >= totalQuestions / 2) {
    console.log("👍 Nice work!");
  } else {
    console.log("💡 Keep practicing!");
  }

  console.log(`Final Score: ${score}/${totalQuestions}`);
  console.log(`Time Taken: ${timeTaken} seconds`);
}
run();