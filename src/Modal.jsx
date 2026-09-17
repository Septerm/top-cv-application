

export default function Modal({formData, modalHandler, modalCloser}) {



    return (

        <dialog id="my-dialog" ref={modalHandler} style={{border: "none"}}>

            <div style={{maxWidth: "700px"}} >
                <div className="heading" style={{backgroundColor: "rgb(5, 51, 88)", padding: "2rem 4rem ", color: "white"}}>
                    <h2 style={{fontSize: "3rem"}}>{formData.name}</h2>
                </div>

                <section style={{paddingLeft: "4rem", paddingRight: "4rem", paddingTop: "2rem"}}>{formData.summary}</section>

                <section style={{paddingLeft: "4rem", paddingRight: "4rem"}}>
                    <h3 style={{marginBottom: "1rem", marginTop: "1rem", fontSize: "2rem"}}>Contact</h3>
                    <p>Email Address: {formData.email}</p>
                    <p>Phone Number: {formData.phone}</p>
                </section>

                <section style={{paddingLeft: "4rem", paddingRight: "4rem"}}>
                    <h3 style={{marginBottom: "1rem", marginTop: "1rem", fontSize: "2rem"}}>Education</h3>
                    
                    <p>{formData.school}</p>
                    <p>Degree: {formData.degree}</p>
                    <p>Start Date: {formData.start}</p>
                    <p>End Date: {formData.end}</p>
                
                </section>

                <section style={{paddingLeft: "4rem", paddingRight: "4rem"}}>
                    <h3 style={{marginBottom: "1rem" , marginTop: "1rem" , fontSize: "2rem"}}>Work Experience</h3>
                    <p>Company: {formData.company}</p>
                    <p>Job Title: {formData.job}</p>
                    <p style={{marginBottom:"1rem"}}>Experience: {formData.experience}</p>
                    <p>{formData.description}</p>
                </section>
            </div>
                
            <div style={{padding: "4rem", display:"flex", justifyContent:"center", gap: "1rem"}}>
                <button className="modalBtn" type="button" onClick={modalCloser} >Edit</button>
                <button className="modalBtn"type="button" onClick={() => window.print()} >Print</button>
            </div>
                
        </dialog>


        
    )
    
}