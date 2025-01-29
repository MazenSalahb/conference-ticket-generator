import patternTicket from "../assets/images/pattern-ticket.svg";
import uploadSVG from "../assets/images/logo-mark.svg";
import imageAvatar from "../assets/images/image-avatar.jpg";
import iconGithub from "../assets/images/icon-github.svg";

function Ticket() {
  return (
    <div className="w-full relative h-64">
      <img
        src={patternTicket}
        alt="pattern"
        className="absolute left-0 right-0"
      />

      <div className="p-3 md:p-6 flex justify-between items-center h-full w-full">
        {/* Left Side */}
        <div className="flex w-full flex-col space-y-10 md:space-y-0 md:justify-between h-full">
          <div className="flex items-start gap-3">
            <img src={uploadSVG} alt="upload icon" className="mt-2" />
            <div className="leading-6 md:leading-12">
              <h1 className="text-neutral-0 text-lg md:text-3xl font-bold">
                Coding Conf
              </h1>
              <span className="text-neutral-400">
                Jan 31, 2025 / Austin, TX
              </span>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <img
              src={imageAvatar}
              alt="Avatar"
              className="size-10 md:size-16 rounded-xl"
            />
            <div className="flex flex-col">
              <h2 className="text-lg md:text-2xl">Mazen Salah</h2>
              <div className="flex gap-1">
                <img src={iconGithub} alt="github icon" />
                <span className="text-neutral-400">@mazensalahb</span>
              </div>
            </div>
          </div>
        </div>

        {/* Righ Side */}
        <div className="rotate-90 translate-x-4 flex-1">
          <span className="text-3xl text-neutral-400">#01609</span>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
