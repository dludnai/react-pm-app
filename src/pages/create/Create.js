import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useCollection } from '../../hooks/useCollection';

// Styles
import './Create.css';


// Array of objects, categories will be constant
const categories = [
    { value: 'development', label: 'Development'},
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
]

// <option value="">label</option>

export default function Create() {

    // Get all the documents

    const { documents } = useCollection('users');
    //console.log(documents);

    const [users, setUsers] = useState([]);

    // Form field values
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const [assignedUsers, setAssignedUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, details, dueDate, category.value);
    }

    return (
        <div className="create-form">
            <h2 className="page-title">Create a new project</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Project name:</span>
                    <input
                        required 
                        type="text" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <span>Project details:</span>
                    <textarea
                        required 
                        type="text" 
                        onChange={(e) => setDetails(e.target.value)}
                        value={details}
                    ></textarea>
                </label>
                <label>
                    <span>Set due date:</span>
                    <input
                        required 
                        type="date" 
                        onChange={(e) => setDueDate(e.target.value)}
                        value={dueDate}
                    />
                </label>
                <label>
                    <span>Category select:</span>
                    <Select
                        onChange={(option) => setCategory(option)}
                        options={categories} 
                    />
                </label>
                <label>
                    <span>Assign to:</span>
                    <Select 
                        options={users}
                    /> 
                </label>

                <button className="btn">Add Project</button>
            </form>
        </div>
    )
}