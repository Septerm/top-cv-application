import { useRef, useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import Nav from './Nav.jsx'
import Modal from './Modal.jsx'
import Footer from './Footer.jsx'
import Preview from './Preview.jsx'

function App() {


  const [formData, setFormData] = useState(
    {
      name: "",
      email:"",
      phone: "",
      location: "",
      summary: "",
      education: [

        {
          school: "",
          degree: "",
          start: "",
          end: "",
        }
      ],
      work: [
        {
          company: "",
          job: "",
          workStart: "",
          workEnd: "",
          description:"",
        }
      ],
    }
  );


  const [isEdit, setIsEdit] = useState(false);



  const handleFormSubmit = (dataFromChild) => {
    setFormData(dataFromChild);
  }

  const dialogRef = useRef(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  }

  const closeModal = () => {
    dialogRef.current?.close();
  }

return (
  <div className='container'>
    <Nav/>
    {isEdit ? <Form initialData={formData} onFormSubmit={handleFormSubmit} previewHandler={setIsEdit}/> : <Preview preData={formData} previewHandler={setIsEdit} />}
    {/* <Form initialData={formData} onFormSubmit={handleFormSubmit} modalOpener={openModal} /> */}
    {/* <Modal formData={formData} modalHandler={dialogRef} modalCloser={closeModal}/> */}
    {/* <Preview preData={formData} /> */}
    
    <Footer/>
  </div>
)
  
}

export default App
