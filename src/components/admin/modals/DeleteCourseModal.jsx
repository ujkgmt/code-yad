import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
const DeleteCourseModal = () => {
   
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="danger" onClick={handleShow} >
              حذف
            </Button>
      
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              style={{"direction": "rtl"}}
            >
              <Modal.Header closeButton>
                <Modal.Title>حذف دوره</Modal.Title>
              </Modal.Header>
              <Modal.Body>
               
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  لغو
                </Button>
                <Button variant="danger">حذف دوره</Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      
    
    
}
 
export default DeleteCourseModal;