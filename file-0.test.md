## Function: `add_numbers`

### Description

The `add_numbers` function takes two arguments `x` and `y`, both of which are of the `i32` data type, and returns their sum, also of the `i32` data type.

### Syntax

```rust
fn add_numbers(x: i32, y: i32) -> i32
```

### Parameters

- `x` : an `i32` value that represents the first argument to be added.
- `y` : an `i32` value that represents the second argument to be added.

### Return Value

The `add_numbers` function returns the sum of `x` and `y` as an `i32` value.

### Examples

```rust
assert_eq!(add_numbers(2, 3), 5);
assert_eq!(add_numbers(-10, 15), 5);
assert_eq!(add_numbers(0, 0), 0);
```