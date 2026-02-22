import React from "react";

const page = () => {
  return (
    <main>
      <main className="max-w-7xl mx-auto px-6 py-10 w-full flex flex-col gap-12">
        {/* <!-- Featured Post Section --> */}
        <section className="relative w-full rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col lg:flex-row-reverse min-h-[450px]">
          <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="Interior of a modern cozy bookstore with wooden shelves"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDD0N13QTEJUVQVPZsEU4BUNbYUVRSaels7NoYPFQfS7weqZtd0pB1pO-2AE7xFQpRagxJCbB8NM2xlYM0D2XT76SV1hQF65MWaX4vmkPq2gp5xYn_iXNdQKT01qE8sH8OyqcWRTQOJUffrYXOgh2ivq9Y5EtsRro75xdpmLmAjDis1wxHZPqI-pZSrgfRiug0JgoVkErGmDFRQf3hl5GFgIL9WBujXQTHWxAakOd_f7S23AIpfkKQz8vLJZOh2V0V_8-s_4Ra86EHx")`,
              }}
            ></div>{" "}
          </div>
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center items-start text-right">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase neon-border">
                ویژه سردبیر
              </span>
              <span className="text-slate-400 text-xs font-medium">
                ۵ مهر ۱۴۰۲ • ۱۲ دقیقه مطالعه
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              مصاحبه اختصاصی با نویسندگان معاصر: چالش‌های نوشتن در عصر دیجیتال
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
              در این گفتگوی صمیمی به بررسی تأثیر شبکه‌های اجتماعی بر کیفیت
              ادبیات داستانی و راهکارهایی برای حفظ تمرکز در دنیای پر از نویز
              امروزی پرداخته‌ایم.
            </p>
            <button className="group flex items-center gap-3 bg-primary text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:bg-primary/90 neon-glow">
              ادامه مطلب
              <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">
                arrow_back
              </span>
            </button>
          </div>
        </section>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* <!-- Blog Listing Grid --> */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                آخرین مطالب
              </h3>
              <div className="flex gap-2">
                <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">view_list</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <!-- Card 1 --> */}
              <article className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    data-alt="Collection of colorful books stacked on a table"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2ug7jnb3BNTbjvcx6pVvSMIgqPN6hqtB3cWKS-E5mXIE6lYr2HDBU4BkaABXXZ1woI8S4arQn6H-eUD_yNjUObPTaXYsKFu7dMtdr5z8sqXHcjBPP5rVJre-1BvpPjogmGhWuULDdWV89R8aJ2mfHFQowHjZgkGyL68CTgatD-qodamPDfXZ7XnZxdUYI4bCM6o3It5hiZMQ1qVJr3jinR16vuYChXEYTH6bWwUMB0FXRPgK6l6Q3zcwToWSsy9plpxRK7ANOM_Te")`,
                    }}
                  ></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/20 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-xs font-bold neon-border">
                      تازه‌های نشر
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                    بررسی پرفروش‌ترین کتاب‌های پاییزی انتشارات نو
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    نگاهی به آثاری که در ماه اخیر صدرنشین لیست فروش بوده‌اند و
                    بررسی دلایل موفقیت آن‌ها از نگاه منتقدان ادبی.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      ۸ دقیقه مطالعه
                    </span>
                    <a
                      className="text-primary text-sm font-bold flex items-center gap-1 group/link"
                      href="#"
                    >
                      مطالعه بیشتر
                      <span className="material-symbols-outlined text-sm group-hover/link:-translate-x-1 transition-transform">
                        arrow_back
                      </span>
                    </a>
                  </div>
                </div>
              </article>
              {/* <!-- Card 2 --> */}
              <article className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden relative">
