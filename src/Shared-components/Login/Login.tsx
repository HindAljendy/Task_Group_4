// import axios from "axios";
// import "./Login.css";
// import  { useState, ChangeEvent, FormEvent } from "react";

// const Login = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     axios.post("api", {"email": email , "password": password})
//     .then(res =>console.log(res));

//   };

//   return (
//     <div className="HJ_Login">
//       <form onSubmit={handleSubmit}>
//         <div className="container-fluid">
//           <div className="row h-100 align-items-center justify-content-center">
//             <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
//               <div className=" HJ_ColorForm rounded p-4 p-sm-5 my-4 mx-3">
//                 <div className="d-flex align-items-center justify-content-between mb-3 ">
//                   <h3 className="text-light">DarkPen</h3>
//                   <h3>Sign In</h3>
//                 </div>
//                 <div className="form-floating mb-3">
//                   <input
//                     type="email"
//                     value={email}
//                     required
//                     onChange={handleEmailChange}
//                     className="form-control"
//                     id="floatingInput"
//                     placeholder="name@example.com"
//                   />
//                   <label htmlFor="floatingInput">Email address</label>
//                 </div>
//                 <div className="form-floating mb-4">
//                   <input
//                     type="password"
//                     value={password}
//                     required
//                     onChange={handlePasswordChange}
//                     className="form-control"
//                     id="floatingPassword"
//                     placeholder="Password"
//                   />
//                   <label htmlFor="floatingPassword">Password</label>
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-primary py-3 w-100 mb-4"
//                 >
//                   Login
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
