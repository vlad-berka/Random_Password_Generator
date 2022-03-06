# Random Password Generator
## Vladimir Berka's Homework #3, UW Bootcamp

## Assignment Description
This is a javascript homework assignment for the UW Bootcamp. The goal of the assignment is to create a javascript algorithm from scratch that generates a random password with different character inclusion prompts. HTML and CSS files were provided. Some javascript code was provided to link the returned answer from the generatePassword() function to the HTML button and form on the webpage.

The original user story and acceptance criteria for the assignment is copied to the end of this document.

## Assignment Scope
Create a javascript file that generates a random password based on prompts asking for password length, lower case, upper case, special characters, and numbers. Only the algorithm itself needed to be written.

## Generalized Tasks
- Create prompts asking for password criteria
- Randomly generate characters based on the criteria
- Return the password 

## Summary of Work Completed
A series of `prompts` were added asking for required criteria. Several `alerts` are included during the prompting process for input verification. The challenge was to create a password with "at least one" of each selected requirements, which couldn't be statistically ensured by using a single for loop. If statements were used to add at least one of each of the criteria, and compile a master array to hold all possible other characters. Then a for loop was used to generate the rest of the required characters that weren't included in the initial password creation. The `Math.floor()` and `Math.random() * array.length` methods were used to generate a random number relative to the master array's index - which would return the "random character". Considering the password generation was performed using Arrays, the final password had to be converted into a string using the `array.join("")` method. 

No additional code was added to the index.html file. 
No additional code was added to the styles.css file.

## List of Files
* README.md - This current read me file
* index.html - HTML file for the initial website, provided and not 
* ~./assets/style.css - CSS files for the above noted website in the css subdirectory of the assets directory
* ~./assets/javascript.js - Javascript file containing the password algorithm

# Original Homework Assignment Details

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

Here are the critical requirements necessary to develop a portfolio that satisfies a typical hiring manager’s needs:

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## URL to the deployed webpage

[GitHub Pages Link: https://vlad-berka.github.io/Random_Password_Generator/](https://vlad-berka.github.io/Random_Password_Generator/)

## License
MIT License

Copyright (c) [2022] [Vladimir Berka]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.