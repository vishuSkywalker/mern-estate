## 2024-05-24 - [Avoid synchronous bcrypt methods]
**Learning:** In Node.js, operations like `bcryptjs.hashSync` and `bcryptjs.compareSync` are CPU-intensive and synchronous, which block the single-threaded event loop and severely degrade performance and throughput, especially under high load.
**Action:** Always use the asynchronous versions (`await bcryptjs.hash`, `await bcryptjs.compare`) to maintain a non-blocking event loop.
