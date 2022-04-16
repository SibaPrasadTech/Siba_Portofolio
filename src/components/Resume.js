import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
import { Document, Page, pdfjs } from 'react-pdf';
import './Resume.css';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber,] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }


  return (
    <div className="Example">
      <div className="Example__container">
        <div className="Example__container__document">
          <Document file="Siba Prasad Choudhury Resume 2022.pdf"
            onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}


export default Resume;