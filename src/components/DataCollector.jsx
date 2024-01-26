import React from 'react'
import { useState } from 'react'
import './datacollector.css'



function DataCollector() {

    const [user, setUser] = useState("Student")
    
    const handleUser = (event) => {
        event.preventDefault()
        setUser(event.target.value)
    }

    let [count, setCount] = useState(0)

    const addField = () => {
        if (count < 4) {
            setCount(prevCount => prevCount + 1)
        }
        return (
            <div>
                    <select name="fieldType" id="fieldType">
                        <option value="Text Box">Text Box</option>
                        <option value="dropDown">DropDown</option>
                        <option value="datePicker">Date Picker</option>
                    </select>
               </div>
        )
    }

    
    
    
  return (
    <div className='main-form'>
        <form>
            <div className='heading'>
                    <h1>DYNAMIC DATA COLLECTION</h1>
            </div>
            <div className="q1">
                <select name="user" id="user" className='user-selector' onChange={handleUser}>
                    <option value="student">Student</option>
                    <option value="salaried">Salaried</option>
                    <option value="business">Business</option>
                </select>  
                <input type="button" value="Add Field" onClick={addField} />
                {/* {count > 0 && (
                    {[...Array(count).keys()].map((index ) => (
                        <select name="field-type" key={index} id="field-type" className="field-type" onChange={addField}></select>

                    ))}
                )} */}
            </div>
        </form> 
    </div>
  )
}

export default DataCollector
