import React from 'react'
import { connect } from 'react-redux';


const ShowData = ({data}) => {
    return (
        <div>
            Привет
        </div>
    )
}


const mapStateToProps = (state) => ({
    data: state.main.data
})

export const ShowDataContainer = connect(mapStateToProps)(ShowData)