import React from 'react';
import Child from './Child';
import Child1 from './Child1';
import Context from './Context'
import Context1 from './Context1'
import './App.css';


class App extends React.Component {
  constructor () {
    super();
    this.objRef = React.createRef();
  }
  state = {
    count: 0,
    showChild: true
  }
  handleToggleChild = () => {
    const { showChild } = this.state;
    this.setState({
      showChild: !showChild
    })
  } 
  handleChildPropsChange = () => {
    let {count} = this.state;
    count++;
    this.setState({
      count
    })
  }
  componentDidMount() {
    this.refs.stringRef.innerHTML = 'new String Ref';
    this.methodRef.innerHTML = 'new method ref';
    // this.objRef.current.innerHTML = 'new ObjRef'
  }
  render() {
    const {count, showChild} = this.state;
    return (
      <div>
        <span ref="stringRef">react ref</span>
        <span ref={(ref) => this.methodRef = ref}> method ref</span>
        <span red={this.objRef}>object ref</span>
        
        <div dangerouslySetInnerHTML={{
          __html: `<strong>string</strong>`
        }}>

        </div>
        <button onClick={this.handleChildPropsChange}>child component props change</button>
        <button onClick={this.handleToggleChild}> handleToggleChild</button>
        {
          !showChild?
          <Child count={count}/>: <Child1 count={count}></Child1>
        }
        <Context>
          小华
          <p>zzc</p> 19
          <p>age</p>
        </Context>
        <Context1></Context1>
      </div>
    )
  }
}
export default App;
