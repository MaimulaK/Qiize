const inquirer = require('inquirer');
const fs = require('fs').promises;
const joke = require('./topics/pass');

async function read(file) {
  const text = JSON.parse(await fs.readFile(file, 'utf-8'));
  return text;
}

async function start(start, topic) {
  const res = await inquirer.prompt(start);

  const quiz = await inquirer.prompt(topic);

  if (topic === joke) {
    console.log('На карте недостато');
  } else {
    const score = Object.values(quiz).reduce(((acc, el) => acc + +el), 0);
    console.clear();
    console.log(`По итогам игры ${res.username} набрал ${score} баллов из 10`);
  }
}

async function quiz() {
  const prg = process.argv[2];
  const init = await read('./topics/start.json');
  const commonQuestions = (await read('./topics/questions.json'));
  const theBestQuestions = joke;
  if (prg == 0) {
    await start(init, commonQuestions);
  } else {
    await start(init, theBestQuestions);
  }
}

quiz();