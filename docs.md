[[file-1.polybot.js:start]]

## Technical Documentation - Handling RTL Languages for Country Data

### Overview

The purpose of this technical documentation is to provide guidance on handling RTL languages while dealing with country data returned in a specific format. 

### Requirements

To handle RTL languages for the country data returned, the following requirements must be met:
* Components need to be swizzled.
* The country data returned has a specific format which needs to be parsed correctly, ensuring the `name` field is also included, not just the key which is an integer.

### Implementation

To handle RTL languages, components need to be swizzled. Unfortunately, there is currently no built-in way for translations into Docusaurus 2, but RTL languages will be taken into account during the building process.

Regarding the country data returned, it is important to parse it correctly. The data has the following format:

```
{
  alpha2Code: string,
  callingCode: string,
  capital: string,
  flag: string,
  name: string,
  numericCode: string,
  population: number,
  region: string,
  subregion: string,
}
```

Ensure that you parse the data correctly, including the `name` field and not just the key, which is an integer. This will ensure that country data is displayed correctly, taking into account RTL languages.

### Conclusion

By following the above requirements, handling RTL languages for country data will be feasible. This technical documentation has provided guidance for handling RTL languages and parsing country data correctly.

[[file-1.polybot.js:end]]

[[file-0.polybot.js:start]]

# Technical Documentation: Handling RTL Language and Parsing Country Data

## Overview
This documentation explains how to handle right-to-left (RTL) languages and parse country data in Docusaurus 2, a modern static website generator. 

## Swizzling Components for RTL Language

If you want to handle RTL language support in Docusaurus 2, you will have to swizzle (customize) the components. Unfortunately, Docusaurus 2 does not currently support translations, but RTL languages will be considered in future updates.

To swizzle a component, you can use the following command in your terminal:

```
docusaurus swizzle [component path]
```

This command will create a new component in your project and copy the code from the original one. You can then modify this new component to add RTL language support.

## Parsing Country Data

The country data returned in the application has a specific format, as shown in the image below:

![Country Data Format](https://i.stack.imgur.com/cWI9H.png)

It is important to parse this data correctly. Please note that the `name` field should also be parsed, not just the key, which is an integer.

Make sure to follow the correct format when parsing the country data, as it can affect the functionality of the application.

## Conclusion
By following the guidance provided in this documentation, you should be able to successfully handle RTL language support in your Docusaurus 2 website, as well as parse country data in the correct format.

[[file-0.polybot.js:end]]