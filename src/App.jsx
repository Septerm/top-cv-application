import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import Nav from './Nav.jsx'
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
      skills: [""]
    }
  );


  const [isEdit, setIsEdit] = useState(true);



  const handleFormSubmit = (dataFromChild) => {
    setFormData(dataFromChild);
  }

 

 

return (
  <div className='container'>
    <Nav/>
    {isEdit ? <Form initialData={formData} onFormSubmit={handleFormSubmit} previewHandler={setIsEdit}/> : <Preview preData={formData} previewHandler={setIsEdit} />}
    <Footer/>
  </div>
)
  
}

export default App
