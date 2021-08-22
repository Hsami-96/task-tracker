import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


const App = () => {
  const [tasks, setTasks] = useState([    
    {
        id: 1,
        text: 'Doc Appt',
        day: 'Feb 5th at 2:30PM',
        reminder: true
     },
     {
         id: 2,
         text: 'Mortgage Appt',
         day: 'Feb 5th at 7:30PM',
         reminder: false
      },
      {
         id: 3,
         text: 'Football',
         day: 'Feb 7th at 2:30PM',
         reminder: false
      }
    ])

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }
  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks to show')}
    </div>
  );
}

export default App;
