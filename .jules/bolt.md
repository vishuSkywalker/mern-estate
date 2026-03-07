## 2024-05-24 - Node.js Event Loop Blocked by Synchronous Crypto Operations
**Learning:** The Express backend uses synchronous `bcryptjs.hashSync` and `bcryptjs.compareSync` methods in controllers. These operations are CPU-intensive and block the single-threaded Node.js event loop, degrading performance and increasing latency for all concurrent requests.
**Action:** Always use the asynchronous versions (`await bcryptjs.hash` and `await bcryptjs.compare`) for cryptographic operations in Node.js Express controllers to maintain high concurrency.
