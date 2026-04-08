## 2024-05-24 - [Avoid Sync Bcrypt in Event Loop]
**Learning:** Synchronous password hashing (`bcryptjs.hashSync` and `compareSync`) completely blocks the Node.js event loop during authentication, severely bottlenecking concurrent request handling.
**Action:** Always use the asynchronous versions (`await bcryptjs.hash` and `await bcryptjs.compare`) to ensure high throughput for backend controllers.
