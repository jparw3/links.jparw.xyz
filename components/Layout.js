const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-2xl w-full p-8 min-h-screen justify-center items-center flex flex-col space-y-2">
      {children}
    </div>
  );
};

export default Layout;
