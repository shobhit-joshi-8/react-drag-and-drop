import React from 'react';
import DragDropImageUploader from './components/DragDropImageUploader';
import { ImageProvider } from './context/ImageCoontext';
import './App.css';

const App = () => {
    return (
        <ImageProvider>
            <div className='outer-container'>
                <DragDropImageUploader />
            </div>
        </ImageProvider>
    );
};

export default App;
