## 2024-05-18 - [Node.js Event Loop Blocking in Auth]
**Learning:** Synchronous cryptography operations (like `bcryptjs.hashSync` and `bcryptjs.compareSync`) block the Node.js main thread, severely limiting concurrent request handling, especially in authentication controllers.
**Action:** Always use the async, Promise-based versions (`await bcryptjs.hash`, `await bcryptjs.compare`) to prevent event loop blocking during password hashing and verification.
