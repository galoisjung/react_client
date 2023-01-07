import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Popup({open, setPopup, message, title, callback}) {
    const handleClose = () => {
      setPopup({open: false});
      if(callback){
        callback();
      }
    }

    return (
      <>
        <Modal show={open} onHide={handleClose} style={{
    // overlay: {
    //   position: 'absolute',
    //   top: '50%',
    //   left: '50%',
    //   // transform: translate('-50%', '-50%'),
    //   backgroundColor: 'rgba(255, 255, 255, 0.75)'
    // },
    // content: {
    //   position: 'absolute',
    //   top: '40px',
    //   left: '40px',
    //   right: '40px',
    //   bottom: '40px',
    //   border: '1px solid #ccc',
    //   background: '#fff',
    //   overflow: 'auto',
    //   WebkitOverflowScrolling: 'touch',
    //   borderRadius: '4px',
    //   outline: 'none',
    //   padding: '20px'
    // }
  }}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Popup;