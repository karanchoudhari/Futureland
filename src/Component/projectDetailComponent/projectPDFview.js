import React from "react";

function ProjectPDFview({ pdfUrl }) {
    // const pdf = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    const googleViewer = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdfUrl)}`;
  return (
    <div style={{ width: "50%", height: "50vh" }}>
      <iframe 
        src={googleViewer} 
        width="100%" 
        height="100%" 
        style={{ border: "none" }}
        title="PDF Viewer"
      />
    </div>
  );
}

export default ProjectPDFview;
