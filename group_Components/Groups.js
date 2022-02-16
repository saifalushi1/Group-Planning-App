// import React, {useState,} from "react";
// import axios from "axios"

// import {Container, Button, UncontrolledAccordion, AccordionItem, AccordionHeader} from "reactstrap"

// const Groups = ({userId, headers}) => {
//     // const [groups, setGroups] = useState([]);
//     // const [groupName, setGroupName] = useState(null)
//     // const [toggleGroup, setToggleGroup] = useState(1);

//     const createGroup = (e) => {
//         e.preventDefault()
//         const createUrl = "https://protected-hollows-70202.herokuapp.com/grouper/groups"
//         axios.post(createUrl, { name: "testing post request", members: [ { id: userId._id } ] }, {headers: headers})
//         .catch(err => console.log(err))

//     }
    

//     const joinGroup = () => {
//         console.log("JOIN GROUP")
//         return(
//             <div>NEW GROUP</div>
//         )
//     }

//     return (
//         <div>
//             <Container>
//                 <h3>Groups</h3>
//             {/* <div> */}
//             <Button color="gray" onClick={(e) => createGroup(e)}>
//                 Create Group
//             </Button>
//             {/* </div>
//             <UncontrolledAccordion defaultOpen="1">
//                 <AccordionItem>
//                 <AccordionHeader onClick={() => {setToggleGroup(1)}} key = '1' targetId="1">
//                     Group 1
//                 </AccordionHeader>
//                 <AccordionItem isOpen={toggleGroup === 1 ? true : false}>
//                     <ul>
//                         <li>Name</li>
//                         <li>Name</li>
//                         <li>Name</li>
//                     </ul>
//                 </AccordionItem>
//                 </AccordionItem>
//                 <AccordionItem>
//                 <AccordionHeader targetId="2">
//                     Group 2
//                 </AccordionHeader>
//                 <AccordionItem accordionId="2">
//                     <ul>
//                         <li>Name</li>
//                         <li>Name</li>
//                         <li>Name</li>
//                     </ul>
//                 </AccordionItem>
//                 </AccordionItem>
//                 <AccordionItem>
//                 <AccordionHeader targetId="3">
//                     Group 3
//                 </AccordionHeader>
//                 <AccordionItem accordionId="3">
//                     <ul>
//                         <li>Name</li>
//                         <li>Name</li>
//                         <li>Name</li>
//                     </ul>
//                 </AccordionItem>
//                 </AccordionItem>
//             </UncontrolledAccordion> */}
//         </Container>
//         </div>
//     )
// }

// export default Groups