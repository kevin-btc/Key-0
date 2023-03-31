The `add_numbers` function takes two arguments `x` and `y`, both of type `i32` and returns their sum as an `i32`.

### Function Signature
```rust
fn add_numbers(x: i32, y: i32) -> i32
```

### Arguments
- `x: i32` - first integer argument
- `y: i32` - second integer argument

### Return
- `i32` - the sum of `x` and `y`

### Example
```rust
fn main() {
  let sum = add_numbers(3, 5);
  println!("Sum: {}", sum);
}
```

Output:
```
Sum: 8
```

You can call the `add_numbers` function with two integer arguments `x` and `y` to get their sum. In the example above, we are passing `3` and `5` as arguments to the function and getting their sum as `8`.