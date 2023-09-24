/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome (str)
{
  str = str.toLowerCase();
  const n = str.length;
  
  let low = 0, high = n - 1;
  while (low < high)
  {
    const isFirstLetter = /^[a-z]$/.test(str[low]);
    const isSecondLetter = /^[a-z]$/.test(str[high]);

    //console.log (low + ' ' + high + ' : ' + isFirstLetter + ' ' + isSecondLetter);

    if (!isFirstLetter || !isSecondLetter)
    {
      if (!isFirstLetter)
      {
        ++low;
      }

      if (!isSecondLetter)
      {
        --high;
      }
    }
    else
    {
      if (str[low] !== str[high])
      {
        return false;
      }
      ++low, --high;
    }
  }
  return true;
}

module.exports = isPalindrome;