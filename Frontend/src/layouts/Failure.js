


  import Modal from 'react-bootstrap/Modal'
  



  import React, { PureComponent } from 'react'
  import './Failure.css'
  class Failure extends PureComponent {
    constructor(props) {
      super(props)
  
      this.state = {
        modalState: true
    };

    this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
      this.setState({ modalState: !this.state.modalState });
      window.location.reload();

  }
  
    render() {
    
      return (
        <div>
        <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="text-right">
                        <button type="button" className="close" onClick={this.handleShow}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-center">
                     <img src="/images/delete-sign--v2.png" height="60px"></img>
                      <br/>
                      <br/>
                      <h4>{this.props.message}</h4>
                      </div>
                </div>
            </div>
        </div>
    </div>
       
      )
    }
  }
  
  export default Failure
  