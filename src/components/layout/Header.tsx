const Header = () => {
  return (
    <header className="flex h-[6rem] w-full items-center justify-between bg-slate-600 px-[13vw]">
      <nav className="font flex">
        <span className="H1">MODIDA</span>
        <ul className="flex">
          <li>홈</li>
          <li>마이페이지</li>
          <li>스터디게시판</li>
          <li>🥫뽀모도로</li>
        </ul>
      </nav>
      <div className="flex">
        <input type="text" />
        <button>스터디 모집하기</button>
        <div />
      </div>
    </header>
  );
};

export default Header;
