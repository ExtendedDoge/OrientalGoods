// export default (request, response, next) => {
//     const { username, email, firstname, lastname, password } = request.body;

//     function validEmail(userEmail) {
//         return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
//     }

//     if (request.path === "/register") {

//         if (![username, email, firstname, lastname, password].every(Boolean)) {
//             return response.status(401).json("Missing Credentials");
//         } else if (!validEmail(email)) {
//             return response.status(401).json("Invalid Email");
//         }
//     } else if (request.path === "/login") {
//         if (![email, password].every(Boolean)) {
//             return response.status(401).json("Missing Credentials");
//         } else if (!validEmail(email)) {
//             return response.status(401).json("Invalid Email");
//         }
//     }

//     next();
// };