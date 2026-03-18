## 2024-05-24 - [Avoid Synchronous Crypto Operations]
**Learning:** Using synchronous `bcryptjs` functions (like `hashSync` and `compareSync`) blocks the Node.js event loop, which is a major performance bottleneck for Express backend applications, especially under load.
**Action:** Always use asynchronous functions (e.g., `await bcryptjs.hash` and `await bcryptjs.compare`) instead of synchronous counterparts in Express controllers.
