# Password Generator
This weeks challenge was to create an application that an employee could use to generate a random password based on criteria they've selected. 

## What did I add
For this challenge, all the changes I worked on were in Javascript. One of the first things I did was make variables that I knew I was going to need. The first variable I made was for prompts that would require a yes or no answer. After that I had to make sure I had 4 arrays for all the choices that an employee could choose. I then made a final array that was empty so I can add the previous arrays in it , if the employee chose those criteria. 

After I created my arrays, I knew I needed a function to generate my password. In that function I made prompts for all the criteria I needed answers for.  I also needed to ensure that the responses put in the prompt corresponding to my choices array. So I made while loops for each criteria to ensure that if one of the choices in array was not chosen it would let the employee know that the criteria was not met and to choose again. I also had to validate and make sure that the employee chose yes for at least one of the prompts. If they did not choose yes for at least one prompt it sent them back to the beginning of all the prompts. 

Following that, I created 4 if statements that would add each of the criteria that the employee said yes to, in the empty array that we made in the beginning of my javascript code. 

I added an additional function to get the characters from the criteria that was selected. Then after that I added a for loop to add those criteria to our password. 

The last thing that was needed was to write the password onto the page and to add an event listener to generate the password. So I added a function to write the password onto the page and added an event listener that listens for a click and runs the function that writes the password onto the page. 

## What I learned 
I really got a chance to understand how useful for loops are.  I also got to become familiar with event listeners and become more confident with my if statements. 


## Screenshot of page and links

![alt text](/screenshot.png "Password")

https://jujub39.github.io/challenge-3/
 


