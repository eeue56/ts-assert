# ts-assert

Node's Assert module, but typesafe in Typescript.

Provides:

-   deepStrictEqual
-   strictEqual
-   notDeepStrictEqual
-   notStrictEqual

But all the actuals must match the type of expected, meaning your asserts are safe at the type level rather than just the data level.

## Install

```
npm install --save-dev @eeue56/ts-assert
```

## Usage

```typescript
import * as assert from "@eeue56/ts-assert";
```
