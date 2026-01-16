import { useState } from "react";

function App() {
  const [showTicket, setShowTicket] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noInternet, setNoInternet] = useState(false);

  const startLoading = (action) => {
    setLoading(true);
    setNoInternet(false);

    setTimeout(() => {
      setLoading(false);
      setNoInternet(true);
    }, 20000);

    if (action) action();
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans relative">

      {/* ================= LOADING SCREEN ================= */}
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <h1 className="text-2xl font-semibold text-orange-500">
            Loading...
          </h1>
        </div>
      )}

      {/* ================= NO INTERNET SCREEN ================= */}
      {noInternet && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 text-center">
          <h1 className="text-2xl font-semibold text-red-500">
            No Internet Connection
          </h1>
          <p className="text-gray-500 mt-2">
            Please check your network and try again
          </p>
        </div>
      )}

      {/* ================= HOME PAGE ================= */}
      {!showTicket && !loading && !noInternet && (
        <>
          {/* HEADER */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-orange-500 rounded-full flex items-center justify-center font-bold">
                IR
              </div>
              <div>
                <h1 className="text-lg font-semibold">UTS</h1>
                <p className="text-sm opacity-90">IR Unreserved Ticketing</p>
              </div>
            </div>
            <button
              onClick={() => startLoading()}
              className="bg-red-500 px-4 py-1 rounded-full text-sm"
            >
              LOGIN
            </button>
          </div>

          {/* TOP MENU */}
          <div className="bg-white shadow px-4 py-3 flex justify-between text-xs text-center">
            {[
              "Journey Ticket",
              "QR Booking",
              "Quick Booking",
              "Platform Ticket",
              "Season Ticket",
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-gray-600">
                <div className="w-8 h-8 bg-orange-100 rounded-full mb-1"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* ACTION GRID */}
          <div className="grid grid-cols-3 gap-3 p-4 text-sm text-center">
            {[
              "CANCEL TICKET",
              "BOOKING HISTORY",
              "SHOW TICKET",
              "R-WALLET",
              "PROFILE",
              "TRANSACTIONS",
            ].map((item, i) => (
              <div
                key={i}
                onClick={() =>
                  startLoading(
                    item === "SHOW TICKET"
                      ? () => setShowTicket(true)
                      : null
                  )
                }
                className="bg-white shadow rounded p-3 cursor-pointer"
              >
                <div className="w-8 h-8 mx-auto bg-orange-100 rounded-full mb-2"></div>
                <p className="text-orange-500">{item}</p>
              </div>
            ))}
          </div>

          {/* NORMAL BOOKING */}
          <div className="bg-white mx-4 rounded shadow overflow-hidden">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 font-semibold">
              NORMAL BOOKING
            </div>

            <div className="p-4 space-y-4">
              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  Book & Travel (Paperless)
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  Book & Print (Paper)
                </label>
              </div>

              <div className="flex items-center justify-between text-center">
                <div>
                  <p className="text-xs text-gray-500">Depart from</p>
                  <h2 className="text-lg font-semibold">STN</h2>
                </div>
                <div className="text-xl text-gray-400">⇄</div>
                <div>
                  <p className="text-xs text-gray-500">Going to</p>
                  <h2 className="text-lg font-semibold">STN</h2>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => startLoading()}
                  className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 rounded-full"
                >
                  NEXT TRAINS
                </button>
                <button
                  onClick={() => startLoading()}
                  className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 rounded-full"
                >
                  GET FARE
                </button>
              </div>
            </div>
          </div>

          {/* HELP */}
          <div className="fixed bottom-6 right-6">
            <button
              onClick={() => startLoading()}
              className="w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg text-xl"
            >
              ?
            </button>
          </div>
        </>
      )}

      {/* ================= SHOW TICKET PAGE ================= */}
      {showTicket && !loading && !noInternet && (
        <>
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 flex items-center gap-3">
            <button
              onClick={() => startLoading(() => setShowTicket(false))}
              className="text-xl font-bold"
            >
              ←
            </button>
            <h1 className="text-lg font-semibold">Show Ticket</h1>
          </div>

          <div className="p-4">
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="bg-orange-400 text-white px-4 py-2 font-semibold">
                SHOW TICKET
              </div>

              <div className="p-4 space-y-3 text-sm">
                <div className="flex justify-between font-semibold text-orange-500">
                  <span>JOURNEY ( M-TICKET )</span>
                  <span>FARE: ₹105.00</span>
                </div>

                <div className="flex justify-between">
                  <p className="font-semibold">Dhuri JN.</p>
                  <p className="font-semibold">Haridwar Jn.</p>
                </div>

                <div className="border-t pt-2 text-xs text-gray-600 space-y-1">
                  <p>Adult: 1</p>
                  <p>Class: SECOND (II)</p>
                  <p>Booking Date: 17/01/2025 07:09</p>
                </div>

                <div className="flex justify-end pt-3">
                  <button
                    onClick={() => startLoading()}
                    className="text-orange-500 font-semibold"
                  >
                    ⟳ NEXT TRAINS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
