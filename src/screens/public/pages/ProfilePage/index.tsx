import "./styles.scss";
import { Avatar, Popconfirm } from "antd";
import { useProfile } from "./useProfile";

import bgImage from "../../../../assets/profilebg.jpeg";
import { MyEventsComp, MyTicketsComp } from "./components";

export const ProfilePage = () => {
  const { userData, navProfile, navActive, handleActive, onLogout } =
    useProfile();

  return (
    <>
      <div
        className="absolute inset-0 bg-cover opacity-20"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 100%),url(${bgImage})`,
        }}
      ></div>
      <div className="pt-16 lg:pt-12 w-full mx-auto max-w-[80rem] min-h-screen z-10 relative pb-10">
        {/* infouser */}
        <div className="flex justify-between items-center gap-2 px-4 sm:px-8">
          {/* img,name */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar
                size={64}
                icon={<span className="pi pi-user"></span>}
                className="bg-white! text-black! border-2! border-red-500!"
              />
              {/* <span className="pi pi-camera bgPrimary p-1 absolute bottom-0 text-xs right-0 rounded-full cursor-pointer"></span> */}
            </div>

            <div className="grid">
              <h1 className="bebasNeue text-3xl">
                {userData.firstName} {userData.lastName}
              </h1>
            </div>
          </div>
          {/* btn */}
          {/* <div>
            <Button className="w-full rounded-3xl! uppercase btnStyle">
              <span className="text-xs pi pi-pen-to-square"></span>
              <span className="font-bold text-xs">Edit</span>
            </Button>
          </div> */}
        </div>
        {/* data */}
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-8">
          <div className="col-span-1 pr-4">
            <div className="flex flex-col gap-3">
              {navProfile.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-2 cursor-pointer justify-end pr-2 uppercase py-[1px] ${
                    item.active ? "bgActiveNav text-white" : "text-white/20"
                  }`}
                  onClick={() => handleActive(item.id)}
                >
                  <span className="bebasNeue text-base">{item.name}</span>
                </div>
              ))}

              <div
                className={`flex items-center gap-2 cursor-pointer justify-end pr-2 uppercase py-[1px] mt-8`}
              >
                <Popconfirm
                  title="Logout"
                  description="Are you sure you want to logout?"
                  onConfirm={onLogout}
                  okText="Yes"
                  cancelText="No"
                >
                  <span className="bebasNeue text-base flex items-center gap-2">
                    <span className="pi pi-sign-out"></span> Logout
                  </span>
                </Popconfirm>
              </div>
            </div>
          </div>
          <div className="col-span-3 px-4 lg:pl-0 mt-4 lg:mt-0">
            {navActive == 1 && <MyEventsComp />}
            {navActive == 2 && <MyTicketsComp />}
          </div>
        </div>
      </div>
    </>
  );
};
