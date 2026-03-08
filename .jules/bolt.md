## 2025-03-08 - Asynchronous Crypto Operations
**Learning:** Avoid using synchronous crypto operations like `bcryptjs.hashSync` and `bcryptjs.compareSync` inside Express controllers, as they are blocking operations. When multiple concurrent requests attempt authentication/signup, these synchronous tasks severely degrade performance by blocking the Node.js event loop.
**Action:** Always use the asynchronous counterparts (e.g., `await bcryptjs.hash`, `await bcryptjs.compare`) for performance-sensitive and compute-heavy crypto operations.
