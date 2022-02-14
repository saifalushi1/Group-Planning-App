import React, {useState, useEffect} from "react";
import axios from "axios"

import {Container, Button, UncontrolledAccordion, AccordionItem, AccordionHeader} from "reactstrap"

const Groups = (props) => {
    const [groups, setGroups] = useState([]);
    const [toggleGroup, setToggleGroup] = useState(1);

    const getGroups = (id) => {
        const groupURL = `http://localhost:8000/grouper/groups/${id}` 
        axios.get(groupURL) 
        .then((res) => {
            setGroups(res.data)
        })
    }
    console.log(groups)

    useEffect(() => {
        getGroups((props.userID))
    }, [])

    return (
        <div>
            <Container>
                <h3>Groups</h3>
            <div>
            <Button color="gray">
                Join Group
            </Button>
            </div>
            <UncontrolledAccordion defaultOpen="1">
                <AccordionItem>
                <AccordionHeader onClick={() => {setToggleGroup(1)}} key = '1' targetId="1">
                    Group 1
                </AccordionHeader>
                <AccordionItem isOpen={toggleGroup === 1 ? true : false}>
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
        </Container>
        </div>
    )
}

export default Groups