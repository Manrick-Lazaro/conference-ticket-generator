"use client";

import IconUpload from "../../../public/images/icon-upload.svg";
import IconInfo from "../../../public/images/icon-info.svg";

export default function Form() {
  return (
    <div className="w-full flex items-center justify-center px-2">
      <form
        className="flex flex-col h-fit w-full px-2 gap-6
      justify-center items-center max-w-[500px]"
      >
        <div className="w-full">
          <label
            className="w-full text-c-neutral-0 text-lg"
            htmlFor="input-file-container"
          >
            Upload Avatar
            <label
              className="w-full text-c-neutral-0 text-lg bg-c-neutral-700/30
                flex flex-col items-center justify-center py-5 border border-dashed
                border-c-neutral-500/60 gap-4 rounded-xl mt-2"
              id="input-file-container"
            >
              <div className="bg-c-neutral-700/60 px-2 py-2 rounded-xl">
                <IconUpload />
              </div>
              <span className="text-c-neutral-300/80">
                Drag and drop or click to upload
              </span>
              <input
                className="border border-c-neutral-500 w-full py-3 rounded-xl bg-c-neutral-700/30
                mt-2 hidden"
                id="input-file"
                name="input-file"
                type="file"
                accept="image/png, image/jpg"
                onChange={() => {}}
              />
            </label>
            <span className="mt-2 w-full flex gap-2 text-c-neutral-300/80">
              <IconInfo />
              <p className="text-xs">
                Upload your photo (JPG or PNG, max size: 500MB).
              </p>
            </span>
          </label>
        </div>

        <div className="w-full">
          <label
            className="w-full text-c-neutral-0 text-lg"
            htmlFor="input-full-name"
          >
            Full Name
          </label>
          <input
            className="border border-c-neutral-500 w-full py-3 rounded-xl bg-c-neutral-700/30
            mt-2"
            id="input-full-name"
            name="input-full-name"
          />
        </div>

        <div className="w-full">
          <label
            className="w-full text-c-neutral-0 text-lg"
            htmlFor="input-email"
          >
            Email Address
          </label>
          <input
            className="border border-c-neutral-500 w-full py-3 rounded-xl bg-c-neutral-700/30
            placeholder:text-c-neutral-300/80 px-4 mt-2"
            id="input-email"
            name="input-email"
            placeholder="example@email.com"
          />
        </div>

        <div className="w-full">
          <label
            className="w-full text-c-neutral-0 text-lg"
            htmlFor="input-github"
          >
            Github Username
          </label>
          <input
            className="border border-c-neutral-500 w-full py-3 rounded-xl bg-c-neutral-700/30
            placeholder:text-c-neutral-300/80 px-4 mt-2"
            id="input-github"
            name="input-github"
            placeholder="@yourusername"
          />
        </div>

        <button
          className="bg-c-orange-500 w-full py-3 rounded-xl text-c-neutral-900 
        font-bold text-[1.05rem]"
        >
          Generate My Ticket
        </button>
      </form>
    </div>
  );
}
