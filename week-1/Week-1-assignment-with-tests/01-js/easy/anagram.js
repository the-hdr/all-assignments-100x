/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram (str1, str2)
{
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  const s1 = str1.split("");
  const s2 = str2.split("");

  s1.sort();
  s2.sort();

  if (s1.length != s2.length)
  {
    return false;
  }

  for (var i = 0; i < s1.length; ++i)
  {
    if ((s1[i]) != s2[i])
    {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;