import { Button, Modal } from "react-bootstrap";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createNewCourse } from "../../../actions/courses";

const NewCourseModal = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [info, setInfo] = useState();
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      let data = new FormData();
      data.append("title",String(title) );
      data.append("price", Number.parseInt(price));
      data.append("imageUrl", selectedFile);
      data.append("info", info);

      //Dispatch
      dispatch(createNewCourse(data));
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
   
      <>
        <Button variant="primary mt-3" onClick={handleShow}>
          <i className="fa fa-plus mx-2" aria-hidden="true"></i>
          اضافه کردن دوره جدید
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          dir="rtl"
        >
          <Modal.Header closeButton>
            <Modal.Title>فرم ساخت دوره جدید</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">
                  عنوان دوره
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="عنوان دوره"
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ direction: "rtl" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" class="form-label">
                  قیمت دوره (تومان)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="قیمت دوره"
                  onChange={(e) => setPrice(e.target.value)}
                  style={{ direction: "rtl" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" class="form-label">
                  انتخاب عکس دوره
                </label>

                <input
                  className="form-control"
                  name="imageUrl"
                  type="file"
                  id="formFile"
                  style={{ direction: "rtl" }}
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" class="form-label">
                  توضیحات دوره
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) => setInfo(e.target.value)}
                  placeholder="توضیحات"
                ></textarea>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              انصراف
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              ثبت دوره
            </Button>
          </Modal.Footer>
        </Modal>
      </>
   
  );
};

{
  /* render(<Example />); */
}

export default NewCourseModal;
