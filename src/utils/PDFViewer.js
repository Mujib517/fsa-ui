import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ filename }) => {

    const [pages, setPages] = useState([]);

    const onDocLoaded = (evt) => {
        // for (var i = 0; i < evt.numPages; i++) pages.push(i + 1);
        const pagesArr = Array.from(Array(evt.numPages).keys()); // 2 => [0,1], 5 = [0,1,2,3,4]
        setPages(pagesArr);
    }

    return <Document onLoadSuccess={onDocLoaded} file={filename}>
        {pages.map(page => <Page pageNumber={page + 1} />)}
    </Document>
}

export default PDFViewer;
