import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./StudentResultsTable.css";

const StudentResultsTable = ({ studentResult }) => {
  const pdfRef = useRef();
  const [isPdfDownloading, setIsPdfDownloading] = useState(false);

  const downloadPDF = () => {
    const input = pdfRef.current;
    setIsPdfDownloading(true);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4", true);

      const pdfWidth = pdf.internal.pageSize.getWidth();

      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;

      const imgHeight = canvas.height;

      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      const imgX = (pdfWidth - imgWidth * ratio) / 2;

      const imgY = 30;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("result.pdf");
      setIsPdfDownloading(false);
    });
  };

  const totalMarks =
    (Number(studentResult["SECTION - A"]) ?? 0) +
    (Number(studentResult["SECTION - B"]) ?? 0) +
    (Number(studentResult["SECTION - C"]) ?? 0) +
    (Number(studentResult["SECTION - D"]) ?? 0) +
    (Number(studentResult["SECTION - E"]) ?? 0) +
    (Number(studentResult["ARTICLE"]) ?? 0);

  return (
    <>
      <div className="result-page">
        <div className="result-container"  ref={pdfRef}>
          <h3 style={{ textAlign: 'center'}}>Dr. KALAM COACHING CLASSES, CHHOTI SADRI</h3>
          <h4 style={{ textAlign: 'center'}}>KALAM SCHOLARSHIP TEST 2024 [SESSION – 2nd]</h4>
          <h1>RESULT</h1>
          <br />

          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Name:</strong>
                </td>
                <td>{studentResult["CANDIDATE NAME"]}</td>
                <td>
                  <strong>Roll No:</strong>
                </td>
                <td>{studentResult["ROLL NO"]}</td>
              </tr>
              <tr>
                <td>
                  <strong>Father's Name:</strong>
                </td>
                <td>{studentResult["FATHER'S NAME"]}</td>
                <td>
                  <strong>School Name:</strong>
                </td>
                <td>{studentResult["SCHOOL NAME"]}</td>
              </tr>
              <tr>
                <td>
                  <strong>Class:</strong>
                </td>
                <td>{studentResult["CLASS"]}</td>
                <td>
                  <strong>Medium:</strong>
                </td>
                <td>{studentResult["MEDIUM"]}</td>
              </tr>
            </tbody>
          </table>
          <div className="marksContainer">
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Max Marks</th>
                  <th>Obtained Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>SECTION - A</strong></td>
                  <td><strong>{20}</strong></td>
                  <td><strong>{studentResult["SECTION - A"] ?? 0}</strong></td>
                </tr>

                <tr>
                  <td><strong>SECTION - B</strong></td>
                  <td><strong>{20}</strong></td>
                  <td><strong>{studentResult["SECTION - B"] ?? 0}</strong></td>
                </tr>

                <tr>
                  <td><strong>SECTION - C</strong></td>
                  <td><strong>{20}</strong></td>
                  <td><strong>{studentResult["SECTION - C"] ?? 0}</strong></td>
                </tr>

                <tr>
                  <td><strong>SECTION - D</strong></td>
                  <td><strong>{20}</strong></td>
                  <td><strong>{studentResult["SECTION - D"] ?? 0}</strong></td>
                </tr>

                <tr>
                  <td><strong>SECTION - E</strong></td>
                  <td><strong>{20}</strong></td>
                  <td><strong>{studentResult["SECTION - E"] ?? 0}</strong></td>
                </tr>

                <tr>
                  <td><strong>Article</strong></td>
                  <td><strong>{10}</strong></td>
                  <td><strong>{studentResult["ARTICLE"] ?? 0}</strong></td>
                </tr>

                <tr>
                  <td><strong>
                    Total Marks:</strong>
                  </td>
                  <td><strong>{110}</strong></td>
                  <td><strong>{totalMarks ? totalMarks : 0}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rankContainer">
            <span>RANK</span>
            <span>{studentResult["RANK"] ?? "NA"}</span>
          </div>
          {studentResult?.["OFFER "] && <div className="ctaContainer"><strong>You Win !!!  {studentResult["OFFER "] ?? "NA"}!!!</strong></div>}
          <div className="ctaContainer">
            6 मई 2024 से कक्षा 10वीं एवं 12वीं के बैच शुरू कर दिए जायंगे |<br />
            जल्द से जल्द अपना प्रवेश सूनिश्चित करे |
          </div>
        </div>
        <div className="download-link">
          {isPdfDownloading ? (
            <a className="download-button">&#10515; Downloading...</a>
          ) : (
            <a className="download-button" onClick={downloadPDF}>&#10515; DOWNLOAD</a>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentResultsTable;
