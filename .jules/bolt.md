## 2024-07-25 - [Non-Blocking Cryptography in Express Controllers]
**Learning:** Using `bcryptjs.hashSync` and `bcryptjs.compareSync` blocks the Node.js event loop, which severely degrades performance under concurrent load by preventing other requests from being processed while hashes are computed.
**Action:** Always use the asynchronous versions (`await bcryptjs.hash` and `await bcryptjs.compare`) for cryptographic operations to ensure the Express backend remains responsive.
