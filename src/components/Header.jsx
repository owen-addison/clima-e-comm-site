function Header() {
  return (
    <>
      <div className="header min-w-screen flex h-auto content-center justify-between border-b border-moss-800 pt-0">
        <div
          id="logo-container"
          className="font-sans text-2xl font-light tracking-widest text-moss-950"
        >
          Clima
        </div>
        <div
          id="header-links-container"
          className="flex flex-row items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <p className="w-16 cursor-pointer text-center font-sans text-base font-light tracking-wide text-moss-950 hover:font-semibold">
              About
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
