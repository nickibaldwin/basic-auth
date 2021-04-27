// 'use strict';
// // Signin Route -- login with username and password
// // test with httpie
// // http post :3000/signin -a john:foo
// app.post('/signin', async (req, res) => {

//   /*
//     req.headers.authorization is : "Basic sdkjdsljd="
//     To get username and password from this, take the following steps:
//       - Turn that string into an array by splitting on ' '
//       - Pop off the last value
//       - Decode that encoded string so it returns to user:pass
//       - Split on ':' to turn it into an array
//       - Pull username and password from that array
//   */


//===== When they sign in, 