## 2024-05-24 - [Avoid `hashSync` and `compareSync` in Node.js]
 **Learning:** [Synchronous cryptographic functions like `bcryptjs.hashSync` and `compareSync` block the Node.js event loop, which severely limits scalability under load.]
 **Action:** [Always use asynchronous alternatives like `await bcryptjs.hash` and `await bcryptjs.compare` in Express endpoints.]