<div
  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
  data-alt="Modern library interior with sunlight streaming through windows"
  style={{
    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8LIESjP-niA7VHUXLwfz1anxTEl5rzxNVaG3iOMYkf6yieLY0VCzGvJtd6xA0oGFX8jcEfVzQuKgRTftFYi4Wtem9fN-WXH9ntKhOC4iOWwK7sTqAQB3agzXW_3Lq0bVWzTaWf2-7nge6txarP1jgt0RVOrGQz82Fwr4K7RAcypHIeIBNOmNknS-OkHX7gpfT2lwf28J_oawHedtNi88ADWK8LZzjSxetWK6U8GROeaZjcL1j-vu_rx0BBHMw5ABoueC4-xPnvWU-")`
  }}
></div>                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/20 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-xs font-bold neon-border">
                      آموزشی
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                    چگونه یک کتابخوان حرفه‌ای شویم و عمیق‌تر بخوانیم
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    تکنیک‌هایی برای یادداشت‌برداری موثر و افزایش درک مطلب در
                    هنگام مطالعه کتاب‌های فلسفی و پیچیده.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      ۱۵ دقیقه مطالعه
                    </span>
                    <a
                      className="text-primary text-sm font-bold flex items-center gap-1 group/link"
                      href="#"
                    >
                      مطالعه بیشتر
                      <span className="material-symbols-outlined text-sm group-hover/link:-translate-x-1 transition-transform">
                        arrow_back
                      </span>
                    </a>
                  </div>
                </div>
              </article>
              {/* <!-- Card 3 --> */}
              <article className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    data-alt="Person reading a book in a sunlit garden"
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVwGDpcXQDt0jfKhBbq1e_2WOk_OUO4pPTkaeS3K9muPmbAHI8-eRwRGejE1CGc3iSreuahJJ1puk82VrZTlDj_oSIRsgwWz9EB0gUue7JRTGvSRzmYGJ0r6vMP4cufazPrbaaY5P-8z3ISVt2tTYer_VOkNBVOMfoGF4TXV4TLzqM3pSlKdfaJdiPQkqEwJktucfwh_cCUngCM4pr1WZM6SxcgnK29Z6ebh856lauZWnoGi-kohScW023shYfCyM-k4xwmdueJv0S');"}}
                  ></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/20 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-xs font-bold neon-border">
                      روانشناسی
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                    تأثیر شگفت‌انگیز کتاب‌درمانی بر سلامت روان
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    یافته‌های علمی جدید نشان می‌دهد که خواندن رمان‌های کلاسیک
                    می‌تواند تا ۷۰ درصد استرس روزانه را کاهش دهد.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      ۱۰ دقیقه مطالعه
                    </span>
                    <a
                      className="text-primary text-sm font-bold flex items-center gap-1 group/link"
                      href="#"
                    >
                      مطالعه بیشتر
                      <span className="material-symbols-outlined text-sm group-hover/link:-translate-x-1 transition-transform">
                        arrow_back
                      </span>
                    </a>
                  </div>
                </div>
              </article>
              {/* <!-- Card 4 --> */}
              <article className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    data-alt="Close up of old vintage book spines on a shelf"
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2mtRWreanj1CAaIdSSk4W2UXAqEWAJsWr08SjUno3Vm1_kBAHTnKqnbRe2rK5ZJTmkmgJ_oZ8rMcYJH1dkjbqc-34XQPOiL-VP_DDY_UvN8iZVh1frzR054kSIczm9MDVcFWDD-lnNa5OUHJENKW7pFCDfyvEDvcEhKqP8IwBA9OAMZsIZY3cqOi3H7bcBZrBjvNaL0_Eb6AwAwzRjVEm4W3Bp5WNeXkxUDhKUXAGFJcCosvsgci2LhHAeSu5AHZSbq8y9U37QHa3');"}}
                  ></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/20 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-xs font-bold neon-border">
                      کلاسیک
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                    بازخوانی ادبیات کلاسیک در عصر هوش مصنوعی
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    چرا هنوز هم باید به سراغ آثار نویسندگان بزرگ قرن نوزدهم
                    برویم و چه درس‌هایی برای دنیای دیجیتال دارند؟
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      ۱۲ دقیقه مطالعه
                    </span>
                    <a
                      className="text-primary text-sm font-bold flex items-center gap-1 group/link"
                      href="#"
                    >
                      مطالعه بیشتر
                      <span className="material-symbols-outlined text-sm group-hover/link:-translate-x-1 transition-transform">
                        arrow_back
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Pagination --> */}
            <div className="flex justify-center mt-12 gap-2">
              <button className="size-10 flex items-center justify-center rounded-xl bg-primary text-white neon-glow font-bold">
                ۱
              </button>
              <button className="size-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all font-bold">
                ۲
              </button>
              <button className="size-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all font-bold">
                ۳
              </button>
              <span className="size-10 flex items-center justify-center text-slate-400">
                ...
              </span>
              <button className="px-4 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all font-bold">
                بعدی
              </button>
            </div>
          </div>
          {/* <!-- Sidebar Filters --> */}
          <aside className="w-full lg:w-80 flex flex-col gap-8">
            {/* <!-- Search Widget --> */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h5 className="text-lg font-bold mb-4 text-slate-900 dark:text-white border-r-4 border-primary pr-3">
                جستجو در مقالات
              </h5>
              <div className="relative">
                <input
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl pr-4 pl-10 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="مثلاً: ادبیات داستانی"
                  type="text"
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                  search
                </span>
              </div>
            </div>
            {/* <!-- Categories --> */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h5 className="text-lg font-bold mb-6 text-slate-900 dark:text-white border-r-4 border-primary pr-3">
                دسته‌بندی‌ها
              </h5>
              <div className="flex flex-col gap-3">
                <a className="flex items-center justify-between group" href="#">
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary font-medium transition-colors">
                    همه مقالات
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs px-2 py-1 rounded-md group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    ۴۲
                  </span>
                </a>
                <a className="flex items-center justify-between group" href="#">
                  <span className="text-primary font-bold">نقد و بررسی</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md neon-border">
                    ۱۲
                  </span>
                </a>
                <a className="flex items-center justify-between group" href="#">
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary font-medium transition-colors">
                    گفتگو با نویسنده
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs px-2 py-1 rounded-md group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    ۸
                  </span>
                </a>
                <a className="flex items-center justify-between group" href="#">
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary font-medium transition-colors">
                    رویدادهای ادبی
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs px-2 py-1 rounded-md group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    ۵
                  </span>
                </a>
                <a className="flex items-center justify-between group" href="#">
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary font-medium transition-colors">
                    معرفی کتاب کودک
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs px-2 py-1 rounded-md group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    ۱۷
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- Tags --> */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h5 className="text-lg font-bold mb-6 text-slate-900 dark:text-white border-r-4 border-primary pr-3">
                برچسب‌های داغ
              </h5>
              <div className="flex flex-wrap gap-2">
                <a
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-all"
                  href="#"
                >
                  داستان کوتاه
                </a>
                <a
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-all"
                  href="#"
                >
                  رمان ایرانی
                </a>
                <a
                  className="px-3 py-1.5 bg-primary/10 rounded-lg text-xs font-bold text-primary neon-border"
                  href="#"
                >
                  پرفروش‌های ۲۰۲۳
                </a>
                <a
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-all"
                  href="#"
                >
                  فلسفه غرب
                </a>
                <a
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-all"
                  href="#"
                >
                  ادبیات پایداری
                </a>
              </div>
            </div>
            {/* <!-- Newsletter --> */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 neon-glow relative overflow-hidden">
              <div className="absolute -top-10 -left-10 size-32 bg-primary/10 rounded-full blur-2xl"></div>
              <h5 className="text-lg font-bold mb-3 text-slate-900 dark:text-white relative z-10">
                عضویت در خبرنامه
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 relative z-10">
                بهترین پیشنهادهای مطالعه را هر هفته در ایمیل خود دریافت کنید.
              </p>
              <div className="flex flex-col gap-2 relative z-10">
                <input
                  className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm outline-none"
                  placeholder="ایمیل شما..."
                  type="email"
                />
                <button className="w-full bg-primary text-white font-bold py-2.5 rounded-xl hover:bg-primary/90 transition-all">
                  تایید عضویت
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </main>
  );
};

export default page;
