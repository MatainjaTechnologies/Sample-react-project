import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../assets/sass/app.sass';
import HeaderBar from "../components/header-bar";
import Body from "../components/body";
import Loader from "../components/loader";
import { fetchBuckets } from "../store/actions/bucketsActions";
class App extends Component {
    componentDidMount(){
        this.props.fetchBuckets();
    }
    render(){
        const { buckets } = this.props; 
        return(
            <React.Fragment>
                <HeaderBar titleText={"InnRoad"} />
                {buckets.length ? <Body buckets={buckets}/>:<div style={{textAlign: 'center', paddingTop: '60px'}}><Loader /></div>}
            </React.Fragment>
        );
    }
};
const mapStateToProps = (state) =>({
    buckets: state.buckets
});
const mapActionsToProps = {
    fetchBuckets: fetchBuckets,
};
export default connect(mapStateToProps, mapActionsToProps)(App);