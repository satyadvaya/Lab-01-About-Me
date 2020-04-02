/* eslint-disable no-console */
// checks if the answer is right (checks if the input is 'Yes' or 'yes')
import isYes from './is-yes.js';

// Reference needed DOM elements
const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('quiz-result');

// Initialization (setup, state variables)†

// Event Handlers
function launchQuiz() {
    let correctAnswers = 0; // initializing the state of correctAnswers 
    let name = ''; // ALARM BELLS go off: this will CHANGE

  // show the user a message. only options is 'OK'
    alert('hello from app.js');

  // returns: true for 'OK', and false for 'Cancel'
    const confirmed = confirm('Are you sure about that?');
    if (confirmed === false) {
        return; // return BREAKS a function's execution
    }

  // example of what an empty string is
  // eslint-disable-next-line no-unused-vars
    const emptyString = '';


  // returns string entered by user, unless they cancel
  // in which case returns null
    const firstName = prompt("What's your first name?");
    name = firstName;
  // short hand for above:
  // name += firstName;

    const lastName = prompt("What's your last name?");
    name = name + ' ' + lastName;
  // short hand for above:
  // name += lastName;

  // get the text response from the user
    const isAwesome = prompt('Is JavaScript the most awesome language (Yes/No)?');

  // convert to boolean
  // isYes takes in a string and tells us if the string is counts as a YES
  // y Y yes YES yasss
    if (isYes(isAwesome) === true) {
        correctAnswers++;
    }

    let response = 'Your name is ' + name;

    if (correctAnswers >= 1) {
        response += ' and you know your JavaScript!';
    } else {
        response += ' and you need to brush up on getting to know JavaScript';
    }

    result.textContent = response;
}

quizButton.addEventListener('click', launchQuiz);