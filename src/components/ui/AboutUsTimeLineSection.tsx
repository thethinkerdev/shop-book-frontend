const AboutUsTimeLineSection = () => {
  return (
    <div className="w-full max-w-[1200px] py-16 px-4">
      <h2 className="text-white text-3xl font-bold mb-16 pr-4 border-r-4 border-primary">
        مسیر رشد ما
      </h2>
      <div className="relative">
        {/* <!-- Vertical Line --> */}
        <div className="absolute right-8 top-0 bottom-0 w-1 timeline-line rounded-full opacity-30"></div>
        {/* <!-- Timeline Items --> */}
        <div className="space-y-16">
          {/* <!-- Year 1 --> */}
          <div className="relative pr-20 group">
            <div className="absolute right-6 top-0 size-5 rounded-full bg-primary neon-border ring-4 ring-background-dark"></div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm group-hover:border-primary/50 transition-all duration-500">
              <span className="text-primary font-display text-2xl font-bold block mb-2">
                ۱۳۹۸
              </span>
              <h3 className="text-white text-xl font-bold mb-3">
                تولد یک ایده
              </h3>
              <p className="text-slate-400 leading-relaxed">
                شروع به کار در یک دفتر کوچک با هدف دیجیتالی کردن دسترسی به
                کتاب‌های نایاب فارسی.
              </p>
            </div>
          </div>
          {/* <!-- Year 2 --> */}
          <div className="relative pr-20 group">
            <div className="absolute right-6 top-0 size-5 rounded-full bg-primary neon-border ring-4 ring-background-dark"></div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm group-hover:border-primary/50 transition-all duration-500">
              <span className="text-primary font-display text-2xl font-bold block mb-2">
                ۱۴۰۰
              </span>
              <h3 className="text-white text-xl font-bold mb-3">
                گسترش پلتفرم
              </h3>
              <p className="text-slate-400 leading-relaxed">
                راه‌اندازی اولین نسخه وب‌اپلیکیشن هوشمند با استفاده از هوش
                مصنوعی برای پیشنهاد کتاب.
              </p>
            </div>
          </div>
          {/* <!-- Year 3 --> */}
          <div className="relative pr-20 group">
            <div className="absolute right-6 top-0 size-5 rounded-full bg-primary neon-border ring-4 ring-background-dark"></div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm group-hover:border-primary/50 transition-all duration-500">
              <span className="text-primary font-display text-2xl font-bold block mb-2">
                ۱۴۰۲
              </span>
              <h3 className="text-white text-xl font-bold mb-3">جامعه نئون</h3>
              <p className="text-slate-400 leading-relaxed">
                رسیدن به رکورد ۵۰ هزار کاربر فعال و برنده جایزه نوآوری در
                کسب‌وکارهای دیجیتال.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTimeLineSection;
