// import {
//     FormGroup,
//     Input,
//     Label,
//     FormFeedback,
//     Form,
//     FormText,
//   } from "reactstrap"; 
// const CheckInput = ({isLoginInfoIncorrect}) => {
//     if (isLoginInfoIncorrect === false) {
//       return (
//         <Form onSubmit={(e) => handleSubmit(e)}>
//           <FormGroup>
//             <Label for="exampleEmail">Email</Label>
//             <Input
//               type="email"
//               value={inputEmailValue}
//               className="login-parameters"
//               placeholder="Enter email"
//               onChange={(e) => setinputEmailValue(e.target.value)}
//               valid
//             />
//             <FormFeedback valid></FormFeedback>
//             <FormGroup>
//               <Label for="examplePassword">Password</Label>
//               <Input 
//                 type="password"
//                 value={inputPasswordValue}
//                 className="login-parameters"
//                 placeholder="Enter password"
//                 onChange={(e) => setInputPasswordValue(e.target.value)}       
//               />
//               <FormFeedback valid></FormFeedback>
//             </FormGroup>
//           </FormGroup>
//         </Form>
//       )
//     } else {
//       return (
//         <Form onSubmit={(e) => handleSubmit(e)}>
//           <FormGroup>
//             <Label for="exampleEmail">Email</Label>
//             <Input
//               type="email"
//               value={inputEmailValue}
//               className="login-parameters"
//               placeholder="Enter email"
//               onChange={(e) => setinputEmailValue(e.target.value)}
//               invalid
//             />
//             <FormFeedback valid></FormFeedback>
//             <FormGroup>
//               <Label for="examplePassword">Password</Label>
//               <Input 
//                 type="password"
//                 value={inputPasswordValue}
//                 className="login-parameters"
//                 placeholder="Enter password"
//                 onChange={(e) => setInputPasswordValue(e.target.value)}       
//               />
//               <FormFeedback invalid></FormFeedback>
//             </FormGroup>
//           </FormGroup>
//         </Form>
//       );
//     }
//   };

//   export default CheckInput