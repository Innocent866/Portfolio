import React from 'react';
import docu from '../Component/Innocent CV PDF.pdf';

const FileDownloader = () => {
    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = docu; // Path to the PDF file
        link.download = 'Innocent CV.pdf'; // Desired download file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <a href="#" onClick={downloadPDF} style={{color:"#F16529"}}><p className="mt-2">Innocent's Resume.pdf</p></a>
        </div>
        // <a href='#' onClick={downloadPDF} style={{ color: "#F16529" }}>
        //     Download PDF
        // </a>
    );
};

export default FileDownloader;

