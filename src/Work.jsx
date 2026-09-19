import { useState } from "react"


export default function Work({initialData, handleFormData}) {


    const [data, setData] = useState(initialData);
    

    function handleChange(event, index) {

        const {name, value} = event.target

        const newWork = data.work.map((item, i) => {
            if(i == index) {
                return{...item, [name]: value}
            }
            return item
        })

        setData( (prev) => ({
            ...prev,
            work: newWork
        }) )

        handleFormData(data)
    }



    function addWork() {


        const newWork = {compnay: "", job: "", experience:"", description:"",}

        setData((prev) => ({
            ...prev,
            work: [...prev.work, newWork]
        }))

        handleFormData(data)

    }

    function deleteWork(index) {

        setData((prev) => ({
            ...prev,
            work: prev.work.filter((_, i) => i !== index)
        }));

        handleFormData(data)
      
    }

    function deleteButton(index) {
        if(index > 0) {
            return (
                <div style={{display:"flex", justifyContent:"end"}}>
                    <button
                        aria-label= {`Deletes work section ${index + 1}`}
                        className="delSecBtn" 
                        style={{background: "none", border: "none", cursor:"pointer"}} 
                        type="button" 
                        onClick={() => deleteWork(index)}
                    >
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </div>
            
            )
        }
    }

    return (

        <>

        {data.work.map((com, index) => (

            <section key={index}>
                <h3 style={{marginBottom:"1rem"}}>Work {index + 1}</h3>

                <p className="form-group">
                    <label htmlFor={"company"+ index + 1}>Company Name</label>
                    <input id={"company"+ index + 1} type="text" name="company" value={com.company || ''} onChange={(e) => handleChange(e, index)} placeholder="Google" required />                    
                </p>

                <p className="form-group">
                    <label htmlFor={"job"+ index + 1}>Job Title</label>
                    <input id={"job"+ index + 1} type="text" name="job" value={com.job || ''} onChange={(e) => handleChange(e, index)} placeholder="Software Engineer" required />                    
                </p>

                <p className="form-group">
                    <label htmlFor={"experience"+ index + 1}>Duration</label>
                    <input id={"experience"+ index + 1} type="text" name="experience" value={com.experience || ''} onChange={(e) => handleChange(e, index)} placeholder="2 Years" required />                    
                </p>
                <p className="form-group">
                    <label htmlFor={"description"+ index + 1}>Duties</label>
                    <textarea id={"description"+ index + 1} type="text" name="end" value={com.description || ''} onChange={(e) => handleChange(e, index)} placeholder="Add your job duties" required />                    
                </p>


                {deleteButton(index)}

                
                    
                                   
            </section>

        ))}

        <div style={{display:"flex", justifyContent:"center", marginBottom:"1rem"}}>
            <button
                aria-label= {`Creates a new work section`}
                className="createSecBtn"
                style={{background:"none", border:"none", cursor:"pointer"}}
                type="button" 
                onClick={addWork}
            >
                <span className="material-symbols-outlined">add_circle</span>
            </button>
        </div>

        

        </>
    )
}