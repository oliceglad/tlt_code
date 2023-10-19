import React from 'react'
import { connect } from 'react-redux';
import s from './showdata.module.scss'

const ShowData = ({data, form}) => {
    return (
        <div className={s.showData}>
            
            <div className={s.title} onClick={() => console.log(form)}>
                Рассчитать объем щебня по видео
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.main.data,
    form: state.main.form,
})

export const ShowDataContainer = connect(mapStateToProps)(ShowData)