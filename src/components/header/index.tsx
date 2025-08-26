import Logo from "../../../public/images/logo-full.svg";

export default function Header() {
  return (
    <header className="pt-9 w-full px-2 flex justify-center items-center">
      <div
        className="flex flex-col 
      justify-center items-center max-w-[500px] px-2"
      >
        <Logo />
      </div>
    </header>
  );
}
