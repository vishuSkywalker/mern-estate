## 2024-05-24 - [Unblock Node.js Event Loop]
**Learning:** [Using synchronous bcryptjs functions (`hashSync`, `compareSync`) blocks the Node.js event loop, significantly reducing concurrent request handling throughput in Express.]
**Action:** [Always use asynchronous counterparts (`await bcryptjs.hash`, `await bcryptjs.compare`) in Express controllers to maintain high concurrency.]
