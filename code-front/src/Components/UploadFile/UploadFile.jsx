import React, { useState } from "react";
import s from './upload.module.scss'
import { connect } from 'react-redux';
import { setDataFile, postDataFile } from "../../redux/main-reducer";


const UploadFile = ({form , setDataFile, postDataFile}) => {
    const [drag, setDrag] = useState(false)
    const [files, setFiles] = useState([])

    const dragStartHandler = (e) => {
        e.preventDefault()
        setDrag(true)
    }


    const dragLeaveHandler = (e) => {
        e.preventDefault()
        setDrag(false)
    }

    const onDropHandler = (e) => {
        e.preventDefault()
        setFiles([...e.dataTransfer.files])
        const formData = new FormData()
        formData.append('file', files[0])
        console.log(formData)
        setDataFile({'file': files[0]})
        console.log(form)
        setDrag(false)
    }

    const onClickHandler = (e) => {
        return 
    }


    return (
        <div className={s.uploadFile}>

            {drag
                ? <div
                    className={s.dragArea}
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => onDropHandler(e)}
                >Отпустите файлы, чтобы загрузить их</div>
                : <div
                    className={s.dragArea}
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                >Перетащите файлы, чтобы загрузить их</div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    form: state.main.form
})

export const UploadFileContainer = connect(mapStateToProps, { setDataFile, postDataFile })(UploadFile)