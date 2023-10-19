import React, { useState } from "react";
import s from './upload.module.scss'
import { connect } from 'react-redux';
import { postDataFile } from "../../redux/main-reducer";


const UploadFile = ({postDataFile, data}) => {
    const [drag, setDrag] = useState(false)

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
        let files = [...e.dataTransfer.files]
        const formData = new FormData()
        formData.append('file', files[0])
        postDataFile(formData)
        setDrag(false)
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
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                >Перетащите файлы, чтобы загрузить их</div>
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    data: state.main.data
})

export const UploadFileContainer = connect(mapStateToProps, { postDataFile })(UploadFile)