# Function: add_numbers

The `add_numbers` function is a simple function that takes two integer arguments and returns their sum as an integer.

### Syntax

```rust
fn add_numbers(x: i32, y: i32) -> i32
```

### Parameters

- `x`: an integer parameter representing the first number to be added.
- `y`: an integer parameter representing the second number to be added.

### Return Value

- An integer value representing the sum of `x` and `y`.

### Example

```rust
fn main() {
    let x = 5;
    let y = 10;
    let result = add_numbers(x, y);
    println!("The sum of {} and {} is {}", x, y, result); // The sum of 5 and 10 is 15
}
```

### Notes

- This function is very simple and only intended to demonstrate basic Rust syntax.
- The function name `add_numbers` is descriptive and conveys the purpose of the function in a clear manner.
- The function takes two parameters of type `i32`, which is the standard data type for integers in Rust.
- The function uses the `+` operator to add the two parameters and return their sum as an integer.