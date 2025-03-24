## **DJB2 Hashing Function**  


The **DJB2 hashing algorithm**, created by **Daniel J. Bernstein**, is a simple and efficient way to convert a string into a numerical hash. It operates using bitwise shifts and prime-based multiplication to generate well-distributed hash values.  

This implementation ensures:  
✔️ **Efficient computation** (fast bitwise operations).  
✔️ **Good distribution** (minimizing clustering).  
✔️ **Low collision rate** (effective in real-world applications).  

---

### **How It Works**  
1. **Initialize hash value** with a large prime number (`5381`).  
2. **Iterate over each character** of the input string.  
3. **Use bitwise shifts** and multiplication to update the hash.  
4. **Apply modulus (`% tableSize`)** to fit the value within the hash table.  

---

### **Key Features of DJB2**  
✅ **Bitwise Shift (`<< 5`)**: Equivalent to multiplying by 32, making the function efficient.  
✅ **Prime Multiplication (`hash * 33`)**: Helps spread values uniformly across the table.  
✅ **Handles Large Keys Well**: Works effectively with long strings.  
✅ **Avoids Clustering**: Ensures better key distribution than naive modulus-based hash functions.  

---

### **Performance Considerations**  
- **Time Complexity:**  O(n)  - Linear with respect to input size.  
- **Space Complexity:**  O(1) - Constant memory usage.

This **DJB2 hashing function** is an excellent choice for **hash tables, symbol tables, and fast lookups**.