import React, {PropTypes,Component} from 'react';
import logo from './../img/welcome.png';
import './../styles/main.scss';
import LabelCustom from './LabelCustome.js';

class EmployeeDirectory extends Component {

/**
 * RootComponent constructor
 * @param props
 */
    constructor(props) {
    super(props);
    this._initEmployeeDirectory();
    this.onClickBtn = this.onClickBtn.bind(this);
    this.onChangeTxt = this.onChangeTxt.bind(this);
    this.state = {
      textValue:"No Text"
    };
}

/**
 * Custom Function - Method binding to 'this'
 * @private
 */
    _initEmployeeDirectory() {
    //bind custom function here
}

/**
 * Life Cycle function - componentWillMount
 */
    componentWillMount() {
      console.log("componentWillMount");
}

/**
 * Life Cycle function - componentDidMount
 */
    componentDidMount() {
  console.log("componentDidMount");
}

/**
 * Life Cycle function - componentWillReceiveProps
 * @param newProps
 */
    componentWillReceiveProps(newProps) {
  console.log("componentWillReceiveProps");
}

/**
 * Life Cycle function - shouldComponentUpdate
 * @param newProps
 * @param newState
 * @returns {boolean}
 */
    shouldComponentUpdate(newProps, newState) {
  console.log("shouldComponentUpdate");
    return true;
}

/**
 * Life Cycle function - componentWillUpdate
 * @param nextProps
 * @param nextState
 */
    componentWillUpdate(nextProps, nextState) {
  console.log("componentWillUpdate");
}

/**
 * Life Cycle function - componentDidUpdate
 * @param prevProps
 * @param prevState
 */
    componentDidUpdate(prevProps, prevState) {
  console.log("componentDidUpdate");
}

/**
 * Life Cycle function - componentWillUnmount
 */
    componentWillUnmount() {
  console.log("componentWillUnmount");
}

onClickBtn(event){
console.log("test");
console.log(event);
}

  onChangeTxt(event){
  console.log(event.target.value);
  this.setState({textValue:event.target.value})
}

/**
 * Life Cycle function - render
 * @returns {XML}
 */
    render() {
    return (

        <div className='container-fluid'>
          <input type="text" onChange={this.onChangeTxt}/>
          <input type="button" value="Click " onClick={this.onClickBtn}/>
          <LabelCustom labelText={this.state.textValue}></LabelCustom>

        </div>
    );
}
}

/**
 *
 * @type {{}}
 */
EmployeeDirectory.propTypes = {};

/**
 *
 * @type {{}}
 */
EmployeeDirectory.defaultProps = {};

export default EmployeeDirectory;
