export const FooterComp = () => {
  return (
    <footer className="flex flex-col px-10 max-w-[80rem] mx-auto py-4 gap-4 text-white text-center items-center">
      <img
        src="https://www.theeventjet.com/assets/bg-white-BF_g_ajj.png"
        alt=""
        className="w-[60%] sm:w-[30%] lg:w-[25%]"
      />
      {/* navs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <p className="cursor-pointer text-sm sm:text-base">Terms & Conditions</p>
        <p className="cursor-pointer text-sm sm:text-base">Privacy Policy</p>
        <p className="cursor-pointer text-sm sm:text-base">Contact Us</p>
      </div>

      <div className="flex justify-center gap-10">
        <span className="pi pi-instagram text-xl cursor-pointer"></span>
        <span className="pi pi-whatsapp text-xl cursor-pointer"></span>
        <span className="pi pi-twitter text-xl cursor-pointer"></span>
        <span className="pi pi-tiktok text-xl cursor-pointer"></span>
      </div>

      <p className="text-xs sm:text-sm">© 2025 - The Event Jet, All Rights Reserved.</p>
    </footer>
  );
};
