## 2024-05-24 - Async bcrypt operations for backend performance
**Learning:** Using synchronous `bcryptjs` functions (`hashSync`, `compareSync`) blocks the Node.js event loop, severely degrading performance for concurrent requests.
**Action:** Always use asynchronous functions (`await bcryptjs.hash` and `await bcryptjs.compare`) instead of synchronous counterparts in Express controllers.
