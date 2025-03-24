function hash(key, tableSize) {
  let hashedKey = 0; // Initialize the hash value

  const primeNumber = 97; // Prime number used for better hash distribution

  for (let i = 0; i < key.length; i++) {
    const char = key[i];
    const value = char.charCodeAt(0); // Get ASCII value of the character

    // Update the hash value using
    hashedKey = (hashedKey * primeNumber + value) % tableSize;
  }

  return hashedKey;
}
