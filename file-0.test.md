## Function `add_numbers`

The `add_numbers` function takes two integer values `x` and `y` as arguments and returns the sum of the values.

```rust
fn add_numbers(x: i32, y: i32) -> i32 {
  x + y
}
```

## Handling Right-to-Left Languages

To handle Right-to-Left languages in Docusaurus 2, you will need to swizzle the components. Unfortunately, there is no built-in way for translations into Docusaurus 2 at the moment. However, we will take into account RTL languages when we build it.

## Parsing Country Data

When working with the JSON data returned by APIs, it is important to parse the data correctly. The country data returned by the API has the following format:

```
{
  "name": "Afghanistan",
  "code": "AFG",
  "population": 27657145,
  "region": "Asia",
  "subregion": "Southern Asia"
}
```

Please ensure that you correctly parse the `name` field, as it contains the name of the country, rather than just the `key`, which is an integer.

```
 {
    "name": string,
    "code": string,
    "population": number,
    "region": string,
    "subregion": string
 }
```