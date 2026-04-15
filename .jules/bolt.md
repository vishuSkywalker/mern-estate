## 2024-05-24 - [Avoid Sync Crypto Operations]
**Learning:** Using synchronous bcryptjs functions (`hashSync`, `compareSync`) in Express controllers blocks the Node.js event loop, severely degrading concurrent request handling performance.
**Action:** Always use asynchronous bcryptjs functions (`await bcryptjs.hash`, `await bcryptjs.compare`) for password operations to ensure the main thread remains non-blocking.
