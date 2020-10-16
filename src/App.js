import React from "react";

import Firebase from "firebase";
import config from "./config";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {

      result: []
    };
  }

  componentDidMount() {
    this.getUserData();

  }





  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      console.log(state);


      let result = [];


      for (let i in state.users) {

        let item = {
          name: state.users[i].name,
          account: state.users[i].account,
          apps: state.accounts[state.users[i].account].apps
        }
        result.push(item);

      }

      this.setState({ result: result });
     







    })
  }







  render() {
    const { result } = this.state;
    return (
      <React.Fragment>

        <div >
          <div >
            {result.map((item) =>

              <div className='Toast' style={{ margin: 10, }}>
                <div >
                  <div style={{ padding: 5 }} key={item.name}>Name:  {item.name}</div>
                  <div style={{ padding: 5 }} key={item.account}>AccountId:   {item.account}</div>

                  {
                    Object.keys(item.apps).map((app) => <div style={{ padding: 5 }}>   Apps: {item.apps[app].title}</div>)

                  }
                </div>



              </div>



            )}

          </div>
        </div>











      </React.Fragment>
    );
  }
}

export default App;
