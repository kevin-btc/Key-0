[[file-0.polybot.js:start]]

## Function: `sum_numbers(a: i32, b: i32) -> i32`

This function takes two integer values, `a` and `b`, and returns their sum as an integer.

### Example

```rust
let x = 2;
let y = 3;
let sum = sum_numbers(x, y);
println!("{} + {} = {}", x, y, sum); // Output: 2 + 3 = 5
```

### Parameters

- `a`: An integer value representing the first number to be added.
- `b`: An integer value representing the second number to be added.

### Returns

- An integer value that represents the sum of the two input parameters `a` and `b`.

## Context

To handle right-to-left (RTL) languages, you would have to `swizzle` the components. Unfortunately, Docusaurus 2 currently does not have a built-in way for translations. However, we will take RTL languages into account when building it.

The country data returned from the API has the following format:

```
{
  "name": "Afghanistan",
  "key": 4,
  "alpha2Code": "AF",
  "flagImageUri": "https://restcountries.com/data/afg.svg"
}
```

Please ensure that you parse the name field correctly. It is a string representing the name of the country.

[[file-0.polybot.js:end]]

[[file-1.polybot.js:start]]

# Docusaurus 2 Documentation

Welcome to the Docusaurus 2 documentation! This documentation is aimed at developers who want to use Docusaurus 2 to build their website.

## Swizzling Components

To handle specific features, such as RTL languages, you may need to swizzle Docusaurus 2 components. Swizzling allows you to override and customize the default components to fit your unique requirements. To learn how to swizzle components, refer to the [Docusaurus 2 CLI documentation](https://v2.docusaurus.io/docs/cli/#docusaurus-swizzle).

## Country Data Format

When working with country data, it is important to ensure that you parse the data correctly. The country data returned has the following format:

```  
{
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  ...
}
```

Make sure to parse the `name` field correctly, as it contains the name of the country. Note that the `alpha2Code` and `alpha3Code` fields contain the two- and three-letter country codes, respectively.

At present, we do not support translations in Docusaurus 2. However, we are working to take into account RTL languages in our future releases.

[[file-1.polybot.js:end]]