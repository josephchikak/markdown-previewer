import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { marked } from "marked";

const initialState = `
**Markdown Converter**

# Written in React
## Manchester United

- The best club in the world
- The best coach of all time!
- The greatest football fanbase!

[manutd](https://www.manutd.com/)

\`<div></div>\`

Stars:
\`\`\`
  Ronaldo
  Marcus Rashford
  Bruno Fernandes
\`\`\`

![Premier League](https://www.logolynx.com/images/logolynx/02/0203e048902f3d2e7a998deb16a277bc.jpeg)
`
class App extends React.Component{ 

 constructor(props){
  super(props);
  this.state ={
      input: initialState
  }
  // this.handleClick = this.handleClick.bind(this)
 }


// to recieve changes in text and set markdown to new text
 handleChange = (event) =>{
  this.setState({
    input: event.target.value
  })
 }

 handleClick = () =>{
  this.setState({
      input:''
  })
}

  render() {
    // destructure markdown from this.state to be able to use mardown as a word 
    const {input} = this.state;
    
    // convert input to marked
    const markdown = marked(input);

    return (
      <div>
        <h1 style={{color: 'white'}}>Markdown Converter</h1>
        <div className='container'>
          <div className='editor'>
              <h3 style={{color: 'white'}}>INPUT TEXT:</h3>
              <div className='editorHead'>
                <p></p>
                <button className="btn-close btn-close-white" aria-label="Close" type='button' onClick={this.handleClick}></button>
              </div>
              <textarea id='editor' value={input} onChange={this.handleChange}/>
          </div>
          < div className='preview'>
              <h3 style={{color: 'white'}}>MARKDOWN</h3>
              <div id='preview' dangerouslySetInnerHTML={{__html:markdown}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
