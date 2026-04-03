## 2024-11-20 - [Performance] Async Crypto in Express
**Learning:** Synchronous crypto operations (`bcryptjs.hashSync`, `bcryptjs.compareSync`) block the Node.js event loop, causing severe performance degradation in Express controllers under load.
**Action:** Always use asynchronous versions (`await bcryptjs.hash`, `await bcryptjs.compare`) for password hashing and verification in backend controllers.
