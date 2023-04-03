## Function: add_numbers

The `add_numbers` function is used to add two integers `x` and `y`. It takes two parameters: `x` and `y` of `i32` type and returns the addition of `x` and `y` (also of `i32` type).

### Syntax

```rust
fn add_numbers(x: i32, y: i32) -> i32
```

### Parameters

- `x` - an integer value of `i32` type.
- `y` - an integer value of `i32` type.

### Return Value

- An integer value of `i32` type representing the sum of `x` and `y`.

## Swizzling Components

To handle swizzling components in Docusaurus 2, follow these steps:

1. Open the terminal
2. Navigate to the root directory of your project
3. Run the command `docusaurus-swizzle` to start swizzling components.
4. Follow the prompts to complete the swizzling process.

Please note that unfortunately, Docusaurus 2 does not currently support translations. However, we plan to take into account RTL languages when we build it. 

### Country Data

When using the country data returned, make sure to parse it correctly. The country data has the following format:

```
{
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "capital": "Kabul",
  "region": "Asia",
  "subregion": "Southern Asia",
  "population": 27657145,
  "timezones": [
    "UTC+04:30"
  ]
}
```

Please note that the `name` field is a string that represents the name of the country, and should be parsed accordingly.