
## 2024-11-20 - Asynchronous bcrypt Hashing
**Learning:** Found synchronous `bcryptjs.hashSync` and `bcryptjs.compareSync` methods blocking the Node.js event loop in `api/controllers/auth.controller.js` and `api/controllers/user.controller.js`. Because these controllers are asynchronous, the synchronous hash/compare function calls needlessly block concurrent request processing.
**Action:** Always prefer asynchronous versions `await bcryptjs.hash` and `await bcryptjs.compare` to ensure that CPU-intensive cryptography operations do not block the single-threaded Node.js event loop.
