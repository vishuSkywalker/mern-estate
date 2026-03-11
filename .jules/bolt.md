## 2024-05-30 - Avoid synchronous crypto operations in Express controllers
**Learning:** Using synchronous `bcryptjs.hashSync` and `bcryptjs.compareSync` blocks the Node.js event loop, preventing the server from handling other requests while the crypto operation is running.
**Action:** Always use the asynchronous versions `await bcryptjs.hash` and `await bcryptjs.compare` in API controllers to maintain high throughput.
