import React from 'react';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToastNotify() {


    const successToast = () => {
        // Success    
        toast.success("Success Notification !", { autoClose: 2000 });
    };

    const errorToast = () => {
        // Error
        toast.error("Error Notification !");
    };

    const warnToast = () => {
        // Warning
        toast.warn("Warning Notification !");
    };

    const infoToast = () => {
        // Information
        toast.info("Info Notification !");
    };






    return (
        <div className="App">
            <div className="container">
                <input type="text" />
                {/* <button onClick={successToast}>Success</button>
        <button onClick={warnToast}>Warn</button>
        <button onClick={errorToast}>Error</button>
        <button onClick={infoToast}>Info</button> */}

                {/* <InputGroup size="sm" className="mb-3">

          <FormControl aria-label="Default"
            aria-describedby="inputGroup-sizing-default" />
        </InputGroup> */}

                <Button variant="success" onClick={successToast}>Success</Button>{' '}
                <Button variant="warning" onClick={warnToast}>Warning</Button>{' '}
                <Button variant="danger" onClick={errorToast}>Danger</Button>{' '}
                <Button variant="info" onClick={infoToast}>Info</Button>

                <ToastContainer />
            </div>
        </div>
    );
}

export default ToastNotify;