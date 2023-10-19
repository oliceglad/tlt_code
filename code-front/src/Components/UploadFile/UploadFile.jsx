import React, { useState } from "react";
import s from './upload.module.scss'
import { connect } from 'react-redux';
import { postDataFile } from "../../redux/main-reducer";


const UploadFile = ({ data, postDataFile }) => {
    const [drag, setDrag] = useState(false)
    const [files, setFiles] = useState([])
    const [formData, setFormData] = useState(new FormData())

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
        let filesMap = [...e.dataTransfer.files]
        if (filesMap[0].name.toLowerCase().indexOf('.jpg') !== -1 || filesMap[0].name.toLowerCase().indexOf('.mp4') !== -1 || filesMap[0].name.toLowerCase().indexOf('.png') !== -1) {
            setFiles(filesMap)
            const formData = new FormData()
            formData.append('file', files[0])
            setFormData(formData)
        } else {
            alert('Загрузить можно только видео или фото')
        }
        setDrag(false)
    }

    const onClickHandler = () => {
        postDataFile(formData)
        console.log(formData)
    }

    console.log(data)

    return (
        <div className={s.uploadFile}>
            <div>
                {drag
                    ? <div
                        className={s.dragArea}
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                    >Отпустите файл, чтобы загрузить</div>
                    : <div
                        className={s.dragArea}
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                    >Перетащите файл, чтобы загрузить</div>
                }

                <div style={{ marginTop: 20 }}>
                    {files.length > 0
                        ? files[0].name
                        : 'Файл не загружен'
                    }
                </div>
                <button className={s.resultButton} disabled={files.length > 0 ? false : true} onClick={() => onClickHandler()}>
                    Рассчитать
                </button>
            </div>


            <div className={s.resultText}>
                Объем щебня:
                <div> <b style={{ color: 'green' }}>[</b>{data} см3<b style={{ color: 'green' }}>]</b></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.main.data
})

export const UploadFileContainer = connect(mapStateToProps, { postDataFile })(UploadFile)