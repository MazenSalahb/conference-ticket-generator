import iconUpload from "../assets/images/icon-upload.svg";
import iconInfo from "../assets/images/icon-info.svg";

function TicketForm({
  handleSubmit,
}: {
  handleSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mt-14 w-full space-y-4 p-3 md:p-0"
    >
      {/* upload input */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="upload" className="text-neutral-100">
          Upload Avatar
        </label>

        <button
          type="button"
          className="w-full h-32 rounded-xl border-2 border-neutral-700 border-dashed bg-neutral-700/15 backdrop-blur-xs flex flex-col items-center justify-evenly cursor-pointer focus:outline-offset-2 focus:outline-2 focus:outline-neutral-400/50"
        >
          <div className="p-2 bg-neutral-700/20 rounded-xl border border-neutral-700/50">
            <img src={iconUpload} alt="upload icon" />
          </div>

          <p className="text-neutral-400 text-sm">
            Drag and drop or clike to upload
          </p>
        </button>

        <div className="flex items-center gap-2">
          <img src={iconInfo} alt="info icon" className="text-neutral-400" />
          <p className="text-xs text-neutral-400">
            upload your photo (Jpg or PNG, max size: 500kb)
          </p>
        </div>
      </div>
      {/* End upload input */}

      {/* Name input */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullname"
          //   placeholder="Mazen Salah"
          className="w-full h-12 px-4 rounded-xl bg-neutral-700/15 backdrop-blur-xs border border-neutral-700 focus:border-primary-500 focus:outline-offset-2 focus:outline-1 focus:outline-neutral-400/50"
        />
      </div>
      {/* End Name input */}
      {/* Email input */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="w-full h-12 px-4 rounded-xl bg-neutral-700/15 backdrop-blur-xs border border-neutral-700 focus:border-primary-500 focus:outline-offset-2 focus:outline-1 focus:outline-neutral-400/50"
        />
      </div>
      {/* End Email input */}
      {/* Github input */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="github">GitHub Username</label>
        <input
          type="text"
          name="github"
          id="github"
          placeholder="@mazensalahb"
          className="w-full h-12 px-4 rounded-xl bg-neutral-700/15 backdrop-blur-xs border border-neutral-700 focus:border-primary-500 focus:outline-offset-2 focus:outline-1 focus:outline-neutral-400/50"
        />
      </div>
      {/* End Github input */}

      {/* Submit Button */}
      <button className="bg-orange-500 text-neutral-900 font-bold text-lg w-full p-3 rounded-xl cursor-pointer focus:outline-offset-2 focus:outline-1 focus:outline-neutral-400/50">
        Generate My Ticket
      </button>
    </form>
  );
}

export default TicketForm;
