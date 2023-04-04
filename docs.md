[[file-0.polybot.js:start]]

Function `add_numbers`

The `add_numbers` function is responsible for adding two integer numbers together and returning the result.

Syntax

```rust
fn add_numbers(x: i32, y: i32) -> i32 {
    x + y
}
```

Parameters

- `x`: An integer number representing the first input.
- `y`: An integer number representing the second input.

Return Value

- `i32`: An integer number representing the result of adding `x` and `y` together.

Usage

```rust
let x = 10;
let y = 20;
let result = add_numbers(x, y);
println!("The result of {} + {} is {}", x, y, result);
```

Output

```
The result of 10 + 20 is 30
```

---

Note

You would have to [swizzle](https://v2.docusaurus.io/docs/cli/#docusaurus-swizzle) the components to handle RTL languages as we haven't built a way for translations into Docusaurus 2, but we'll take into account RTL languages when we build it.

The `country` data is returned in the format shown below. Make sure to parse it correctly.

![enter image description here](https://i.stack.imgur.com/cWI9H.png)

[[file-0.polybot.js:end]]

[[file-1.polybot.js:start]]



[[file-1.polybot.js:end]]