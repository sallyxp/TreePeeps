import { useState, useRef } from "react";
import React from "react";
import { Container, Row, Col, Card, Form, Input, Button, CardBody } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import { Link } from "react-router-dom";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

function SignUp() {

    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");


    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");



    const [passwordError, setPasswordError] = useState("");



    function handleSubmit(event) {
        event.preventDefault();

        console.log(userName);
        console.log(firstName);
        console.log(lastName);
        // console.log(emailAddress);
        console.log(country);
        console.log(region);



        if (password.length > 0 && passwordError.length === 0) {
            // we have a valid password
            console.log(password);
        }

        // if (emailError.length == 0) {
        //     console.log (emailAddress);
        // }
    };

    // function checkEmailValidity() {
    //     if (emailAddress.value ===  emailAddress.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {

    //         console.log(emailAddress);
    //     }
    //     else {
    //         setEmailError("invalid email");
    //     }

    // }

    function passwordLostFocus() {
        checkPasswordValidity();
    }

    function confirmPasswordLostFocus() {
        checkPasswordValidity();
    }

    function checkPasswordValidity() {
        if (password === undefined || confirmPassword === undefined) {
            setPasswordError("");
            return;
        }

        if (password.length === 0 || confirmPassword.length === 0) {
            setPasswordError("you must enter a password");
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError("Passwords don't match");
            return;
        }

        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            return;
        }

        setPasswordError("");
    }

    return (
        <div>
            <Navbar>
                <NavItem
                    link="/"
                    name="About Us">
                </NavItem>
                <NavItem
                    link="/contact"
                    name="Contact Us">
                </NavItem>
            </Navbar>

            <Container>
                <Card className="border-success" style={{ padding: 40, margin: 20, }}>
                    <CardBody>
                        <Container>
                            <img className='pe-2 pb-2' src='../../favicon-32x32.png' alt='icon'></img>
                            <span className="fs-4">TreePeeps</span>

                        </Container>

                        <h2 className="col-md-12" style={{ textAlign: "center" }}>Create an account</h2>

                        <Form>
                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>User name:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }}>
                                    <Input className="form-control" type="text" placeholder="Choose a user name of 8 characters or more" onChange={e => setUserName(e.target.value)}></Input>
                                </Col>
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>First name:</h4>
                                </Col>
                                <div className="col-md-6" style={{ margin: 10 }}>
                                    <Input className="form-control" type="text" placeholder="Enter first name" onChange={e => setFirstName(e.target.value)}></Input>
                                </div>
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Last name:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }}>
                                    <Input className="form-control" type="text" placeholder="Enter last name" onChange={e => setLastName(e.target.value)}></Input>
                                </Col>
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Email address:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }}>
                                    <Input className="form-control" type="email" placeholder="Enter email" onChange={e => setEmailAddress(e.target.value)}></Input>
                                </Col>
                                <div className="col-md-5"></div>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{emailError}</span>
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Password:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }}>
                                    <Input className="form-control" type="password" onBlur={passwordLostFocus} placeholder="Enter password of 8 or more characters" onChange={e => setPassword(e.target.value)}></Input>
                                </Col>
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Confirm password:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }} >
                                    <input className="form-control" type="password" onBlur={confirmPasswordLostFocus} placeholder="Re-enter password" onChange={e => setConfirmPassword(e.target.value)}></input>
                                </Col>
                                <Col xs="5"></Col>
                                <span className="has-error col-md-6" style={{ color: "red", textAlign: "center" }}>{passwordError}</span>
                            </Row>

                            <Row style={{ margin: 10 }}>
                                <Col xs="5" style={{ backgroundColor: "lightgray", textAlign: "center", margin: 10 }}>
                                    <h4>Location:</h4>
                                </Col>
                                <Col xs="6" style={{ margin: 10 }}>
                                    <CountryDropdown className="form-control"
                                        value={country}
                                        onChange={e => setCountry(e)}
                                        type="text" />
                                    <RegionDropdown className="form-control"
                                        country={country}
                                        value={region}
                                        onChange={e => setRegion(e)} />

                                </Col>
                            </Row>

                            <Row style={{ margin: 30 }}>
                                <Col xs="5"></Col>
                                <Col xs="5">
                                    <Button className="btn btn-outline" style={{ backgroundColor: "green", color: "white" }} onClick={handleSubmit} type="submit">Sign Up</Button>
                                </Col>
                            </Row>
                        </Form>

                        <Row style={{ margin: 30 }}>
                            <h4 style={{ textAlign: "center" }}>Already got an account? <Link style={{ color: "black", textDecorationLine: "underline" }} to="/login">Log in</Link></h4>

                        </Row>

                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}


export default SignUp;