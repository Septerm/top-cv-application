import { useState } from "react"


export default function Form({initialData, onFormSubmit, modalOpener}) {

    const [inputs, setInputs] = useState(initialData);


    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(inputs)
        modalOpener()
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>

                <section>
                    <h2>General Information</h2>

                    <p className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name" value={inputs.name || ''} onChange={handleChange} placeholder="Garion Charles" required />                    
                    </p>

                    <p className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email"  value={inputs.email || ''}  onChange={handleChange} placeholder="youremail@domain.com" required />                    
                    </p>

                    <p className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" type="tel" name="phone" value={inputs.phone || ''} onChange={handleChange} placeholder="Add your number" required />                    
                    </p>

                    <p className="form-group">
                        <label htmlFor="summary">Bio</label>
                        <textarea id="summary" type="textarea" name="summary" value={inputs.summary || ''} onChange={handleChange} placeholder="Add a brief bio about yourself" required />                    
                    </p>                
                </section>

                <section>
                    <h2>Educational Information</h2>

                    <p className="form-group">
                        <label htmlFor="school">Collage Name</label>
                        <input id="school" type="text" name="school" value={inputs.school || ''} onChange={handleChange} placeholder="Your University Name" required />                    
                    </p>

                    <p className="form-group">
                        <label htmlFor="degree">Degree</label>
                        <input id="degree" type="text" name="degree" value={inputs.degree || ''} onChange={handleChange} placeholder="Bsc Computer Science" required />                    
                    </p>

                    <p className="form-group">
                        <label htmlFor="start">Study Start Date</label>
                        <input id="start" type="date" name="start" value={inputs.start || ''} onChange={handleChange} required />                    
                    </p>
                    <p className="form-group">
                        <label htmlFor="end">Study End Date</label>
                        <input id="end" type="date" name="end" value={inputs.end || ''} onChange={handleChange} required />                    
                    </p>
                    
                                   
                </section>

                <section>
                    <h2>Work Experience</h2>

                    <p className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input id="company" type="text" name="company" value={inputs.company || ''} onChange={handleChange} placeholder="Google" required/>                    
                    </p>

                    <p className="form-group">
                        <label htmlFor="job">Job Title</label>
                        <input id="job" type="text" name="job" value={inputs.job || ''} onChange={handleChange} placeholder="Software Engineer" required />                    
                    </p>

                    <p className="form-group">
                        <label htmlFor="experience">Duration</label>
                        <input id="experience" type="text" name="experience" value={inputs.experience || ''} onChange={handleChange} placeholder="2 Years" required />                    
                    </p>
                    <p className="form-group">
                        <label htmlFor="description">Duties</label>
                        <textarea id="description" type="textarea" name="description" value={inputs.description || ''} onChange={handleChange} placeholder="Add your job duties" required />                    
                    </p>       
               
                </section>                
                <div className="submit-box">
                    <button type="submit" >Generate CV</button>
                    
                </div>

            </form>
        </main>
    )
}