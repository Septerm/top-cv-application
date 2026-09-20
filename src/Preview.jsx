import { useState } from "react";

export default function Preview({preData, previewHandler}) {

  const data = preData;


    const [paint , setPaint] = useState("rgb(202, 112, 28)")
    const cvStyle = {

        color: paint,
    }

    function handlePaint(e) {
        setPaint(e.target.value)
    }

    return(

        <main>
            <div className="previewControl">
                <button type="button" onClick={()=> previewHandler(true)}>Edit</button>
                <input type="color" value={paint} onChange={handlePaint} />
            </div>
            <section className="preview">

                <section className="header">
                    <h1 style={cvStyle}>{data.name}</h1>
                    <address>
                        <p>{data.location}</p>
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                    </address>    
                </section>

                <section>
                    <p>{data.summary}</p>
                </section>

                <section className="work">
                    <h2 style={{marginBottom:"1rem", color: cvStyle.color, borderBottom: "solid 1px black", paddingBottom:"0.2rem"}}>Work History</h2>
                    
                    {data.work.map((item, index) => (
                        <section style={{marginBottom:"1rem"}} key={index}>
                            <div  className="job">
                                <p><span style={{fontWeight:"bold", color:cvStyle.color}}>{item.job}</span>, {item.company}</p> 
                                <p>({item.workStart} - {item.workEnd || "Present"})</p>
                            </div >

                            <p>
                                {item.description}
                            </p>
                            
                        </section>
                    ))}
                    
                </section>

                <section className="education">
                    <h2 style={{marginBottom:"1rem", color: cvStyle.color, borderBottom: "solid 1px black", paddingBottom:"0.2rem"}}>Education</h2>
                    
                    {data.education.map((edu, index) => (
                        <section style={{marginBottom:"1rem"}} key={index}>
                            <div>{edu.start} - {edu.end || "In Progress"}</div>
                        <div><span style={{fontWeight:"bold", color:cvStyle.color}}>{edu.degree}</span>, {edu.school}</div> 
                        </section>
                    ))}
                    
                </section>

                
                
            </section>

            
        </main>
        
    )
    
}


