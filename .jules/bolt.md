## 2024-05-24 - Avoid Sync Hashing in Node.js Event Loop
**Learning:** Using synchronous hashing functions like `bcryptjs.hashSync` or `bcryptjs.compareSync` blocks the Node.js event loop. Under heavy load, this significantly degrades concurrent request throughput since the server cannot process any other requests while performing the CPU-intensive hashing.
**Action:** Always use the asynchronous versions (`await bcryptjs.hash` and `await bcryptjs.compare`) inside Express controllers to ensure the event loop remains unblocked.
