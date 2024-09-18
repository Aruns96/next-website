import React from "react";
import payam from "@/public/images/images.jpeg";
import parip from "@/public/images/parip.jpeg";
import vada from "@/public/images/vada.jpeg";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] ">
      <h1 className="heading">
        Foods made with <br />
        love and
        <span className="text-red-600"> care</span>
      </h1>
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={payam} alt="pazham" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              പഴം പൊരി
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              വാഴക്കപ്പം അല്ലെങ്കിൽ പഴം പൊരി, ഏത്തക്ക അപ്പം എന്നും
              അറിയപ്പെടുന്നു, പഴുത്ത വാഴപ്പഴം അല്ലെങ്കിൽ വാഴപ്പഴം, മൈദ മാവ്
              എന്നിവയുള്ള ഒരു വറുത്ത ഭക്ഷണമാണ്. ദക്ഷിണേന്ത്യൻ പാചകരീതികളിൽ,
              പ്രത്യേകിച്ച് കേരളത്തിൽ, ഇത് സാധാരണയായി പ്രഭാതഭക്ഷണമായോ
              ലഘുഭക്ഷണമായോ കഴിക്കുന്നു.
            </p>
          </div>
        </div>

        <div data-aos="zoom in" data-aos-delay= "300" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
            <Image src={vada} alt="pazham" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              വട
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              യെല്ലോ സ്പ്ലിറ്റ് പീസ് പച്ചമുളക്, മുഴുവൻ ചുവന്ന മുളക് ഉള്ളി, ഉപ്പ്
              എന്നിവ ഉപയോഗിച്ച് ഉണ്ടാക്കുന്ന കേരളത്തിലെ ഒരു
              പ്രധാന ഭക്ഷണമാണ് പരുപ്പ് വട. ദക്ഷിണേന്ത്യയിൽ ലഭ്യമായ മറ്റ് സമാന
              ആകൃതിയിലുള്ള വടകളിൽ നിന്ന് ഇത് തികച്ചും വ്യത്യസ്തമാണ്.
            </p>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-delay= "400" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={parip} alt="pazham" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
            പരിപ്പു വട
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              പയർവർഗ്ഗങ്ങൾ, സാഗോ അല്ലെങ്കിൽ ഉരുളക്കിഴങ്ങ് എന്നിവയിൽ നിന്ന് വട
              ഉണ്ടാക്കാം. സാധാരണയായി ഉപയോഗിക്കുന്ന പയർവർഗ്ഗങ്ങളിൽ പയറുവർഗ്ഗങ്ങൾ,
              ചെറുപയർ, ഉഴുന്ന്, ചെറുപയർ എന്നിവ ഉൾപ്പെടുന്നു. രുചിയും
              പോഷകമൂല്യവും മെച്ചപ്പെടുത്താൻ പച്ചക്കറികളും മറ്റ് ചേരുവകളും
              ചേർക്കുന്നു.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
