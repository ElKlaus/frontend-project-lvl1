#!/usr/bin/env node
import getName from './cli.js';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');

  return getName();
};

export default sayHello;
