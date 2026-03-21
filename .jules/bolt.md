## 2024-05-24 - Node.js Event Loop Blocking
**Learning:** Using synchronous cryptographic functions like `bcryptjs.hashSync` and `bcryptjs.compareSync` blocks the Node.js event loop, significantly degrading server concurrency and performance under load.
**Action:** Always use the asynchronous versions (`await bcryptjs.hash` and `await bcryptjs.compare`) in Express controllers to maintain responsiveness.
