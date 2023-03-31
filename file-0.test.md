## **add_numbers**
---

This function accepts two integer values (`x` and `y`) and returns their sum. 

#### Function signature
```rust
fn add_numbers(x: i32, y:i32) -> i32
```

#### Arguments
- `x`: An integer value that represents the first number.
- `y`: An integer value that represents the second number.

#### Return Value
- The function returns an integer that represents the sum of the two provided numbers (`x` and `y`).

---

### Examples

```
assert_eq!(add_numbers(2, 3), 5);
assert_eq!(add_numbers(-1, 1), 0);
```

---

### Usage

```rust
fn main() {
    let result = add_numbers(2, 3);
    println!("Result: {}", result);
}
```

---