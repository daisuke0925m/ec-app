import React from 'react'

const ImagePreview = (props) => {
    // console.log(props)
    return (
        <div className="p-media__thumb" onClick={() => props.delete(props.id)}>
            <img src={props.path} alt="プレビュー画像" />
        </div>
    )
}

export default ImagePreview