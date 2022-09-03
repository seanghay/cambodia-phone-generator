import './normalize.css';
import './main.css'
import 'milligram'
import { networkOperators, PhoneNumberPrefixesWithOperators } from 'network-operators'
import { generateByPrefix, generateByOperator } from '../src/main'

const $ = {
  operators: document.querySelector('#operators'),
  prefix: document.querySelector('#prefix'),
  generate: document.querySelector('#generate'),
  value: document.querySelector("#value")
}

$.operators.innerHTML = `<option value="">Any</option>` + networkOperators()
  .map(operator => `<option value="${operator}">${operator}</option>`)
  .join('');


function setPrefix(values) {
  $.prefix.value = '';
  $.prefix.innerHTML = `<option value="">Any</option>` + values
    .map(item => `<option value="${item}">${item}</option>`)
    .join('');
}

$.operators.addEventListener('change', (e) => {
  invalidate();

  gen()
})

$.prefix.addEventListener('change', (e) => {
  gen()
})

function invalidate() {
  const v = $.operators.value;
  const prefixes = Object.entries(PhoneNumberPrefixesWithOperators).filter(entry => !v || entry[1].operator === v)
    .map(entry => entry[0]);
  setPrefix(prefixes)
}

function gen() {
  const operator = $.operators.value || undefined;
  const prefix = $.prefix.value;
  const result = prefix ? generateByPrefix(prefix) : generateByOperator(operator)
  $.value.textContent = result
}


$.generate.addEventListener('click', () => {
  gen()
})

invalidate();


gen()