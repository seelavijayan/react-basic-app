// import Message from "./Message";
import Clock from "./Clock";
import Greeting from "./Greeting";
import LoginControl from "./LoginControl";
import NumberList from "./NumberList";
import ToggleButton from "./ToggleButton";
import UserForm from "./UserForm";
import Welcome from "./Welcome";

//App Function
function App() {

  //   //formatName function
  //  function formatName(userName){
  //     return userName.toUpperCase()
  //   };

  //   //getGreetings Function
  //   function getGreetings(userName){
  //     if(userName){
  //       return <h1>Hello {formatName(userName)}</h1>
  //     }
  //     else{
  //       return <h1>Hello Stranger</h1>
  //     }
  //   };

  //   const name = 'Seela Vijayan';
  //   const userImage = '/logo192.png';

  //   const image = <img className="sample-class" src={userImage} alt="logo"/>
  //   // const element = <h1>Hello {formatName(name)} !</h1>
  //   const element = <div>
  //     <h1>Hello {name}</h1>
  //     <p>Good To See You</p>
  //     {image}
  //   </div>

  //   return (
  //     // element
  //     // getGreetings()
  //     // image
  //     element
  //   );
  const numbers = [11, 22, 23, 33, 44, 55, 'test'];
  const numbers2 = [1, 2, 3, 4, 5];
  const todos = [
    { id: '1', name: "coding", isDone: false },
    { id: '2', name: "walking", isDone: true }
  ]

  return (
    <div>
      <Welcome name="Vijayan" />
      <Clock />
      <ToggleButton />
      {/* <Greeting isLoggedIn/> */}
      <LoginControl
        hasNewMessage={true}
        credit={100}
        hasWarning={true} />
      <NumberList numbers={numbers} />
      <NumberList numbers={numbers2} />
      <ul>
        {todos.map(todo => (<li key={todo.id}>{todo.name} - {todo.isDone ? 'Done' : ""}</li>))}
      </ul>
      <UserForm/>
      {/* <Message message="React Is Great"/> */}
    </div>
  );
}

export default App;
