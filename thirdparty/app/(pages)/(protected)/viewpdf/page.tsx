// pages/ViewPDF.js
"use client"
import { useEffect, useState } from 'react';

const ViewPDF = () => {
  // State to store the PDF path
  const [pdfPath, setPdfPath] = useState('');

  useEffect(() => {
    // Extract PDF path from query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const path = queryParams.get('pdfPath');
    console.log(path, 'path')
    setPdfPath(path); // Corrected variable name
 
  }, []);

  return (
    <div>
      <h1>PDF Viewer</h1>
      {pdfPath ? (
         <embed src={`http://localhost:5000${pdfPath}`} type="application/pdf" width="100%" height="600px" />
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
};

export default ViewPDF;
