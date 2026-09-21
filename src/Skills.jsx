import { useState } from "react";

export default function Skills({initialData, handleFormData}) {



    const data = initialData;
    


    function handleChange(event, index) {
        const {value} = event.target
        const newSkills = data.skills.map( (skill, i) => {
            if(i == index) {
                return value
            }

            return skill
        })

        handleFormData((prev) => ({
            ...prev,
            skills: newSkills
        }))
    }

    function addSkill () {
        handleFormData((prev) => ({
            ...prev,
            skills: [...prev.skills, ""]
        }))
    }

    function deleteSkill(index) {

        handleFormData((prev) => ({
            ...prev,
            skills: prev.skills.filter((_,i) => i !== index)
        }))
    }


    function deleteButton(index) {
        if(index > 0) {
            return (
                <div style={{display:"flex", justifyContent:"end"}}>
                    <button
                        aria-label= {`Deletes skill section ${index + 1}`}
                        className="delSecBtn" 
                        style={{background: "none", border: "none", cursor:"pointer"}} 
                        type="button" 
                        onClick={() => deleteSkill(index)}
                    >
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </div>
            
            )
        }
    }

    return (
        <>

        {data.skills.map((skill, index) => (
            <section key={index}>

                <p className="form-group">
                    <label htmlFor={`skill-${index + 1}`}>Skill {index + 1}</label>
                    <input id={`skill-${index + 1}`} type="text" name="skill" value={skill || ''}  onChange={(e) => handleChange(e, index)} required />
                </p>

                {deleteButton(index)}

            </section>
        ))}

         {data.skills.length < 9 && <div style={{display:"flex", justifyContent:"center", marginBottom:"1rem"}}>
            <button
                aria-label= {`Creates a new work section`}
                className="createSecBtn"
                style={{background:"none", border:"none", cursor:"pointer"}}
                type="button" 
                onClick={addSkill}
            >
                <span className="material-symbols-outlined">add_circle</span>
            </button>
        </div>}
        
        
        </>
    )



}