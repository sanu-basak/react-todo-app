import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';


function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const addToList = () => {
    if (value !== '') {
      setList([...list, { text: value, isDone: false }])
      setValue("");
      console.log('list', list)
    }
  }

  const deleteFromList = (index) => {
    const removeList = [...list];
    removeList.splice(index, 1);
    setList(removeList);
  }

  const markComplete = (index) => {
    const complteList = [...list];
    complteList[index].isDone = true;
    setList(complteList);

  }

  const editItem = (index) => {
    console.log(index);
  }


  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '50%' }}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter items here...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={e => setValue(e.target.value)}
              value={value || ""}
              type="text"
              name='todo'
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={addToList} >
              Add Item
            </Button>
          </InputGroup>
        </div>
        <Card style={{ width: '70%' }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 ?
                list.map((item, index) =>
                (<tr key={index}>
                  <td>1</td>
                  <td style={{ textDecoration: item.isDone ? 'line-through' : '' }}>{item.text}</td>
                  <td>
                    <Button variant="primary" onClick={() => editItem(index)}>Edit</Button>
                    <Button variant="success" onClick={() => markComplete(index)}>Complete</Button>
                    <Button variant="danger" onClick={() => deleteFromList(index)}>Delete</Button>
                  </td>

                </tr>)
                )
                :
                <tr><td>No Items found</td></tr>
              }

            </tbody>
          </Table>
        </Card>
      </header>
    </div >
  );
}

export default App;
