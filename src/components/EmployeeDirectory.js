import React, {PropTypes,Component} from 'react';
import logo from './../img/welcome.png';
import './../styles/main.scss';

class EmployeeDirectory extends Component {

/**
 * RootComponent constructor
 * @param props
 */
    constructor(props) {
    super(props);
    this._initEmployeeDirectory();
    this.state = {};
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
}

/**
 * Life Cycle function - componentDidMount
 */
    componentDidMount() {
}

/**
 * Life Cycle function - componentWillReceiveProps
 * @param newProps
 */
    componentWillReceiveProps(newProps) {
}

/**
 * Life Cycle function - shouldComponentUpdate
 * @param newProps
 * @param newState
 * @returns {boolean}
 */
    shouldComponentUpdate(newProps, newState) {
    return true;
}

/**
 * Life Cycle function - componentWillUpdate
 * @param nextProps
 * @param nextState
 */
    componentWillUpdate(nextProps, nextState) {
}

/**
 * Life Cycle function - componentDidUpdate
 * @param prevProps
 * @param prevState
 */
    componentDidUpdate(prevProps, prevState) {
}

/**
 * Life Cycle function - componentWillUnmount
 */
    componentWillUnmount() {
}

/**
 * Life Cycle function - render
 * @returns {XML}
 */
    render() {
    return (
    
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-12">
                    <img src={logo} alt=""/>
                        <h1>
                            Welcome to React Starter Kit
                        </h1>
                        <p>Powered with Bootstratp (V3)</p>
                </div>
            </div>
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