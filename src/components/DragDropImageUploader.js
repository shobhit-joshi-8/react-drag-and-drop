import React from 'react';
import '../App.css';
import { useImageContext } from '../context/ImageCoontext';
import { MdDelete } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

const DragDropImageUploader = () => {
    const {
        images,
        isDragging,
        fileInputRef,
        selectFiles,
        onFileSelect,
        deleteImage,
        handleDragOver,
        handleDragLeave,
        handleDrop,
    } = useImageContext();

    return (
        <div className='card'>
            <div className='top'>
                <p>Upload Your Image</p>
            </div>
            <div className='drag-area'
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}>
                {isDragging ? (
                    <span className='select'>
                        Drop Images Here
                    </span>
                ) : (
                    <>
                        Drag & Drop Images Here
                        <p>Or</p>
                        
                        <div className='button-container'>
                        <button className='browse-button' type='button' onClick={selectFiles}>
                            Browse
                        </button>
                        </div>
                        
                    </>
                )}

                <input name='file' type='file' className='file' multiple ref={fileInputRef} onChange={onFileSelect}></input>
            </div>
            <div className='container'>
                {
                    images.map((image, index) => (
                        <div className='image' key={index}>
                            <div className='overlay'></div>
                            <span className='delete' onClick={() => deleteImage(index)}><MdDelete /></span>
                            <a href={image.url} download={image.name} className='download'>
                                <FaDownload />
                            </a>
                            <img src={image.url} alt={image.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DragDropImageUploader;
