import React from 'react';
import Button from '@material-ui/core/Button';
import resume from '../Assets/res.jpg';

export default function ResumePage() {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `Rudolph_Jasmine_Resume21.pdf`;
        link.href = "../Assets/Rudolph_Jasmine_Resume21.pdf";
        link.click();
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <Button className="resBtn my-2" onClick={onDownload} variant="contained" color="primary">
                Download My Resume!
            </Button>
            <img src={resume} id="resume" alt="Resume"/>
        </div>
    );
}