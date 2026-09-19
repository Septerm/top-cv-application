import { useState } from "react"


export default function Education({initialData,handleFormData}) {


    const [data, setData] = useState(initialData);
    

    function handleChange(event, index) {

        const {name, value} = event.target

        const newEducation = data.education.map((item, i) => {
            if(i == index) {
                return{...item, [name]: value}
            }
            return item
        })

        setData( (prev) => ({
            ...prev,
            education: newEducation
        }) )

        handleFormData(data)
    }



    function addEducation() {


        const newEducation = {school: "", degree: "", start:"", end:"",}

        setData((prev) => ({
            ...prev,
            education: [...prev.education, newEducation]
        }))

        handleFormData(data)

    }

    function deleteEducation(index) {

        setData((prev) => ({
            ...prev,
            education: prev.education.filter((_, i) => i !== index)
        }));

        handleFormData(data)
      
    }

    function deleteButton(index) {
        if(index > 0) {
            return (
            <div style={{display:"flex", justifyContent:"end"}}>
                <button
                    aria-label= {`Deletes education section ${index + 1}`}
                    className="delSecBtn" 
                    style={{background: "none", border: "none", cursor:"pointer"}} 
                    type="button" 
                    onClick={() => deleteEducation(index)}
                >
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
            
        )
        }
    }

    return (

        <>

        {data.education.map((edu, index) => (

            <section key={index}>
                <h3 style={{marginBottom:"1rem"}}>Education {index + 1}</h3>

                <p className="form-group">
                    <label htmlFor={"school"+ index + 1}>Collage Name</label>
                    <input id={"school"+ index + 1} type="text" name="school" value={edu.school || ''} onChange={(e) => handleChange(e, index)} placeholder="Your University Name" required />                    
                </p>

                <p className="form-group">
                    <label htmlFor={"degree"+ index + 1}>Degree</label>
                    <input id={"degree"+ index + 1} type="text" name="degree" value={edu.degree || ''} onChange={(e) => handleChange(e, index)} placeholder="Bsc Computer Science" required />                    
                </p>

                <p className="form-group">
                    <label htmlFor={"start"+ index + 1}>Study Start Date</label>
                    <input id={"start"+ index + 1} type="date" name="start" value={edu.start || ''} onChange={(e) => handleChange(e, index)} required />                    
                </p>
                <p className="form-group">
                    <label htmlFor={"end"+ index + 1}>Study End Date</label>
                    <input id={"end"+ index + 1} type="date" name="end" value={edu.end || ''} onChange={(e) => handleChange(e, index)} required />                    
                </p>


                {deleteButton(index)}

                
                    
                                   
            </section>

        ))}

        <div style={{display:"flex", justifyContent:"center", marginBottom:"1rem"}}>
            <button
                aria-label= {`Creates a new education section`}
                className="createSecBtn"
                style={{background:"none", border:"none", cursor:"pointer"}}
                type="button" 
                onClick={addEducation}
            >
                <span className="material-symbols-outlined">add_circle</span>
            </button>
        </div>

        

        </>
    )
}