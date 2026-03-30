## 2024-05-24 - [Avoid Sync Crypto Operations]
**Learning:** Using synchronous cryptographic functions like `bcryptjs.hashSync` and `bcryptjs.compareSync` in backend Express controllers blocks the Node.js event loop, creating a significant performance bottleneck that limits concurrent request handling.
**Action:** Always prefer asynchronous functions (e.g., `await bcryptjs.hash` and `await bcryptjs.compare`) for compute-heavy operations like password hashing in controllers.
