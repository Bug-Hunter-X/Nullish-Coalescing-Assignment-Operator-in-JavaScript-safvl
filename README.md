# Nullish Coalescing Assignment Operator in JavaScript

This repository demonstrates an uncommon error in JavaScript related to nullish coalescing assignment (`??=`).  The bug arises from a misunderstanding of how the operator handles null and undefined values.  The solution showcases a clear and concise way to address this error.

## Bug

The original `foo` function was designed to handle null values but didn't correctly account for all scenarios.  When `a` or `b` is `null`, the function simply returns prematurely and this will lead to unexpected behavior later on. 

## Solution

The `solutionContent.js` file demonstrates a solution using strict equality (`===`) instead of loose equality (`==`) to properly handle the nullish values. This ensures that the function behaves as intended only when values are explicitly null or undefined.