# Documentation for Code Functions

In this documentation, we will explain the usage of each function, its input variables, return values and how to use it in practice.


## Function add_numbers
The 'add_numbers' function takes two i32 numbers x and y and returns the result of the sum of these numbers.
### Input
- x: an i32 number.
- y: an i32 number.
### Output
- The 'add_numbers' function returns an i32 number which is the sum of the input numbers x and y.
### Example usage
```rust
let result = add_numbers(5, 10);
println!("The result of add_numbers function is: {}", result);
```

## Function factorial
The 'factorial' function calculates the factorial of a given n number.
### Input
- n: an u32 number for which you want to calculate the factorial. 
### Output
- The 'factorial' function returns an u32 number which represents the factorial of the input n.
### Example usage
```rust
let result = factorial(5);
println!("The result of factorial function is: {}", result);
```

## Function find_max
The 'find_max' function searches and returns the maximum number in a given vector.
### Input
- vec: a Vector of i32 numbers.
### Output
- The 'find_max' function returns an Option<i32> which may or may not have a value. If the vector is empty, it returns None. If the vector has elements, it returns a Some(i32) which represents the maximum value in the vector.
### Example usage
```rust
let vec = vec![1, 5, 8, 3, 9, 2];
let result = find_max(vec);
match result {
    Some(val) => println!("The maximum value in the vector is: {}", val),
    None => println!("The vector is empty"),
}
```

## Function is_palindrome
The 'is_palindrome' function checks whether the given string is palindrome or not.
### Input
- s: a &str string which needs to be checked.
### Output
- The 'is_palindrome' function returns a boolean value true if the given string is palindrome or false if not.
### Example usage
```rust
let input_string = "madam";
let result = is_palindrome(input_string);
if result {
    println!("The input string {} is a palindrome", input_string);
} else {
    println!("The input string {} is not a palindrome", input_string);
}
```

## Function sort_strings
The 'sort_strings' function sorts a given vector of strings in alphabetical order.
### Input
- vec: a vector of strings.
### Output
- The 'sort_strings' function returns a sorted vector of strings (Vec<String>).
### Example usage
```rust
let input_vec = vec!["dog", "cat", "apple", "ball"];
let result_vec = sort_strings(input_vec);
println!("The sorted vector is: {:?}", result_vec);
```

That's all folks!