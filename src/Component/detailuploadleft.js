
import React, { useEffect, useState } from "react";

function Detailuploadleft({ filelength }) {
  const [totalImage, setTotalImage] = useState(filelength);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    // Set the initial total image count only once
    if (filelength > 0 && totalImage === 0) {
      setTotalImage(filelength);
    }

    // Calculate the upload progress
    if (totalImage > 0) {
      const progress = ((totalImage - filelength) / totalImage) * 100;
      setUploadProgress(progress);
    }

    // Reset progress when all images are uploaded
    if (filelength === 0) {
      setUploadProgress(0);
    }
  }, [filelength, totalImage]);

  return (
    <div className="w-1/4 h-full bg-[#1e1e1e] shadow-lg p-4 flex flex-col border-r border-red-200 overflow-y-auto">
      <form>
        <h6 className="text-white mb-4 text-left">Asset Upload History</h6>
        <div className="border p-3 rounded mb-6 bg-[#1e1e1e] shadow-sm text-left">
          <p className="text-white">1 - Building</p>
          <small className="text-white">Sep 21, 2024, 3:28:58 PM</small>
        </div>

        <h6 className="text-white mb-4 text-left">Billing Status</h6>
        <div className="border p-3 rounded shadow-sm mb-3 text-left bg-[#1e1e1e]">
          <p className="mb-1 text-white">
            Subscription Status:
            <span className="bg-yellow-400 px-2 py-1 rounded-full text-xs text-white">
              Trial
            </span>
          </p>
          <p className="mb-2 text-white">Expires: Sep 27, 2024</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "46%" }}
            ></div>
          </div>
          <small className="text-white">Image Usage: 464 / 1000</small>
        </div>

        <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-md border-4 border-white/50 shadow-white/20 relative overflow-hidden">
          <p className="text-lg font-semibold text-white">Image Logs</p>

          {totalImage === 0 && (
            <div>
                <h3>No Image Uploaded</h3>
            </div>
          )}

          {totalImage > 0 && (

            <div className="flex justify-between mt-2 p-2  ">
              <p className="text-lg text-white">
                <span className="font-medium">Image left :</span> {filelength}
              </p>
              <p className="text-lg text-white">
                <span className="font-medium">Total Images:</span> {totalImage}
              </p>
            </div>
          )}

          {filelength > 0 && (
            <div className="mt-4">
              <h6 className="text-white text-left mb-2">Upload Progress</h6>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-green-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <small className="text-white">{Math.round(uploadProgress)}%</small>
            </div>
          )}

          {/* Animated running border */}
          <div className="absolute top-0 left-0 w-full h-full border-4 border-white/500 rounded-lg border-solid animate-glowing-clockwise-border"></div>
        </div>

        <div className="mt-5 text-sm text-gray-500">Powered by Smart Inspection</div>
      </form>
    </div>
  );
}

export default Detailuploadleft;
