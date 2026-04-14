## 2024-05-24 - Unblocking the Node.js Event Loop
**Learning:** The MERN estate backend was using synchronous `bcryptjs` functions (`hashSync` and `compareSync`) in the authentication and user controllers. Node.js is single-threaded, so synchronous crypto operations completely block the main event loop, preventing the server from handling other requests concurrently.
**Action:** Always verify that CPU-intensive operations (like password hashing) use their asynchronous counterparts (e.g., `await bcryptjs.hash`) to maintain high throughput in Node.js backends.
