import React, { Component } from 'react'
import { Control, Form, Errors,   } from 'react-redux-form';
import {  Button, Label, Col, Row, FormGroup, Input,Text} from 'reactstrap'
import "./login.css"

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: ''
        }
       this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
            {/* <div class="container">
                <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12 mx-auto">
                    <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Sign In</h5>
                        <form class="form-signin">
                            <div class="form-label-group">
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                                <label for="inputEmail">Email address</label>
                              
                            </div>

                            <div class="form-label-group">
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                                <label for="inputPassword">Password</label>
                            </div>

                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                <label class="custom-control-label" for="customCheck1">Remember password</label>
                            </div>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                            <hr class="my-4"/>
                            <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                            <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div class="col-sm-12 col-md-12 col-lg-12 mx-auto">
                        <div class="card card-signin my-5">
                            <div class="card-body">
                                <h5 class="card-title text-center">Sign In</h5>
                                <Form model="loginForm" className="form-signin" onSubmit={values => this.handleSubmit(values)}>
                                <Col>
                                        <FormGroup className="form-group ">
                                        <Label>Email</Label>
                                        <Input className="inputter"
                                            type="email"
                                            name="email"
                                            id="exampleEmail"
                                            placeholder="myemail@email.com"
                                        />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup className="form-group ">
                                        <Label className="labeler" for="examplePassword">Password</Label>
                                        <Input className="inputter"
                                            type="password"
                                            name="password"
                                            id="examplePassword"
                                            placeholder="********"
                                        />
                                        </FormGroup>
                                    </Col>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Form>
                                <hr class="my-4"/>
                                <div className="row">
                                    
                                    <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                                    </div>
                                    <hr class="my-4"/>
                                <div className="row form-label-group">
                                    
                                    
                                    <p id="signUpTxt">Don't have an account? Sign up here!</p>
                                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
                </React.Fragment>
        )
    }
}

export default Login