import React, {PropTypes,Component} from 'react';

class LabelCustom extends Component {

  /**
   * RootComponent constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.onChangeTxt = this.onChangeTxt.bind(this);
    this.state = {
      textValue:"No Text"
    };
  }

  /**
   * Life Cycle function - componentWillMount
   */
  componentWillMount() {
    //console.log("componentWillMount");
  }

  /**
   * Life Cycle function - componentDidMount
   */
  componentDidMount() {
    //console.log("componentDidMount");
  }

  /**
   * Life Cycle function - componentWillReceiveProps
   * @param newProps
   */
  componentWillReceiveProps(newProps) {
    //console.log("componentWillReceiveProps");
  }

  /**
   * Life Cycle function - shouldComponentUpdate
   * @param newProps
   * @param newState
   * @returns {boolean}
   */
  shouldComponentUpdate(newProps, newState) {
    //console.log("shouldComponentUpdate");
    return true;
  }

  /**
   * Life Cycle function - componentWillUpdate
   * @param nextProps
   * @param nextState
   */
  componentWillUpdate(nextProps, nextState) {
    //console.log("componentWillUpdate");
  }

  /**
   * Life Cycle function - componentDidUpdate
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState) {
    //console.log("componentDidUpdate");
  }

  /**
   * Life Cycle function - componentWillUnmount
   */
  componentWillUnmount() {
  //  console.log("componentWillUnmount");
  }

  /**
   * Custom Function - Method binding to 'this'
   * @private
   */
  LabelCustom() {
    //bind custom function here
  }

  onClickBtn(event){
   // console.log("test");
   // console.log(event);
  }

  onChangeTxt(event){
    //console.log(event.target.value);
    this.setState({textValue:event.target.value});
  }

  /**
   * Life Cycle function - render
   * @returns {XML}
   */
  render() {
    return (

      <div className="container-fluid">
        <label>{this.props.labelText}</label>
      </div>
    );
  }
}

/**
 *
 * @type {{}}
 */
LabelCustom.defaultProps = {
  labelText: React.PropTypes.string
};

export default LabelCustom;
