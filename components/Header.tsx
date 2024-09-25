interface HeaderProps {
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggle }) => {
  return (
    <div className="h-24 bg-primary flex items-center justify-around">
      <header>
        <h1 className="text-xl text-white">
          Nombre
          <br />
          <span className="ml-4">de mi tienda</span>
        </h1>
      </header>

      <label>
        <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
          <input className="hidden peer" type="checkbox" onClick={onToggle} />
          <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
          <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
          <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
        </div>
      </label>
    </div>
  );
};

export default Header;
