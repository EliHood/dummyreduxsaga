import Home from '../Home'
import {connect} from 'react-redux';
import {fetchDataInit} from '../actions/dataActions';

const mapStateToProps = (state) => ({
    data: state.data,
 })
const mapDispatchToProps = (dispatch) => ({
    fetchDataInit: () => dispatch(fetchDataInit()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)