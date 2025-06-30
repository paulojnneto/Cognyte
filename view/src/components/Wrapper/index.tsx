export const Wrapper = ({ children }) => {
  return (
    <div className='flex items-center justify-center w-screen bg-custom-light-blue h-screen'>
      <div className="w-[90%] h-[80%]">
        {children}
      </div>
    </div>
  );
}
