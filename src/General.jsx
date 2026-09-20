import { useState } from "react"

export default function General({initialData , handleFormData}) {


    const [data, setData] = useState(initialData);

    function handleChange(event){
        const {name, value} = event.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }))

        handleFormData((prev) => ({
            ...prev,
            [name]: value
        }))

        
    }


    return (
        <>
         <p className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" value={data.name || ''} onChange={(e) => handleChange(e)} placeholder="Garion Charles" autoComplete="name" required />                    
            </p>

            <p className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email"  value={data.email || ''}  onChange={(e) => handleChange(e)} placeholder="youremail@domain.com" autoComplete="email"  required />                    
            </p>

            <p className="form-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" name="phone" value={data.phone || ''} onChange={(e) => handleChange(e)} placeholder="Add your number" autoComplete="tel" required />                    
            </p>

            <p className="form-group">
                <label htmlFor="location">Address</label>
                <input id="location" type="text" name="location" value={data.location || ''} onChange={(e) => handleChange(e)} placeholder="Add your address" autoComplete="country"  required />                    
            </p>

            <p className="form-group">
                <label htmlFor="summary">Bio</label>
                <textarea id="summary" type="textarea" name="summary" value={data.summary || ''} onChange={(e) => handleChange(e)} placeholder="Add a brief bio about yourself" required />                    
            </p>                
        </>
    )
}