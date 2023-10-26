import React, { useState } from 'react';

function UseStateDemo() {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        if (item !== '') {
            setItems([...items, item]);
            setItem('');
        }
    };

    const handleDelete = (item) => {
        const fItems = items.filter((it) => it !== item);
        setItems(fItems);
    };

    const tdata = items.map((it, index) => (
        <tr key={index}>
            <td cellpadding="20px"><span>{it}</span></td>
            <td><button onClick={() => handleDelete(it)}>Delete</button></td>
        </tr>
    ));

    return (
        <div>
            <input type="text" size="20" value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={handleAddItem}>Add</button>
            <h1>useState() Demo</h1>
            <h1>Add User List</h1>
            <table border="1" align="center">
                <tbody>{tdata}</tbody>
            </table>
        </div>
    );
}

export default UseStateDemo;
