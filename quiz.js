const inquirer = require('inquirer');
const fs = require('fs').promises;
const tableTennis = require('./topics/pass');

async function read(file) {
  const text = JSON.parse(await fs.readFile(file, 'utf-8'));
  return text;
}

async function start(start, topic) {
  const res = await inquirer.prompt(start);

  const quz = await inquirer.prompt(topic);

  if (topic === tableTennis) {
    const score = Object.values(quz).reduce((acc, el) => acc + +el, 0);
    console.clear();
    console.log(`Игрок ${res.username} набрал ${score} очков`);
  } else {
    const score = Object.values(quz).reduce((acc, el) => acc + +el, 0);
    console.clear();
    console.log(`Игрок ${res.username} набрал ${score} очков`);
  }
}

async function quiz() {
  const prg = process.argv[2];
  const init = await read('./topics/start.json');
  const commonQuestions = await read('./topics/questions.json');
  const theTennis = tableTennis;
  if (prg == 0) {
    await start(init, commonQuestions);
  } else {
    await start(init, theTennis);
  }
}

quiz();
