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
        <div className="result-container" ref={pdfRef}>
          <h1>Dr. KALAM COACHING CLASSES, CHHOTI SADRI</h1>
          <h2>KALAM SCHOLARSHIP TEST 2024 [SESSION – 2nd]</h2>
          <h2>RESULT</h2>
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
                  <th>Obtained Marks</th>
                  <th>Max Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SECTION - A</td>
                  <td>{20}</td>
                  <td>{studentResult["SECTION - A"] ?? 0}</td>
                </tr>

                <tr>
                  <td>SECTION - B</td>
                  <td>{20}</td>
                  <td>{studentResult["SECTION - B"] ?? 0}</td>
                </tr>

                <tr>
                  <td>SECTION - C</td>
                  <td>{20}</td>
                  <td>{studentResult["SECTION - C"] ?? 0}</td>
                </tr>

                <tr>
                  <td>SECTION - D</td>
                  <td>{20}</td>
                  <td>{studentResult["SECTION - D"] ?? 0}</td>
                </tr>

                <tr>
                  <td>SECTION - E</td>
                  <td>{20}</td>
                  <td>{studentResult["SECTION - E"] ?? 0}</td>
                </tr>

                <tr>
                  <td>Article</td>
                  <td>{10}</td>
                  <td>{studentResult["ARTICLE"] ?? 0}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Total Marks:</strong>
                  </td>
                  <td>{110}</td>
                  <td>{totalMarks ? totalMarks : 0}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rankContainer">
            <span>RANK</span>
            <span>{studentResult["RANK"] ?? "NA"}</span>
          </div>
          {studentResult?.["OFFER "] && <div className="offerContainer"><strong>You Win !!!</strong>{studentResult["OFFER "] ?? "NA"}<strong>!!!</strong></div>}
          <div className="ctaContainer">
            1 मई 2024 से कक्षा 10वीं एवं 12वीं के बैच शुरू कर दिए जायंगे |<br />
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
