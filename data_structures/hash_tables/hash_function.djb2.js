function djb2Hash(key, tableSize) {
  let hash = 5381; // Initial prime number

  for (let i = 0; i < key.length; i++) {
    const char = key.charCodeAt(i);
    hash = (hash << 5) + hash + char; // Equivalent to: hash * 33 + char
  }

  return Math.abs(hash % tableSize); // Ensures a non-negative index
}
