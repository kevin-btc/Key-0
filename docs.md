[[file-0.polybot.js:start]]

## Function to Add Two Numbers

The `add_numbers` function accepts two integer values `x` and `y` as arguments and returns their sum.

```rust
fn add_numbers(x: i32, y: i32) -> i32 {
    x + y
}
```

## Swizzling Components

To handle RTL (Right-to-Left) languages in Docusaurus 2, you need to swizzle the components. You can find more information about swizzling components in the [Docusaurus documentation](https://v2.docusaurus.io/docs/cli/#docusaurus-swizzle).

## Parsing Country Data

When working with country data, make sure to parse it correctly. The country data returned has the following format:

```
{
  key: string,
  name: string,
  topLevelDomain: string[],
  alpha2Code: string,
  alpha3Code: string,
  callingCodes: string[],
  capital: string,
  altSpellings: string[],
  region: string,
  subregion: string,
  population: number,
  latlng: number[],
  demonym: string,
  area: number,
  gini: number,
  timezones: string[],
  borders: string[],
  nativeName: string,
  numericCode: string,
  currencies: Currency[],
  languages: Language[],
  translations: Translations,
  flag: string,
  regionalBlocs: RegionalBloc[],
  cioc: string
}
```

Note that the `name` field contains the full name of the country, and make sure you are parsing this field in your code.

[[file-0.polybot.js:end]]

[[file-1.polybot.js:start]]

## Function Definition

The function `factorial(n: u32) -> u32` takes an unsigned 32-bit integer `n` as input and returns its factorial as an unsigned 32-bit integer. It uses recursion to calculate the factorial.

## Parameters

`n`: An unsigned 32-bit integer for which we want to find the factorial.

## Return Value

The function returns an unsigned 32-bit integer, which is the factorial of the input `n`.

## Example

```Rust
fn main() {
   let n = 5;
   let fact = factorial(n);
   println!("The factorial of {} is {}", n, fact);
}
```

Output:

```Rust
The factorial of 5 is 120
```

## Additional Information

The `match` statement in the function checks if the input value `n` is either 0 or 1. If it is, then it returns 1. If it is not, then it calculates the factorial recursively using the formula `n` multiplied by `factorial(n-1)`.

[[file-1.polybot.js:end]]