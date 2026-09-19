import { useState } from "react"
import Education from "./Education";
import Work from "./Work";
import General from "./General";


export default function Form({initialData, onFormSubmit, modalOpener}) {

    const [inputs, setInputs] = useState(initialData);

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(inputs)
        modalOpener()
    }


    const dummyData = {
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

    return (
        <main>
            <form onSubmit={handleSubmit}>

                <section>
                    <h2>General Information</h2>

                    <General initialData={dummyData}/>
                </section>

                <section>
                    <h2>Educational Information</h2>
                    <Education initialData={dummyData}/>
                </section>

                <section>
                    <h2>Work Experience</h2>
                    <Work initialData={dummyData}/>
                </section>     

                <div className="submit-box">
                    <button type="submit" >Generate CV</button>
                </div>

            </form>
        </main>
    )
}