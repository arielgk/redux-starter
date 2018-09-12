import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as itemsActions from "../actions/itemActions";
import {bindActionCreators} from "redux";

class Items extends React.Component{
    componentDidMount(){
        this.props.actions.getItems();
    }
    render(){
        return(
            <div>
                {this.props.items.map((i, index) => {
                    return <div key={i.text + '-' + index}>
                        {i.text}
                    </div>
                })}
            </div>


        )
    }
}


Items.propTypes = {
    items:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {

    return {
        items: state.items,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators({...itemsActions}, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Items);
