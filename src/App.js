import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


const App = () => {
  const [tasks, setstate] = useState([    
    {
        id: 1,
        text: 'Doc Appt',
        day: 'Feb 5th at 2:30PM',
        reminder: false
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
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
