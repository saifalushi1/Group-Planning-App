import React, {useState} from "react";
import axios from "axios"

import {UncontrolledAccordion, AccordionItem, AccordionHeader} from "reactstrap"

const Groups = (props) => {
    const [groups, setGroups] = useState([]);

    const getGroups = () => {
        const groupURL = `http://localhost:8000/grouper/groups/${props.userID}` 
        axios.get(groupURL) 
        .then((res) => {
            setGroups(res.data)
        })
        console.log(groups)

    }
    return (
        <div>
        <UncontrolledAccordion defaultOpen="1">
            <AccordionItem>
            <AccordionHeader targetId="1">
                Group 1
            </AccordionHeader>
            <AccordionItem accordionId="1">
                <ul>
                    <li>Name</li>
                    <li>Name</li>
                    <li>Name</li>
                </ul>
            </AccordionItem>
            </AccordionItem>
            <AccordionItem>
            <AccordionHeader targetId="2">
                Group 2
            </AccordionHeader>
            <AccordionItem accordionId="2">
                <ul>
                    <li>Name</li>
                    <li>Name</li>
                    <li>Name</li>
                </ul>
            </AccordionItem>
            </AccordionItem>
            <AccordionItem>
            <AccordionHeader targetId="3">
                Group 3
            </AccordionHeader>
            <AccordionItem accordionId="3">
                <ul>
                    <li>Name</li>
                    <li>Name</li>
                    <li>Name</li>
                </ul>
            </AccordionItem>
            </AccordionItem>
        </UncontrolledAccordion>
        </div>
    )
}

export default Groups