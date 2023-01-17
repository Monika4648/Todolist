import React, { useState } from 'react'

function TodoList() {


  const [state, setstate] = useState([
    "grapes","mango"
  ])
  const [text, settext] = useState("")
  const [edit, setedit] = useState("")
  const addtodo = (todo) => {
    setedit("")
    settext("")
    if (edit) {
      const data = state.map((item, index) => item === edit ? item = text : item)
      setstate(data)
      
    } else {
      if(text){
        setstate([...state,text])
      }else{
        alert("please enter some text")
      }
     
     
    }

  }
  
  const handleedit = (item) => {
    settext(item)
    setedit(item)
  }
  const deleteTodo = (item) => {
    const data = state.filter((items, index) => items !== item)
    setstate(data)
  }
  return (
    <div style={{
      height: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex', padding: 18, flexDirection: 'column',overflow:'scroll',
        height: "50%", width: "40%", alignItems: 'center', boxShadow: '1px 2px 9px gray',
      }}>
        <h2>TODO LIST</h2>
        <div style={{
          display: 'flex', padding: 18, flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{ display: 'flex' }}>
            <input type='text' value={text} style={{ height: 40, width: 200, padding: 2 }}
              onChange={(e) => settext(e.target.value)} placeholder='enter Todo' />
            <button onClick={() => addtodo()}>{edit?"edit":"add"}</button>
          </div>
          {
            state.map((item, index) => {
              return (
                <div style={{ display: 'flex', width: '100%', alignItems: "center", justifyContent: 'space-between' }}>
                  <h3>{index + 1}.{item}</h3>
                  <div>
                    <button onClick={() => handleedit(item)}>edit</button>
                    <button onClick={() => deleteTodo(item)}>delete</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TodoList