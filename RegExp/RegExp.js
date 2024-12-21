
// JavaScript Regular Expressions
 
// A regular expression is a sequence of characters that forms a search pattern.
// The search pattern can be used for text search and text replace operations.

// Syntax
// /pattern/modifiers


// Regular Expression Modifiers

//      Modifier	            Description
//      i	                    Perform case-insensitive matching	
//      g	                    Perform a global match (find all)	
//      m	                    Perform multiline matching	
//      d	                    Perform start and end matching (New in ES2022)


// Regular Expression Patterns

//      Expression	        Description	Try it
//      [abc]	            Find any of the characters between the brackets	
//      [0-9]	            Find any of the digits between the brackets	
//       (x|y)	            Find any of the alternatives separated with |

// Metacharacters are characters with a special meaning
//      Metacharacter	        Description
//      ^	                    Start of a string
//      $	                    End of a string
//      .	                    Any character (except newline)
//      \w	                    Word character (alphanumeric plus underscore)
//      \d	                    Find a digit	
//      \s	                    Find a whitespace character	
//      \b	                    Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
//      \uxxxx	                Find the Unicode character specified by the hexadecimal number xxxx

// Quantifiers define quantities
//      Quantifier	        Description
//      n+	                Matches any string that contains at least one n
//      n*	                Matches any string that contains zero or more occurrences of n
//      n?	                Matches any string that contains zero or one occurrences of n
