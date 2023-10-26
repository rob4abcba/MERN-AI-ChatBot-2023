import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// app.post("/user/:userid", (req, res, next) => {
//   console.log("req.body.name = " + req.body.name);
//   console.log("req.params.userid = " + req.params.userid);
//   return res.send(
//     "req.body.name = " +
//       req.body.name +
//       "\nreq.params.userid = " +
//       req.params.userid
//   );
// });
// connection & listener
connectToDatabase()
    .then(() => {
    app.listen(5000, () => console.log("Server Open on PORT =", 5000));
})
    .catch((err) => console.log("connectToDatabase: err =", err));
//# sourceMappingURL=index.js.map