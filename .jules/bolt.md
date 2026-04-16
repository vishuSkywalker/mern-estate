## 2024-05-24 - Async Cryptography in Express
**Learning:** Using synchronous cryptographic functions like `bcryptjs.hashSync` and `bcryptjs.compareSync` in Express controllers blocks the Node.js event loop, halting all concurrent request processing during computation.
**Action:** Always use asynchronous equivalents (`await bcryptjs.hash` and `await bcryptjs.compare`) in backend API routes to ensure high concurrency and responsiveness.
