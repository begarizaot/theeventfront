export const EventCardComp = () => {
  return (
    <div className="text-white rounded-xl bgBorder">
      <div className="p-[2px] cursor-pointer h-[30rem] relative">
        <div
          style={{
            backgroundImage:
              'linear-gradient(rgba(15, 15, 15, 0) 20%, rgba(15, 15, 15, 0.8) 70%, rgb(15, 15, 15) 90%), url("https://res.cloudinary.com/dii5f60xx/image/upload/v1737242025/events/event_Id_22_a5c675459d.png")',
          }}
          className="h-[99.2%] w-[99%] absolute bg-cover bg-center bg-no-repeat rounded-xl"
        ></div>
        <div className="absolute bottom-0 w-full p-4">
          <div className="text-center">
            {/* date */}
            <div className="flex flex-col items-center">
              <h6 className="font-bold">Friday</h6>
              <p className="text-xs">February</p>
              <h1 className="font-bold text-3xl">14</h1>
            </div>
            {/* name */}
            <h1 className="font-bold sm:text-lg">
              IZAAK VALENTINES DAY CONCERT
            </h1>
          </div>
          {/* info */}
          <div className="mt-2 flex justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <span className="pi textPrimary text-lg pi-map-marker"></span>
                <span className="text-sm">Tampa</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="pi textPrimary text-lg pi-clock"></span>
                <span className="text-sm">10:00 pm - 03:00 am</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <span className="pi textPrimary text-lg pi-id-card"></span>
                <span className="text-sm">18+</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="pi textPrimary text-lg pi-ticket"></span>
                <span className="text-sm">
                  $55 <span>- $75</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
