import iconUpload from "../assets/images/icon-upload.svg";
import { useForm } from "react-hook-form";
import InfoSVG from "./InfoSVG";
import { useRef, useState } from "react";

type Inputs = {
  name: string;
  email: string;
  github: string;
};

function TicketForm({
  setIsSubmitted,
}: {
  setIsSubmitted: (b: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const fileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);

  function onSubmit() {
    setIsSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mt-14 w-full space-y-4 p-3 md:p-0"
    >
      {/* upload input */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="upload" className="text-neutral-100">
          Upload Avatar
        </label>

        <div
          onClick={() => (image ? null : fileRef.current?.click())}
          className="w-full h-32 rounded-xl border-2 border-neutral-700 border-dashed bg-neutral-700/15 backdrop-blur-xs flex flex-col items-center justify-evenly cursor-pointer focus:outline-offset-2 focus:outline-2 focus:outline-neutral-400/50"
        >
          <input
            type="file"
            hidden
            ref={fileRef}
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  setImage(e.target?.result as string);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          {image ? (
            <div className="bg-neutral-700/20 rounded-xl border border-neutral-700/50">
              <img
                src={image}
                alt="upload icon"
                className="size-14 rounded-xl"
              />
            </div>
          ) : (
            <div className="p-2 bg-neutral-700/20 rounded-xl border border-neutral-700/50">
              <img src={iconUpload} alt="upload icon" />
            </div>
          )}

          {image ? (
            <div className="flex gap-3">
              <div
                onClick={() => setImage(null)}
                className="text-xs bg-neutral-400/10 px-2 py-1 rounded-lg text-neutral-300 underline decoration-neutral-400 cursor-pointer"
              >
                Remove image
              </div>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="text-xs bg-neutral-400/10 px-2 py-1 rounded-lg text-neutral-300 cursor-pointer"
              >
                Change Image
              </button>
            </div>
          ) : (
            <p className="text-neutral-400 text-sm">
              Drag and drop or clike to upload
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <InfoSVG stroke="#a1a1a1" />
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
          id="fullname"
          //   placeholder="Mazen Salah"
          className="w-full h-12 px-4 rounded-xl bg-neutral-700/15 backdrop-blur-xs border border-neutral-700 focus:border-primary-500 focus:outline-offset-2 focus:outline-1 focus:outline-neutral-400/50"
          {...register("name", { required: true })}
        />
        {errors.name?.type === "required" && (
          <div className="flex items-center gap-2">
            <InfoSVG stroke="#f57261" />
            <p className="text-xs text-orange-500">Full Name is required</p>
          </div>
        )}
      </div>
      {/* End Name input */}
      {/* Email input */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          className="w-full h-12 px-4 rounded-xl bg-neutral-700/15 backdrop-blur-xs border border-neutral-700 focus:border-primary-500 focus:outline-offset-2 focus:outline-1 focus:outline-neutral-400/50"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && (
          <div className="flex items-center gap-2">
            <InfoSVG stroke="#f57261" />
            <p className="text-xs text-orange-500">Email is required</p>
          </div>
        )}
      </div>
      {/* End Email input */}
      {/* Github input */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="github">GitHub Username</label>
        <input
          type="text"
          id="github"
          placeholder="@mazensalahb"
          className="w-full h-12 px-4 rounded-xl bg-neutral-700/15 backdrop-blur-xs border border-neutral-700 focus:border-primary-500 focus:outline-offset-2 focus:outline-1 focus:outline-neutral-400/50"
          {...register("github", { required: true })}
        />
        {errors.github?.type === "required" && (
          <div className="flex items-center gap-2">
            <InfoSVG stroke="#f57261" />
            <p className="text-xs text-orange-500">
              GitHub username is required
            </p>
          </div>
        )}
      </div>
      {/* End Github input */}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-orange-500 text-neutral-900 font-bold text-lg w-full p-3 rounded-xl cursor-pointer focus:outline-offset-2 focus:outline-1 focus:outline-neutral-400/50"
      >
        Generate My Ticket
      </button>
    </form>
  );
}

export default TicketForm;
