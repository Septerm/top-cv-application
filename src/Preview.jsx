
export default function Preview({preData}) {

     const data = {
      name: "Garion Charles",
      email:"garioncharles@gmail.com",
      phone: "795-9468",
      summary: "I am a Msc Chemical and Process Engineering graduate from Trinidad and Tobago, currently learning web development via the Odin Project, to beable to further speacilized in the creation of engineering based software that can be utilzed in the energy industry, my hobbies also include game development and 3D modeling.",
      education: [

        {
          school: "The University of the West Indies",
          degree: "MSc. Chemical and Process Engineering",
          start: "1/9/2020",
          end: "1/9/2023",
        },
        {
          school: "The University of the West Indies",
          degree: "BSc. Chemical and Process Engineering",
          start: "1/9/2020",
          end: "1/9/2017",
        },

      ],
      work: [
        {
          company: "Kajabi",
          job: "Technical Support Agent",
          experience:"2 Years",
          description:"Performed high-level technical troubleshooting and root cause analysis (RCA) using a structured, repeatable method (diagnose, verify, test, escalate) to resolve issues and minimize downtime. Coordinated across internal teams, clients, and international support functions to translate technical detail into clear, actionable documentation and handoffs, maintaining a 90%+ client satisfaction rating. Tracked progress and maintained compliant documentation using Jira across a high-volume portfolio of 70+ cases per month, adhering to strict Standard Operating Procedures (SOPs) throughout. Escalated critical issues to senior engineers while retaining ownership, providing frequent status updates to keep stakeholders aligned until resolution",
        },
        {
          company: "Kajabi",
          job: "Technical Support Agent",
          experience:"2 Years",
          description:"Performed high-level technical troubleshooting and root cause analysis (RCA) using a structured, repeatable method (diagnose, verify, test, escalate) to resolve issues and minimize downtime. Coordinated across internal teams, clients, and international support functions to translate technical detail into clear, actionable documentation and handoffs, maintaining a 90%+ client satisfaction rating. Tracked progress and maintained compliant documentation using Jira across a high-volume portfolio of 70+ cases per month, adhering to strict Standard Operating Procedures (SOPs) throughout. Escalated critical issues to senior engineers while retaining ownership, providing frequent status updates to keep stakeholders aligned until resolution",
        }
      ],
    }

    return(

        <main>
            <section className="preview">

                <section className="header">
                    <h1>{data.name}</h1>
                    <div>
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                    </div>    
                </section>

                <section>
                    <p>{data.summary}</p>
                </section>

                <section className="education">
                    <h2 style={{marginBottom:"1rem"}}>Education</h2>
                    
                    {data.education.map((edu, index) => (
                        <section style={{marginBottom:"1rem"}} key={index}>
                            <div>{edu.start} - {edu.end}</div>
                            <div>{edu.degree},{edu.school}</div> 
                        </section>
                    ))}
                    
                </section>

                <section className="work">
                    <h2 style={{marginBottom:"1rem"}}>Work History</h2>
                    
                    {data.work.map((item, index) => (
                        <section style={{marginBottom:"1rem"}} key={index}>
                            <div  className="job">
                                <div>{item.job},{item.company}</div> 
                                <div>({item.experience})</div>
                            </div >

                            <div>
                                {item.description}
                            </div>
                            
                        </section>
                    ))}
                    
                </section>
                
            </section>

            
        </main>
        
    )
    
}


