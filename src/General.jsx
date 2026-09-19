import { useState } from "react"

export default function General({initialData , handleFormData}) {


    const [data, setData] = useState(initialData);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }))

        handleFormData(data)
    }


    return (
        <>
         <p className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" value={data.name || ''} onChange={handleChange} placeholder="Garion Charles" required />                    
            </p>

            <p className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email"  value={data.email || ''}  onChange={handleChange} placeholder="youremail@domain.com" required />                    
            </p>

            <p className="form-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" name="phone" value={data.phone || ''} onChange={handleChange} placeholder="Add your number" required />                    
            </p>

            <p className="form-group">
                <label htmlFor="summary">Bio</label>
                <textarea id="summary" type="textarea" name="summary" value={data.summary || ''} onChange={handleChange} placeholder="Add a brief bio about yourself" required />                    
            </p>                
        </>
    )
}