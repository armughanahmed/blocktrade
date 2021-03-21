import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import NavbarAdmin from '../../components/NavbarAdmin'
import axios from 'axios'

class Home extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            unverifiedOrganizations: [],
            verified: false,
        }
    }

    componentDidMount(){
        this.getUnverifiedUsers();
    }

    async getUnverifiedUsers(){
        const obj=
        {

        };
        const token = localStorage.getItem('token');
        try{
            const response = await axios.post('http://localhost:4000/admin/getUnverifiedOrganizations',obj,{
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            })
            console.log(response);
            this.setState({
                unverifiedOrganizations: response.data.data
            })
        }
        catch(e){
            console.log(e.response)
        }
    }

    async verify(e,id){
        this.setState({
            verified: false,
        })
        const obj = {
            org_id: id
        }
        const token = localStorage.getItem('token');
        try{
            const response = await axios.post('http://localhost:4000/admin/registerOrganization',obj,{
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            })
            console.log(response);
            if (response.status === 200) {
                this.setState({
                    verified: true,
                })
            }
        }
        catch(e){
            console.log(e.response)
        }
    }

    displayUsers(value){
        return(
            <tr>
                <td>{value.name}</td>
                <td>Not verified</td>
                <td><button className="btn btn-success" onClick={(e) => this.verify(e,value.id)}>Verify</button></td>
                <td><button className="btn btn-danger" onClick={(e) => this.discard(e,value.id)}>Discard</button></td>
             </tr>
        )
    }

    render() {
        return (
            <div>
                <NavbarAdmin/>
                    <div className="container">
                        <table className="table table-bordered table-success mt-3">
                            <tr>
                                <th>Name</th>
                                <th>Verification status</th>
                                <th>Verify</th>
                                <th>Discard</th>
                            </tr>
                           
                                {
                                    this.state.unverifiedOrganizations.map((value) => this.displayUsers(value))
                                }
                        </table>
                        {
                            this.state.verified === true &&
                            <p id="org-verfied">Organization successfully verified</p>
                        }
                    </div>
            </div>
           
        )
    }
}

export default Home