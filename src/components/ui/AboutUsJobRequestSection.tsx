import React from "react";

const AboutUsJobRequestSection = () => {
  return (
    <div className="w-full bg-primary/5 border-t border-white/5 py-12 px-4 mt-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-white text-2xl font-bold mb-2">
            علاقه‌مند به همکاری هستید؟
          </h3>
          <p className="text-slate-400">
            ما همیشه به دنبال استعدادهای جدید برای پیوستن به تیم خود هستیم.
          </p>
        </div>
        <button className="bg-primary text-white font-bold py-4 px-10 rounded-lg neon-border hover:brightness-125 transition-all">
          مشاهده فرصت‌های شغلی
        </button>
      </div>
    </div>
  );
};

export default AboutUsJobRequestSection;
