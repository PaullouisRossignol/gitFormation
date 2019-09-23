import React, { Component } from "react";
class Chat extends Component {
  constructor(props) {
    super(props);
   // this.handleChange = this.handleChange.bind(this);
    //this.handleSend = this.handleSend.bind(this);
    //this.changeName = this.changeName.bind(this);
    this.state = {
      chat: "",
      name: "defaut"
    };
  }
  render() {
    return (
      <div>
        <div class="display">
          {this.displayChat()}
          <div>
            <div>
              <div>
                <input
                  type="text"
                  name="User"
                  onChange={this.changeName}
                  value={this.state.name}
                />
              </div>
              <input
                type="text"
                name="chat"
                onChange={this.handleChange}
                value={this.state.chat}
              />
              <button onClick={this.handleSend}>Envoyer</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  changeName = (event) => {
    this.setState({ name: event.target.value });
  }
  // handleSend(send){
  //     this.setState({
  //         display: this.state.display.concat(this.state.chat), chat : ''
  //     });
  // }
  handleSend = (event) => {
    this.props.onSend(this.state.name, this.state.chat);
    this.setState({
      chat: ""
    });
  }
  // displayChat(){
  //     let chat = this.state.display.map((item) => {
  //         return (<p> {item} </p>);
  //     });

  //     return (<div class = "display">{chat}</div>);
  // }
  displayChat() {
    let chat = this.props.display.map(item => {
      return <p> {item} </p>;
    });

    return <div class="display">{chat}</div>;
  }
}
export default Chat;
