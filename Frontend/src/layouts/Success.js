


  import Modal from 'react-bootstrap/Modal'
  



  import React, { PureComponent } from 'react'
  import './Success.css'
  class Success extends PureComponent {
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
                    <br/>
                    <div className="modal-body text-center">
                     <img src="/images/check+checkbox+checkmark+confirm+success+yes+icon-1320196711226060446.png" height="40px"></img>
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
  
  export default Success
  