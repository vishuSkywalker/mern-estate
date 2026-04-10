## 2024-05-18 - [Node.js Synchronous Crypto Warning]
**Learning:** Node.js event loop lag caused by synchronous CPU-intensive operations (like hashing) block all incoming requests. Using `bcryptjs.hashSync` inside an API controller causes this issue.
**Action:** Always prefer `await bcryptjs.hash` over `bcryptjs.hashSync` in Express controllers.
