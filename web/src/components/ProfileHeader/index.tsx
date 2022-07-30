import { ArrowLeft } from 'phosphor-react';

const ProfileHeader = () => {
  const data = {
    name: 'Tiaguchi ',
    src: 'https://avatars3.githubusercontent.com/u/527058?s=460&v=4',
  };
  return (
    <div className="flex flex-col bg-[#337782] w-[360px] h-[207px] rounded-b-3xl justify-center items-center">
      <div className="w-3/4">
        <ArrowLeft color='white' size={32}/>
      </div>
      <div className="profile-header__avatar">
        <img src={data.src} className="w-[80px] h-[80px] rounded-full" />
      </div>
      <div className="profile-header__name">
        <h1>{data.name}</h1>
      </div>
    </div>
  );
};

export default ProfileHeader;
