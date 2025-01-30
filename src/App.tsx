import uploadSVG from "./assets/images/logo-mark.svg";
import TicketForm from "./components/TicketForm";
import Ticket from "./components/Ticket";
import { useState } from "react";
import BackgroundImages from "./components/BackgroundImages";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center pt-6">
      <BackgroundImages />

      <div className="flex items-center gap-3 z-10">
        <img src={uploadSVG} alt="upload icon" className="size-6" />
        <h1 className="text-center text-neutral-0 text-2xl font-bold">
          Coding Conf
        </h1>
      </div>

      <div className="mt-16 z-10 space-y-6">
        {!isSubmitted ? (
          <h1 className="text-center text-neutral-0 text-6xl font-extrabold">
            Your Journy to Coding Conf <br />
            2025 Starts Here!
          </h1>
        ) : (
          <h1 className="text-center text-neutral-0 text-5xl font-extrabold">
            Congrats,{" "}
            <span className="bg-gradient-to-r from-orange-from to-neutral-to text-transparent bg-clip-text">
              Mazen Salah!
            </span>{" "}
            <br />
            Your ticket is ready.
          </h1>
        )}

        {!isSubmitted ? (
          <p className="text-center text-lg text-neutral-300 tracking-wider">
            Secure your spot at next year's biggest coding conference.
          </p>
        ) : (
          <p className="text-center text-xl text-neutral-300 tracking-wider">
            We've emailed your ticket to <br />
            <span className="text-orange-500">mazen@gmail.com</span> and will
            send updates in <br /> the run up to the event.
          </p>
        )}
      </div>

      {!isSubmitted ? (
        <TicketForm setIsSubmitted={setIsSubmitted} />
      ) : (
        <div className="max-w-xl mt-24 w-full p-3 md:p-0">
          <Ticket />
        </div>
      )}
    </main>
  );
}

export default App;
