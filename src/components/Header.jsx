const Header = (props) => {
  const { children, title } = props;

  return (
    <div className="flex justify-center px-10 py-3 bg-primary items-center w-full sm:justify-between">
      <div className="hidden sm:inline-block">
        <h1 className="text-xl font-bold text-white">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Header;
