function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values appropriately.
    console.warn('Null values encountered. Returning default values or throwing an error');
    return {a: a ?? 0, b: b ?? 0}; //Provide default values
  }
  // ...
}