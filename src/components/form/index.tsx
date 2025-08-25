"use client";

import { useState } from "react";

import IconUpload from "../../../public/images/icon-upload.svg";
import IconInfo from "../../../public/images/icon-info.svg";
import Image from "next/image";

export default function Form() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size < 500 * 1024 && /\.(jpe?g|png)$/i.test(file.name)) {
      setPreview(URL.createObjectURL(file));
    } else {
      alert("Arquivo inválido. Use JPG ou PNG até 500KB.");
    }
  };

  return (
    <div className="w-full flex items-center justify-center px-2">
      <form
        className="flex flex-col h-fit w-full px-2 gap-6
      justify-center items-center max-w-[500px]"
      >
        <div className="w-full">
          <div className="w-full text-c-neutral-0 text-lg relative">
            <span>Upload Avatar</span>
            <div
              className="w-full text-c-neutral-0 text-lg bg-c-neutral-700/30
                flex flex-col items-center justify-center py-5 border border-dashed
                border-c-neutral-500/60 gap-4 rounded-xl mt-2"
              id="input-file-container"
            >
              {preview ? (
                <>
                  <div className="bg-c-neutral-700/60 px-0.5 py-0.5 rounded-xl">
                    <Image
                      src={preview}
                      alt="preview"
                      width={400}
                      height={400}
                      className="rounded-xl w-12 h-12 object-cover"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      className="bg-c-neutral-700/60 px-3 py-1 rounded-lg
                    text-c-neutral-300/90 hover:text-c-neutral-300/80
                    hover:underline hover:cursor-pointer"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreview(null);
                      }}
                    >
                      Remove image
                    </button>

                    <label
                      htmlFor="file-upload"
                      className="bg-c-neutral-700/60 px-3 py-1 rounded-lg
                    text-c-neutral-300/90 hover:text-c-neutral-300/80
                    hover:underline hover:cursor-pointer"
                    >
                      Change image
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="hidden"
                        accept="image/png, image/jpg"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-c-neutral-700/60 px-2 py-2 rounded-xl">
                    <IconUpload />
                  </div>

                  <span className="text-c-neutral-300/80 text-center w-full">
                    Drag and drop or click to upload
                  </span>

                  <label
                    htmlFor="input-file"
                    className="w-full h-full absolute z-10"
                  >
                    <input
                      className="hidden"
                      id="input-file"
                      name="input-file"
                      type="file"
                      accept="image/png, image/jpg"
                      onChange={handleFileChange}
                    />
                  </label>
                </>
              )}
            </div>
            <span className="mt-2 w-full flex gap-2 text-c-neutral-300/80">
              <IconInfo />
              <p className="text-xs">
                Upload your photo (JPG or PNG, max size: 500MB).
              </p>
            </span>
          </div>
        </div>

        <div className="w-full">
          <label
            className="w-full text-c-neutral-0 text-lg"
            htmlFor="input-full-name"
          >
            Full Name
          </label>
          <input
            className="border border-c-neutral-500/60 w-full py-3 rounded-xl bg-c-neutral-700/30
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
            className="border border-c-neutral-500/60 w-full py-3 rounded-xl bg-c-neutral-700/30
            placeholder:text-c-neutral-300/80 px-4 mt-2"
            id="input-email"
            name="input-email"
            type="email"
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
            className="border border-c-neutral-500/60 w-full py-3 rounded-xl bg-c-neutral-700/30
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
