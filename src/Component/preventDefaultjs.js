import React, { useState } from 'react'

function PreventDefaultjs() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const handlevalue=(e)=>{
        // e.preventDefault()
      console.log(e.target.value)
    }
   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here (e.g., validation, sending data to server)
        console.log('Form submitted:', formData);
    };

    const handleLinkClick = (e) => {
        // e.preventDefault();
                console.log('Link clicked, performing custom action');
    };
  return (
    <div>
         <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
      <input onChange={handlevalue}/>
      <a onClick={handleLinkClick}>Click Me</a>
    </div>
  )
}
export default  PreventDefaultjs;