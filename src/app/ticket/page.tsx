type iticket = {
  image: string;
  fullName: string;
  email: string;
  github: string;
};

export default function Ticket({ email, fullName, github, image }: iticket) {
  return (
    <div className="w-full px-2 flex justify-center items-center">
      <div
        className="flex flex-col 
      justify-center items-center max-w-[500px] px-2"
      >
        <h1
          className="text-center font-bold text-c-neutral-0 text-3xl
            mt-13 mb-7"
        >
          Congrats, <span>{fullName}!</span> Your ticket is ready.
        </h1>

        <p className="text-center text-xl text-c-neutral-300">
          We&apos;ve emailed your ticket to <span>{email}</span> and will send
          update in the run up to the event.
        </p>
      </div>
    </div>
  );
}
