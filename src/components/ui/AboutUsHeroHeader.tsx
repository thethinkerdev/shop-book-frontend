const AboutUsHeroHeader = () => {
  return (
    <div className="w-full max-w-[1200px] mt-8 px-4">
      <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          data-alt="Close up of modern library with neon blue lights"
          style={{ backgroundImage: "url(/bg-about-us.png)" }}
        ></div>

        <div className="relative h-full flex flex-col justify-end p-10">
          <h1 className="text-white text-5xl font-bold mb-4 font-display">
            داستان ما
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            ترکیب سنت کتاب‌خوانی ایرانی با تکنولوژی و طراحی مدرن نئونی برای نسل
            جدید خوانندگان.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroHeader;
