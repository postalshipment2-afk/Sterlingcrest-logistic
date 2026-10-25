import { useRef, useState } from "react";
import { X, Download, Package, Loader2, ShieldCheck } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface ReceiptProps {
  data: any;
  onClose: () => void;
}

export function Receipt({ data, onClose }: ReceiptProps) {
  const receiptRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const hex = {
    brand: "#f97316",
    navy: "#0f172a",
    navyLight: "#475569",
    gray100: "#f1f5f9",
    white: "#ffffff",
    seal: "#1d4ed8",
    sig: "#171717",
    paid: "#16a34a",
  };

  const handleDownloadPDF = async () => {
    if (!receiptRef.current) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(receiptRef.current, {
        scale: 2, // Scale 2 is safer for alignment stability than 3
        useCORS: true,
        backgroundColor: hex.white,
        onclone: (clonedDoc) => {
          const styleSheets = Array.from(clonedDoc.styleSheets);
          styleSheets.forEach((sheet) => {
            try {
              if (
                sheet.href === null ||
                sheet.href.includes(window.location.hostname)
              ) {
                sheet.disabled = true;
              }
            } catch (e) {}
          });
        },
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save(`Steadfast_Receipt_${data.tracking_number}.pdf`);
    } catch (error) {
      console.error("PDF Error:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="bg-white border-b px-8 py-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-orange-600" />
            <span className="font-bold text-slate-800">
              Official Document Preview
            </span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              style={{ backgroundColor: hex.brand }}
              className="px-6 py-2 text-white font-bold rounded-full flex items-center gap-2 hover:opacity-90 disabled:opacity-50"
            >
              {isDownloading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              {isDownloading ? "Processing..." : "Download PDF"}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-400"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrolling Preview Container */}
        <div className="overflow-y-auto flex-1 bg-slate-100 p-4 sm:p-10">
          {/* THE DOCUMENT - FORCED A4 RATIO (800px x 1132px) */}
          <div
            ref={receiptRef}
            style={{
              backgroundColor: hex.white,
              color: hex.navy,
              fontFamily: "Arial, sans-serif",
              width: "800px",
              height: "1132px",
              margin: "0 auto",
              padding: "60px",
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            {/* BACKGROUND WATERMARK (Centered and balanced) */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-30deg)",
                zIndex: 0,
                opacity: 0.04,
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  fontSize: "180px",
                  fontWeight: "900",
                  color: hex.paid,
                  border: `20px solid ${hex.paid}`,
                  padding: "20px 80px",
                  borderRadius: "40px",
                }}
              >
                PAID
              </div>
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* HEADER AREA */}
              <div
                style={{
                  width: "100%",
                  marginBottom: "50px",
                  overflow: "hidden",
                }}
              >
                <div style={{ float: "left", width: "60%" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Package
                      style={{
                        color: hex.brand,
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "32px",
                        fontWeight: "900",
                        color: hex.navy,
                        textTransform: "uppercase",
                      }}
                    >
                      Steadfast
                    </span>
                  </div>
                  <p
                    style={{
                      margin: "2px 0 0 52px",
                      fontSize: "11px",
                      fontWeight: "bold",
                      color: hex.brand,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    Logistics Limited
                  </p>
                </div>
                <div
                  style={{ float: "right", width: "40%", textAlign: "right" }}
                >
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: "300",
                      margin: 0,
                      color: hex.navyLight,
                      textTransform: "uppercase",
                    }}
                  >
                    Shipment Receipt
                  </h2>
                  <p
                    style={{
                      margin: "5px 0",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    TRK: {data.tracking_number}
                  </p>
                </div>
                <div style={{ clear: "both" }}></div>
              </div>

              <div
                style={{
                  height: "4px",
                  backgroundColor: hex.brand,
                  width: "60px",
                  marginBottom: "40px",
                }}
              ></div>

              {/* ADDRESS AREA (Using percentage widths for perfect alignment) */}
              <div
                style={{
                  width: "100%",
                  marginBottom: "60px",
                  overflow: "hidden",
                }}
              >
                <div style={{ float: "left", width: "45%" }}>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      color: hex.brand,
                      textTransform: "uppercase",
                      borderBottom: `1px solid ${hex.gray100}`,
                      paddingBottom: "5px",
                      marginBottom: "10px",
                    }}
                  >
                    Sender
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: "0 0 5px 0",
                    }}
                  >
                    {data.sender_name}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: hex.navyLight,
                      margin: 0,
                      lineHeight: "1.4",
                    }}
                  >
                    {data.sender_address},<br />
                    {data.sender_city}, {data.sender_country}
                  </p>
                </div>
                <div style={{ float: "right", width: "45%" }}>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      color: hex.brand,
                      textTransform: "uppercase",
                      borderBottom: `1px solid ${hex.gray100}`,
                      paddingBottom: "5px",
                      marginBottom: "10px",
                    }}
                  >
                    Receiver
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: "0 0 5px 0",
                    }}
                  >
                    {data.receiver_name}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: hex.navyLight,
                      margin: 0,
                      lineHeight: "1.4",
                    }}
                  >
                    {data.receiver_address},<br />
                    {data.receiver_city}, {data.receiver_country}
                  </p>
                </div>
                <div style={{ clear: "both" }}></div>
              </div>

              {/* TABLE AREA */}
              <div
                style={{
                  width: "100%",
                  border: `1px solid ${hex.gray100}`,
                  borderRadius: "8px",
                  marginBottom: "60px",
                }}
              >
                <div
                  style={{
                    backgroundColor: hex.navy,
                    color: hex.white,
                    padding: "12px 25px",
                    fontSize: "11px",
                    fontWeight: "bold",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ float: "left" }}>ITEM DESCRIPTION</div>
                  <div style={{ float: "right" }}>WEIGHT</div>
                </div>
                <div style={{ padding: "30px 25px", overflow: "hidden" }}>
                  <div style={{ float: "left", width: "70%" }}>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "0 0 5px 0",
                      }}
                    >
                      {data.package_description || "General Parcel"}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: hex.navyLight,
                        margin: 0,
                      }}
                    >
                      Certified Shipment Transaction
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: hex.brand,
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    >
                      Date:{" "}
                      {data.departure_date
                        ? new Date(data.departure_date).toLocaleDateString()
                        : "Scheduled"}
                    </p>
                  </div>
                  <div
                    style={{ float: "right", width: "25%", textAlign: "right" }}
                  >
                    <p
                      style={{ fontSize: "32px", fontWeight: "900", margin: 0 }}
                    >
                      {data.package_weight}{" "}
                      <span style={{ fontSize: "16px", color: hex.brand }}>
                        KG
                      </span>
                    </p>
                  </div>
                  <div style={{ clear: "both" }}></div>
                </div>
              </div>

              {/* SIGNATURE & SEAL AREA */}
              <div
                style={{
                  width: "100%",
                  marginTop: "80px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* SEAL (Positioned absolutely so it doesn't push the signature) */}
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    width: "130px",
                    height: "130px",
                    border: `3px double ${hex.seal}`,
                    borderRadius: "50%",
                    transform: "rotate(-15deg)",
                    opacity: 0.6,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: hex.seal,
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: "10px", fontWeight: "bold" }}>
                    Steadfast
                  </span>
                  <div
                    style={{
                      height: "1px",
                      width: "70%",
                      backgroundColor: hex.seal,
                      margin: "3px 0",
                    }}
                  ></div>
                  <span style={{ fontSize: "14px", fontWeight: "900" }}>
                    OFFICIAL
                  </span>
                  <div
                    style={{
                      height: "1px",
                      width: "70%",
                      backgroundColor: hex.seal,
                      margin: "3px 0",
                    }}
                  ></div>
                  <span style={{ fontSize: "9px", fontWeight: "bold" }}>
                    VERIFIED
                  </span>
                </div>

                {/* SIGNATURE (Floated right) */}
                <div
                  style={{ float: "right", width: "240px", textAlign: "right" }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: hex.navyLight,
                      textTransform: "uppercase",
                      marginBottom: "5px",
                    }}
                  >
                    Authorized Signature
                  </p>
                  <div
                    style={{
                      borderBottom: `2px solid ${hex.navy}`,
                      height: "50px",
                      position: "relative",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        bottom: "5px",
                        right: "10px",
                        fontSize: "32px",
                        fontFamily: "cursive",
                        color: hex.sig,
                        opacity: 0.8,
                      }}
                    >
                      M. Anderson
                    </span>
                  </div>
                  <p
                    style={{ fontSize: "14px", fontWeight: "bold", margin: 0 }}
                  >
                    Mark Anderson
                  </p>
                  <p
                    style={{
                      fontSize: "10px",
                      color: hex.navyLight,
                      margin: 0,
                    }}
                  >
                    Document Controller
                  </p>
                </div>
              </div>

              {/* FOOTER */}
              <div
                style={{
                  // position: "absolute",
                  bottom: "20px",
                  width: "100%",
                  textAlign: "center",
                  borderTop: `1px solid ${hex.gray100}`,
                  paddingTop: "15px",
                  marginTop: "100px",
                }}
              >
                <p
                  style={{ fontSize: "10px", color: hex.navyLight, margin: 0 }}
                >
                  © {new Date().getFullYear()} STERLING CRESTLogistics Ltd. |
                  Document ID: {data.id?.toString().slice(-10).toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
