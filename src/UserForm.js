// function UserForm() {
//     return (
//         <form>
//             <div>
//                 <label>
//                     Name :
//                 <input type="text" name="userName" />
//                 </label>
//                 <button type="submit">Submit</button>
//             </div>
//         </form>
//     );
// }
import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            gender: '',
            description: '',
            acceptTerms: false
        };
    }

    //Handle Change
    handleChange = (e) => {
        this.setState({
            [e.target.name]:
                e.target.type === 'checkbox'
                    ? e.target.checked
                    :
                    e.target.value
        });
    }

    // //Handle Gender Change
    // handleGenderChange = (e) => {
    //     this.setState({
    //         gender: e.target.value
    //     })
    // }

    // //Handle Description Change
    // handleDescriptionChange = (e) => {
    //     this.setState({
    //         description: e.target.value
    //     })
    // }

    // //Handle Accept Terms Change
    // handleAcceptTermsChange = (e) => {
    //     this.setState({
    //         acceptTerms: e.target.checked
    //     })
    // }

    //Handle Submit
    handleSubmit = (e) => {
        e.preventDefault();
        alert('User Name : ' + this.state.userName + '\n Description : ' + this.state.description + '\n Gender : ' + this.state.gender + '\n Accept Terms : ' + this.state.acceptTerms)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label>
                            Name :
                            <input
                                type="text"
                                name="userName"
                                value={this.state.userName}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Gender
                        <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                                <option>Choose...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Description
                    <textarea
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}></textarea>
                        </label>
                    </div>
                    <div>
                        <label>
                            Accept Terms
                            <input type="checkbox" name="acceptTerms" checked={this.state.acceptTerms} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default UserForm;