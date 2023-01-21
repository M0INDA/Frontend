const Profile = () => {
  return (
    <div className="h-[33rem] w-[44.6rem] rounded-[1rem] bg-white px-[2.4rem] pt-[3rem] pb-[2.8rem]">
      <div>
        <span className="H2">내 프로필</span>
      </div>
      <div>
        <div className="h-[9.6rem] w-[9.6rem] rounded-full bg-primary-main" />
        <p className="H2 text-primary-600">닉네임 여기</p>
        <p className="Cap1 text-primary-500">emailhere@mail.com</p>
      </div>
    </div>
  );
};

export default Profile;
