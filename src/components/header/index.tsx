import Logo from "../../../public/images/logo-full.svg";

export default function Header() {
  return (
    <header className="py-9 w-full px-2 flex justify-center items-center">
      <div
        className="flex flex-col 
      justify-center items-center max-w-[500px] px-2"
      >
        <Logo />
        <h1
          className="text-center font-bold text-c-neutral-0 text-3xl
        mt-13 mb-7"
        >
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className="text-center text-xl text-c-neutral-300">
          Secure your spot at next year&apos;s biggest coding conference
        </p>
      </div>
    </header>
  );
}
