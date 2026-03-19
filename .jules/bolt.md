## 2026-03-19 - [Replace synchronous bcryptjs functions]
**Learning:** Found synchronous cryptographic operations (`bcryptjs.hashSync` and `compareSync`) in Node.js backend controllers, which block the event loop and severely cripple the server's ability to handle concurrent requests.
**Action:** Always use asynchronous functions (e.g., `await bcryptjs.hash` and `await bcryptjs.compare`) instead of synchronous counterparts in Express controllers to avoid blocking the Node.js event loop.
