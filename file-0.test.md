# Documentation for add_numbers function
This function is designed to take two arguments and return their sum as an output in i32 format.

## Syntax
```rust
fn add_numbers(x: i32, y: i32) -> i32
```

## Parameters
- ***x: i32*** : This represents the first number to be added.
- ***y: i32*** : This represents the second number to be added.

## Return Value
- This function returns an output in **i32** format which represents the sum of the values given in the input.

## Example

```rust
let x = 3;
let y = 5;
let sum = add_numbers(x, y);
println!("The sum of {} and {} is {}", x, y, sum);
```

### Output
```rust
The sum of 3 and 5 is 8
```

## Usage

This function can be called whenever there is a need to perform addition for two integer values. It can be used in different scenarios such as adding numbers for mathematical calculations or for generating the sum of values for different variables in your code.

## Notes

This function has been implemented with the assumption that the inputs being given will always be in **i32** format. Any other format will not produce the desired output. In addition, the function does not handle overflow or underflow errors, so it is advised to make sure you are adding numbers that will fit within the constraints of an **i32** data type.