import { Operation, Questions } from './types';
import inquirer from 'inquirer';

const operations: Operation[] = [
  {
    name: 'Addition',
    symbol: '+',
    execute: (a, b) => a + b,
  },
  {
    name: 'Subtraction',
    symbol: '-',
    execute: (a, b) => a - b,
  },
  {
    name: 'Multiplication',
    symbol: '*',
    execute: (a, b) => a * b,
  },
  {
    name: 'Division',
    symbol: '/',
    execute: (a, b) => a / b,
  },
];

const questions: Questions<{ num1: number; num2: number; operation: string }> = [
  {
    type: 'number',
    name: 'num1',
    message: 'Enter the first number:',
  },
  {
    type: 'number',
    name: 'num2',
    message: 'Enter the second number:',
  },
  {
    type: 'list',
    name: 'operation',
    message: 'Select the operation:',
    choices: operations.map((op) => `${op.name} (${op.symbol})`),
  },
];

async function getAnswers() {
  const answers = await inquirer.prompt(questions);
  const operationIndex = parseInt(answers.operation.split(' ')[0], 10) - 1;
  const selectedOperation = operations[operationIndex];
  const result = selectedOperation.execute(answers.num1, answers.num2);
  return result;
}

const result = getAnswers();

console.log(`\nThe result of ${answers.num1} ${selectedOperation.symbol} ${answers.num2} is: ${result}\n`);

export {};
