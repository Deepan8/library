import context from "../../../resources/string"
import { useState } from "react";
import form1 from "../create/validation";
// import { Link } from "react-router-dom"
import { Forminput, Container, Col25, Col75, Row, Inputtag, Texttag, Labletag } from "../create/createstyle";
import React from "react";



export default function Createform() {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        message: "",
        messagepara: "",
        tag1: "",
        tag2: "",
        date: "",
        month: "",

    });




    const [errcontactInfo, seterrContactInfo] = useState(false)
    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        seterrContactInfo(form1(contactInfo));
        setContactInfo({ name: "", message: "", messagepara: "", tag1: "", tag2: "", date: "", month: "" });
        console.log(contactInfo);
        const newBlogItems = {
            name: contactInfo.name,
            message: contactInfo.message,
            messagepara: contactInfo.messagepara,
            tag1: contactInfo.tag1,
            tag2: contactInfo.tag2,
            date: contactInfo.date,
            month: contactInfo.month,
        };
        const sessionBlogs = sessionStorage.getItem('blog');
        if (sessionBlogs) {
            const existingBlogs = JSON.parse(sessionBlogs);
            existingBlogs.push(newBlogItems);
            sessionStorage.setItem('blog', JSON.stringify(existingBlogs));
        }
        else {
            const blogs = [];
            blogs.push(newBlogItems);
            sessionStorage.setItem('blog', JSON.stringify(blogs));
        }


    };

    return (


        <Container>
            <Forminput onSubmit={handleSubmit}>
                <Row>
                    <Col25>
                        <Labletag htmlFor="fname">{context.username}</Labletag>
                    </Col25>
                    <Col75>
                        <Inputtag type="text" id="lname" value={contactInfo.name} name="name"
                            onChange={handleChange} placeholder="Your user name.." />
                    </Col75>
                    <span>{errcontactInfo.name}</span>
                </Row>

                <Row>
                    <Col25>
                        <Labletag htmlFor="lname"> {context.heading}</Labletag>
                    </Col25>
                    <Col75>
                        <Inputtag type="text" id="lname" value={contactInfo.message} name="message"
                            onChange={handleChange} placeholder="Heading" />
                    </Col75>
                    <span>{errcontactInfo.message}</span>

                </Row>
                <Row>
                    <Col25>
                        <Labletag htmlFor="fname">Tag1</Labletag>
                    </Col25>
                    <Col75>
                        <Inputtag type="text" value={contactInfo.tag1} name="tag1"
                            onChange={handleChange} placeholder="tag1" />
                    </Col75>
                    <span>{errcontactInfo.tag1}</span>
                </Row>

                <Row>
                    <Col25>
                        <Labletag htmlFor="fname">Tag2</Labletag>
                    </Col25>
                    <Col75>
                        <Inputtag type="text" value={contactInfo.tag2} name="tag2"
                            onChange={handleChange} placeholder="tag2" />
                    </Col75>
                    <span>{errcontactInfo.tag2}</span>
                </Row>

                <Row>
                    <Col25>
                        <Labletag htmlFor="subject"> {context.para} </Labletag>
                    </Col25>
                    <Col75>
                        <Texttag id="subject" name="messagepara"
                            onChange={handleChange} placeholder="Write something.." ></Texttag>
                    </Col75>
                    <span>{errcontactInfo.messagepara}</span>
                </Row>


                <Row>
                    <Col25>
                        <Labletag htmlFor="fname">Date</Labletag>
                    </Col25>
                    <Col75>
                        <Inputtag type="number" id="lname" value={contactInfo.date} name="date"
                            required
                            onChange={handleChange} placeholder="Date" />
                    </Col75>
                    <span>{errcontactInfo.date}</span>
                </Row>

                <Row>
                    <Col25>
                        <Labletag htmlFor="fname">Month</Labletag>
                    </Col25>
                    <Col75>
                        <Inputtag type="text" required id="lname" value={contactInfo.month} name="month"
                            onChange={handleChange} placeholder="Month" />
                    </Col75>
                    <span>{errcontactInfo.month}</span>
                </Row>

                <Row>
                    <Inputtag type="submit" value="Submit"  ></Inputtag>
                </Row>





            </Forminput>
        </Container>


    );

}
