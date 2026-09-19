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
          experience:"",
          description:"",
        }
      ],
    }
  );



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
    <Form initialData={formData} onFormSubmit={handleFormSubmit} modalOpener={openModal} />
    {/* <Modal formData={formData} modalHandler={dialogRef} modalCloser={closeModal}/> */}
    <Preview preData={formData} />
    
    <Footer/>
  </div>
)
  
}

export default App
