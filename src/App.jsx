import { useState } from "react";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">

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
        <button className="bg-red-500 px-4 py-1 rounded-full text-sm">
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
          <div
            key={i}
            className={`flex flex-col items-center ${
              i === 0 ? "text-orange-500" : "text-gray-600"
            }`}
          >
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
          <div key={i} className="bg-white shadow rounded p-3">
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
          {/* RADIO BUTTONS */}
          <div className="flex gap-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="booking" />
              Book & Travel (Paperless)
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="booking" />
              Book & Print (Paper)
            </label>
          </div>

          {/* STATION SELECT */}
          <div className="flex items-center justify-between text-center">
            <div>
              <p className="text-xs text-gray-500">Depart from</p>
              <h2 className="text-lg font-semibold">STN</h2>
              <p className="text-xs text-gray-400">Station Name</p>
              <div className="h-0.5 bg-orange-400 mt-1"></div>
            </div>

            <div className="text-xl text-gray-400">⇄</div>

            <div>
              <p className="text-xs text-gray-500">Going to</p>
              <h2 className="text-lg font-semibold">STN</h2>
              <p className="text-xs text-gray-400">Station Name</p>
              <div className="h-0.5 bg-orange-400 mt-1"></div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 rounded-full">
              NEXT TRAINS
            </button>
            <button className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 rounded-full">
              GET FARE
            </button>
          </div>
        </div>
      </div>

      {/* HELP BUTTON */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg text-xl">
          ?
        </button>
      </div>
    </div>
  );
}

export default App;
