// create statefull component to keep track of team bu starting by class
class Team extends React.Component {
 constructor (props){
   super(props)

   this.state={
     shots:0,
     scores:0
   }
 }
 shotHandler = () =>{
   let scores = this.state.scores
   if(Math.random() > 0.5){
     scores +=1
   }
   this.setState((state, props) => ({
 shots: state.shots + 1,
  scores
   }))
 }
  render() {
    return <h1> yay!I'm the {this.props.name} <img alt="team logo"  src={this.props.logo}/> 
    shots :{this.state.shots}
    scores :{this.state.scores}
    <button onClick={this.shotHandler} > Shoot</button>
    </h1>
  }
}

// Deafault App component that all other compents are rendered through
function App(props) {
  return (
    <div>
      {/* <h1>Welcome to the sports game starter</h1> */}
      {/* This file represents the code after completing the setup step in the lab instructions */}
     {/* We can make as many components in one components(we make 2 teams) */} */}
      {/* <Team />
      <Team />
      Pass props to team (give names) */}

       <div className="status">

      <Team name="The Home Team" logo = "logo 1.jfif" />
      <div className="versus">
        <h1> VS</h1>
      </div>
      <Team name="The Away Team" logo = "logo 2.png" />
    
</div>
    </div>
  )
}

//Render the application
ReactDOM.render(
  <App />,
  document.getElementById('root')
);