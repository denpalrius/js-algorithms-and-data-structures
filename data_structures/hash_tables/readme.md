# **Simple Hashing Function**  

Hashing is a fundamental technique in computer science used for efficiently storing, retrieving, and managing data.
This simple hashing function maps string keys to numeric values within a fixed table size.
It leverages modulus operations and prime numbers to optimize hash distribution and minimize collisions, ensuring even distribution of hash values across the table.  

This function is particularly useful in **hash tables**, **caching mechanisms**, and **data indexing applications**, where fast lookups are critical.


## **How It Works**  

1. **Character Encoding:**  
   - Each character in the string key is converted into a numerical value using its ASCII representation.  

2. **Multiplication with a Prime Number:**  
   - A prime number is used to generate a more evenly distributed set of hash values, reducing clustering and collisions.  

3. **Modulo Operation:**  
   - The computed hash value is taken modulo `tableSize` to ensure the final value fits within the bounds of the hash table.  

## **Key Features**  

1. **Bounded Range:**  
   - Uses the modulus operation (`% tableSize`) to guarantee that the generated hash values remain within a valid index range.  

2. **Uniform Distribution:**  
   - Helps distribute keys evenly across the hash table, reducing the likelihood of clustering.  

3. **Efficiency:**  
   - The function is lightweight and fast, relying on simple arithmetic operations rather than complex computations.  

4. **Handling Large Inputs:**  
   - Reduces large numerical values into manageable index ranges to avoid overflow and excessive memory consumption.  

## **Why Use Prime Numbers in Hashing?**  

Using a prime number in hashing improves the function’s effectiveness by:  

1. **Reducing Collisions:**  
   - Prime table sizes minimize collisions by avoiding common factor mappings that lead to clustering.  

2. **Promoting Uniform Distribution:**  
   - A prime number ensures better data spread, leading to a lower probability of hash collisions.  

3. **Enhancing Unpredictability:**  
   - Prime number multiplication adds complexity, making the function more resilient against predictable hashing patterns.  

4. **Improving Performance:**  
   - Reducing clustering improves lookup, insertion, and deletion speeds in hash table operations.  

## **Performance Considerations**  

- **Time Complexity:** \( O(n) \), where \( n \) is the length of the input string.  
- **Space Complexity:** \( O(1) \), as only a few integer variables are used.  
