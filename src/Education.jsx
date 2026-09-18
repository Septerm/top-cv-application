import { useState } from "react"


export default function Education() {



   const  [data, setData] = useState(

    [
        {
            school: "tom",
            degree: "tom",
            start: "",
            end: "",
        },

        {
            school: "",
            degree: "",
            start: "",
            end: "",
        },
    ]

    )

    

    const [newData, setNewData] = useState(

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
    )

    function newHandleChange(event, index) {

        const {name, value} = event.target

        const newEducation = newData.education.map((item, i) => {
            if(i == index) {
                return{...item, [name]: value}
            }
            return item
        })

        setNewData( (prev) => ({
            ...prev,
            education: newEducation
        }) )
    }


    function handleChange(event, index) {

        const {name, value} =event.target

        //this will need to be updated 

        setData((prev) =>
            prev.map((item, i) => {
                if(i == index) {
                    return{...item, [name]: value};
                }
                return item;
            })
        )
        
    }

    function addEducation() {


        const newEducation = {school: "", degree: "", start:"", end:"",}

        setNewData((prev) => ({
            ...prev,
            education: [...prev.education, newEducation]
        }))

    }

    function deleteEducation(index) {

        setNewData((prev) => ({
            ...prev,
            education: prev.education.filter((_, i) => i !== index)
        }));
      
    }

    return (

        <div>

        {newData.education.map((edu, index) => (

            <section key={index}>
                <h2>Education {index + 1}</h2>

                <p className="form-group">
                    <label htmlFor={"school"+ index + 1}>Collage Name</label>
                    <input id={"school"+ index + 1} type="text" name="school" value={edu.school || ''} onChange={(e) => newHandleChange(e, index)} placeholder="Your University Name" required />                    
                </p>

                <p className="form-group">
                    <label htmlFor={"degree"+ index + 1}>Degree</label>
                    <input id={"degree"+ index + 1} type="text" name="degree" value={edu.degree || ''} onChange={(e) => newHandleChange(e, index)} placeholder="Bsc Computer Science" required />                    
                </p>

                <p className="form-group">
                    <label htmlFor={"start"+ index + 1}>Study Start Date</label>
                    <input id={"start"+ index + 1} type="date" name="start" value={edu.start || ''} onChange={(e) => newHandleChange(e, index)} required />                    
                </p>
                <p className="form-group">
                    <label htmlFor={"end"+ index + 1}>Study End Date</label>
                    <input id={"end"+ index + 1} type="date" name="end" value={edu.end || ''} onChange={(e) => newHandleChange(e, index)} required />                    
                </p>

                <button type="button" onClick={() => deleteEducation(index)}>Delete Education</button>
                    
                                   
            </section>

        ))}

        <button type="button" onClick={addEducation}>Add Education</button>

        </div>
    )
}