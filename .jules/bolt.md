## 2024-05-18 - [Backend Event Loop Blocking]
**Learning:** Using synchronous `bcryptjs` operations (`hashSync`, `compareSync`) blocks the Node.js event loop, severely degrading performance under load because Node.js is single-threaded.
**Action:** Always use the asynchronous versions (`await bcryptjs.hash`, `await bcryptjs.compare`) to allow other requests to be processed concurrently during expensive hashing operations.
