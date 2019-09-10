console.log('Tema algoritmi - 05.09.2019');



// 0. Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
printFizzBuzz(100);

function printFizzBuzz (c) {
    console.log('Exercitiul 0:');
    console.log('   Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". ');

    for(let i = 1; i <= c; i++) {
        
        if (i % 15 === 0) {
            console.log('Number is: FizzBuzz');
            
        } else if (i % 3 === 0) {
            console.log('Number is: Fizz');
            
        } else if (i % 5 === 0){
            console.log('Number is: Buzz');
            
        } else {
            console.log('Number is', i);
        }
    }
    console.log('===========================');
}


// 1. Sa se scrie o functie care scapa de duplicatele dintr-un array
const dupeArray = [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 8, 8];

console.log('Exercitiul 1:');
console.log('   Sa se scrie o functie care scapa de duplicatele dintr-un array');
console.log('Array-ul este: ', dupeArray);

function getDedupedArray(arr) {
    const uniqueNumbers = [];

    return arr.filter((element) => {
        if (uniqueNumbers.includes(element)) {
            return false;
        }
        uniqueNumbers.push(element);
        return true;
    });

}

console.log('Deduped array: ', getDedupedArray(dupeArray)); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log('===============================');




/* 2. Choose a number, reverse its digits and add it to the original. If the sum is not a palindrome (which means, it is not the same number from left to right and right to left), repeat this procedure.

195 (initial number) + 591 (reverse of initial number) = 786
786 + 687 = 1473
1473 + 3741 = 5214
5214 + 4125 = 9339 (palindrome)

In this particular case the palindrome 9339 appeared after the 4th addition. This method leads to palindromes in a few steps for almost all of the integers.

Write a function called reverseAndAdd that will take an integer as an input and return a string formatted as number of additions + palindrome number found. In the above example, reverseAndAdd(195) should produce the string "4 9339", with "4" being the number of tries and "9339" the palindrome number.

*/
console.log('Exercitiul 2:');
    console.log(`   Choose a number, reverse its digits and add it to the original. If the sum is not a palindrome (which means, it is not the same number from left to right and right to left), repeat this procedure.
    195 (initial number) + 591 (reverse of initial number) = 786
    786 + 687 = 1473
    1473 + 3741 = 5214
    5214 + 4125 = 9339 (palindrome)

    In this particular case the palindrome 9339 appeared after the 4th addition. This method leads to palindromes in a few steps for almost all of the integers.

    Write a function called reverseAndAdd that will take an integer as an input and return a string formatted as number of additions + palindrome number found. In the above example, reverseAndAdd(195) should produce the string "4 9339", with "4" being the number of tries and "9339" the palindrome number.`);
    

function reverseAndAdd(num) {
   
    let i = 0;
    do {
        var reverseNum = num.toString().split('').reverse().join('');
        console.log('Number is: ', num);
        
        console.log('Reversed number is: ', reverseNum);
        var palindrome = false;
        if(num === Number(reverseNum)) {
            console.log('Numarul este palindrom');
            var palindrome = true;
            break
        }
        var num = Number(num) + Number(reverseNum);
        i++;
 
    } while (palindrome !== true);

    console.log(i, num);
    return `${i} ${num}`;
} 


console.log("Reverse and Add: ", reverseAndAdd(195) === '4 9339');
console.log('===============================');




// 3. Find the shortest word(s) in a sentence and return alphabetically ordered and lowercase.  Ie. "I have a cat" return "a i", exclude special characters.

console.log('Exercitiul 3:');
console.log('   Find the shortest word(s) in a sentence and return alphabetically ordered and lowercase.  Ie. "I have a cat" return "a i", exclude special characters.');

function shortestWords(sentence) {
    console.log('Sentence is: ', sentence);
    
    const wordsSentence = sentence.toLowerCase().match(/[a-z]+/g);
    console.log('Words from sentence are: ', wordsSentence);
    const sortedWords = wordsSentence.sort(function (firstWord, secondWord) {
        return firstWord.length - secondWord.length;
    });
    console.log('Sorted words by length are: ', sortedWords);
    const longestWordArr = sortedWords.filter(function (word) {
        return word.length === sortedWords[0].length;
    });
    console.log('The list of shortest words in alphabetical order is: ', longestWordArr.sort().join(' '));
    
    return `${longestWordArr.sort().join(' ')}`;
    
    
  
}

console.log('Shortest words: ', shortestWords('I have a cat.') === 'a i');
console.log('===============================');

