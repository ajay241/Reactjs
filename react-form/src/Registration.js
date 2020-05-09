import React from 'react';
import './Registration.css'
import 'bootstrap/dist/css/bootstrap.css';
import img1 from './assets/VHA.png'
import img2 from './assets/Image.png'

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
                cname: '',
                email: '',
                cpassword: '',
                password: '',

            }
        }
    }

    checkRequirement = (name, value) => {
        console.log(name, value)
        let errors = this.state.errors;

        switch (name) {
            case 'cname':
                errors.cname =
                    value.length < 5
                        ? 'Full Name must be 5 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            case 'cpassword':
                errors.password =
                    this.state.password !== value
                        ? 'Password and Confirm Password does not match!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors });
    }

    onChangeInput = (e) => {
        e.preventDefault();
        this.checkRequirement(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    }



    submit = (e) => {
        e.preventDefault();
        Object.keys(this.state.errors).map((list, index) => this.checkRequirement(list, this.state[list]))
        this.checkRequirement(e)


    }

    render() {
        console.log(this.state)
        const { errors } = this.state;
        // {errors.cname.length > 0 && <span className='text-danger'>{errors.cname}</span>}

        return (
            <div>

                <div className="health-top-cont">
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div className="left-card">
                                <div className="health-left-cont-text">
                                    Online <br />
                             Registration Form
                        </div>
                                <div className="health-left-cont-smalltext">
                                    For Pregnant females in any Trimester
                        </div>
                                <div className="health-left-cont-img">
                                    <img src={img1} />
                                </div>
                                <div className="cont-three">
                                    <div className="cont-one">
                                        Basic Details
                            </div>
                                    <div className="line"></div>
                                    <div className="cont-two">
                                        Qualification Details
                            </div>
                                    <div className="line"></div>
                                    <div className="cont-three">
                                        Business Infromation
                            </div>

                                </div>


                            </div>
                        </div>
                        <div className="form-group col-md-8">
                            <div className="health-right-center">
                                <div class="xp-contentbar">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="card m-b-30 padding-cont">

                                                <div class="card-header bg-white header-cont">
                                                    <div className="health-right-cont-image">
                                                        <img src={img2} />
                                                    </div>
                                                    <h5 class=" text-blue title-cont">Basic Details</h5>

                                                </div>

                                                <h6 class="sub-tittle ">Personal details*</h6>


                                                <div class="card-body card-cont">
                                                    <div class="column">
                                                        <div class="form-group">
                                                            <label for="exampleInputEmail1">First Name*</label>
                                                            <input type="text" onChange={this.onChangeInput} class="form-control" name="name" value={this.state.name} placeholder="Enter First Name" />
                                                        </div>

                                                        <div class="form-group">
                                                            <label for="exampleInputEmail4">Gender*</label> <br />
                                                            <label class="radio-inline">
                                                                <input type="radio" name="optradio" checked />Male
                                    </label>
                                                            <label class="radio-inline">
                                                                <input type="radio" name="optradio" />Female
                                    </label>

                                                        </div>
                                                      
                                                        <div class="form-group">
                                                            <label for="exampleInputEmail5">Phone Number</label>
                                                            <input type="text" onChange={this.onChangeInput} class="form-control" name="phone" value={this.state.name} placeholder="123456789" />
                                                        </div>  
                                                       
                                                    </div>
                                                    <div class="column">
                                                    <div class="form-group">
                                                            <label for="exampleInputEmail2">Last Name*</label>
                                                            <input type="text" onChange={this.onChangeInput} class="form-control" name="Lastname" value={this.state.details} placeholder="Enter Last Name" />
                                                        </div>

                                                        <div class="form-group">
                                                            <label class="control-label" for="date">Date of birth</label>
                                                            <input class="form-control" id="date" name="date" placeholder="dd/mm/yyy" type="text" />
                                                        </div>

                                                        <div class="form-group">
                                                            <label for="exampleInputEmail3">Email Id*</label>
                                                            <input type="text" onChange={this.onChangeInput} class="form-control" name="email" value={this.state.details} placeholder="abcd@abcd.com" />
                                                        </div>

                                                        
                                                        
                                                    </div>
                                                    <div class="column">
                                                        <div className="blue-circle">
                                                            
                                                        </div>
                                                    </div>
                                                </div>

                                                <h6 class="sub-tittle2">Contact & ID Proof Details</h6>

                                                <div class="card-body card-cont">
                                                    <div class="column">
                                                        <div class="form-group">
                                                            <label for="exampleInputComm">Communication Address*</label>
                                                            <input type="text" onChange={this.onChangeInput} class="form-control" name="communication" value={this.state.details} placeholder="Abcd" />
                                                        </div>

                                                        <div class="form-group">
                                                            <label for="exampleInputPann">PAN Number*</label>
                                                            <input type="text" onChange={this.onChangeInput} class="form-control" name="pan" value={this.state.details} placeholder="CADWE72781" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="exampleInputAadh">Aadhar Number*</label>
                                                            <input type="text" onChange={this.onChangeInput} class="form-control" name="aadhar" value={this.state.details} placeholder="CADWE72781" />
                                                        </div>
                                                    </div>
                                                    <div class="column">
                                                        <div class="form-group">
                                                            
                                                            <div className="blank-cont"> </div>
                                                        <input type="text" onChange={this.onChangeInput} class="form-control" name="communication" value={this.state.details} placeholder="Abcd" />
                                                           </div>
                                                           <div class="form-group">                                                           
                                                            <label for="exampleInputPan">PAN Attachment*</label>
                                                            <div class="col-sm-offset-2 col-sm-10">
                                                                {/* <label class="file-upload btn btn-primary"> */}
                                                                    <input type="file" class="form-control" />
                                                                {/* </label> */}
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <label for="exampleInputAadhar">Aadhar Attachment*</label>
                                                            <div class="col-sm-offset-2 col-sm-10">
                                                                {/* <label class="file-upload btn btn-primary"> */}
                                                                    <input type="file" class="form-control"/>
                                                                {/* </label> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="column">
                                                    <div class="form-group">
                                                        </div>
                                                        <div class="form-group">
                                                        <button type="submit" onClick={this.handleSubmit} class="btn btn-primary btn-cont">Submit&Next</button>
                                                        </div>
                                                       
                                                    </div>
                                                
                                            </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Registration

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

