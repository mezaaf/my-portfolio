const Navbar = () => {
  return (
    <nav className="bg-accent w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid h-14 max-w-7xl grid-cols-2 items-center lg:grid-cols-3">
        <div className="justify-self-start font-bold">MEZAAF</div>
        <div className="hidden justify-self-center lg:block">Menu</div>
        <div className="justify-self-end">Button</div>
      </div>
    </nav>
  );
};

export default Navbar;
