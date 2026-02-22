import React from "react";

const page = () => {
  return (
    <main className="px-4 md:px-20 lg:px-40 py-8">
      <div className="flex flex-col lg:flex-row-reverse gap-8">
        {/* <!-- Sidebar (RTL: Right side) --> */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-28 space-y-6">
            {/* <!-- Filters Container --> */}
            <div className="bg-[#161821] border border-primary/20 rounded-xl p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="material-symbols-outlined">filter_list</span>
                <h3 className="text-white text-lg font-bold">فیلترها</h3>
              </div>
              {/* <!-- Categories --> */}
              <div className="space-y-4 mb-8">
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider">
                  دسته‌بندی‌ها
                </p>
                <div className="flex flex-col gap-1">
                  <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-primary/10 hover:text-primary transition-all group">
                    <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">
                      auto_stories
                    </span>
                    <span className="text-sm font-medium">فلسفه و منطق</span>
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-white shadow-neon transition-all">
                    <span className="material-symbols-outlined text-xl">
                      history_edu
                    </span>
                    <span className="text-sm font-medium">داستان و رمان</span>
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-primary/10 hover:text-primary transition-all group">
                    <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">
                      ink_pen
                    </span>
                    <span className="text-sm font-medium">شعر کلاسیک</span>
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-primary/10 hover:text-primary transition-all group">
                    <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">
                      account_balance
                    </span>
                    <span className="text-sm font-medium">تاریخ جهان</span>
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-primary/10 hover:text-primary transition-all group">
                    <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">
                      memory
                    </span>
                    <span className="text-sm font-medium">
                      تکنولوژی و هوش مصنوعی
                    </span>
                  </button>
                </div>
              </div>
              {/* <!-- Price Slider --> */}
              <div className="space-y-6 mb-8">
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider">
                  محدوده قیمت (تومان)
                </p>
                <div className="px-2">
                  <div className="h-1.5 w-full bg-white/10 rounded-full relative">
                    <div className="absolute right-[20%] left-[10%] h-full bg-primary shadow-[0_0_10px_rgba(37,71,244,0.5)]"></div>
                    <div className="absolute right-[20%] top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-neon cursor-pointer"></div>
                    <div className="absolute left-[10%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-neon cursor-pointer"></div>
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] text-white/50 font-bold">
                    <span>۵۰,۰۰۰</span>
                    <span>۱,۵۰۰,۰۰۰</span>
                  </div>
                </div>
              </div>
              {/* <!-- Attributes --> */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary font-medium cursor-pointer hover:bg-primary/20 transition-colors">
                  موجود
                </span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 font-medium cursor-pointer hover:bg-white/10 transition-colors">
                  تخفیف‌دار
                </span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 font-medium cursor-pointer hover:bg-white/10 transition-colors">
                  نسخه چاپی
                </span>
              </div>
              <button className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold shadow-neon-strong transition-all active:scale-95">
                اعمال فیلترها
              </button>
            </div>
            {/* <!-- Settings Shortcut --> */}
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-white/50 hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">
                settings
              </span>
              <span className="text-sm">تنظیمات پیشرفته</span>
            </button>
          </div>
        </aside>
        {/* <!-- Catalog Content --> */}
        <section className="flex-1">
          {/* <!-- Sorting & Chips --> */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-primary/20 border border-primary/40 px-4 py-2 rounded-lg text-primary text-sm font-bold">
                <span>داستان</span>
                <span className="material-symbols-outlined text-sm cursor-pointer">
                  close
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white/70 text-sm font-medium">
                <span>پرفروش‌ترین‌های هفته</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span className="material-symbols-outlined">sort</span>
              <span>مرتب‌سازی:</span>
              <select className="bg-transparent border-none text-white font-bold focus:ring-0 cursor-pointer">
                <option>جدیدترین‌ها</option>
                <option>ارزان‌ترین</option>
                <option>گران‌ترین</option>
                <option>محبوب‌ترین</option>
              </select>
            </div>
          </div>
          {/* <!-- Books Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* <!-- Book Card 1 --> */}
            <div className="group relative bg-[#161821] border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-neon">
              <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Minimalist dark book cover with abstract art"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwXXvYbGBW1H5_IwtPX4Aiz7CrIyGFdJgJJuk6WVKauuMUaosRMVGX27Ok0JHwkRNQvX4wyrmaUt9cU7n0XIu8iwjzBodlRXdNgshgyn7XyKgOTL0DUzHCcuYjhdan8q4A-rHeTb9Acl06O5Go2rpqyCSBTey8uiEIbNOrO7uDD0Zc0bPfw41n-6I7w_9-VID6guzPAmz3EgF9yCcKybBxmQ7_DMkxK8hHzyPxQsMLjeJJYEQ1R2sQOj9QFvXBhUXQ5Z2sHq3-JVgb"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="w-full py-2 bg-white text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    مشاهده جزئیات
                  </button>
                </div>
                <div className="absolute top-3 right-3 bg-primary px-2 py-1 rounded text-[10px] font-bold shadow-neon">
                  پیشنهاد ویژه
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                  کوری
                </h4>
                <p className="text-white/50 text-xs font-medium italic">
                  ژوزه ساراماگو
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex flex-col">
                    <span className="text-primary text-xl font-bold tracking-tight">
                      ۱۲۵,۰۰۰
                    </span>
                    <span className="text-[10px] text-white/30">تومان</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition-all shadow-[0_0_10px_rgba(37,71,244,0.2)]">
                    <span className="material-symbols-outlined text-sm">
                      shopping_cart
                    </span>
                    <span>خرید</span>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Book Card 2 --> */}
            <div className="group relative bg-[#161821] border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-neon">
              <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Modern book cover with geometric red shapes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYgj1hK1b3bp7OTbilHml1Jn5BbGksJwtl8DteJNkDdV-LDv26W4VM06ti8wgpswcRhZqxSD8n4IgrhNPJrk6G1zIUCcVHdwS6EmFkUDHJdQiPyMf0vn5V_Jsyn1DDC84M3aduiMLscegooauKnTPp9WwvGohetuC5s1VIabSCs41dsgZwY4Jgn28QU2GNRkgp7hcjxN4uzLIhB48r7FGey4oXtzBUh_tmX4s6Wyv66dneBWq6vJmvZUNEvOCDCFaXeggWNpdKx9A-"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="w-full py-2 bg-white text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    مشاهده جزئیات
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                  دنیای قشنگ نو
                </h4>
                <p className="text-white/50 text-xs font-medium italic">
                  آلدوس هاکسلی
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex flex-col">
                    <span className="text-primary text-xl font-bold tracking-tight">
                      ۸۹,۰۰۰
                    </span>
                    <span className="text-[10px] text-white/30">تومان</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition-all shadow-[0_0_10px_rgba(37,71,244,0.2)]">
                    <span className="material-symbols-outlined text-sm">
                      shopping_cart
                    </span>
                    <span>خرید</span>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Book Card 3 --> */}
            <div className="group relative bg-[#161821] border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-neon">
              <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="classNameic book cover with golden typography"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF43Klh9axBHoqyhUC5BJ8cXyS_AmaOjWBoS7nYVpXYUxMx-vk6vNgWvWNDTYxm2WDbXBn7HVHubDA9V5MB97fMk1zhd9cMUnbdzq20mydb9WLZeO8SQ8HI4HTwBrWkT9yyuST2lXW2No7xQAS3g-Xh7q0NyYgkzr-KHRmdjjzRtRHuAkbkbo42YsBOtgTk2vJmUQrK6ZoF5gKF2gLbqjmpwvW72af5gWMqt1HTshKyhBUXs6uj86A2TMHypA2lyR3sDnyc6UJyQ21"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="w-full py-2 bg-white text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    مشاهده جزئیات
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                  ۱۹۸۴
                </h4>
                <p className="text-white/50 text-xs font-medium italic">
                  جورج اورول
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex flex-col">
                    <span className="text-primary text-xl font-bold tracking-tight">
                      ۹۵,۰۰۰
                    </span>
                    <span className="text-[10px] text-white/30">تومان</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition-all shadow-[0_0_10px_rgba(37,71,244,0.2)]">
                    <span className="material-symbols-outlined text-sm">
                      shopping_cart
                    </span>
                    <span>خرید</span>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Book Card 4 --> */}
            <div className="group relative bg-[#161821] border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-neon">
              <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Futuristic science fiction book cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZbZ2iY_fT2MqXxOAeRtmDb5UtRcQfnItKEfHiDukHM29YDJuxAB_-48nFhJNgAjLN_CGxO1B8cG3fBp9diSAK8FGiOEHYeLgom7GULBPeGq1GufwZYI5yWNJnsO32NQBDbnf7V1yKNh3Z8IxbEbOM9pMLI1XtHgF6DMmc27hRBolnHRmB5aO9yAQQVqjq1I0FLm0fuhyjmdEZxeuuPyCH_Nz3PimWZaH7CPtXKcu1V__7FDdko217GP1VBNztQnOF-RBvSY7Zyw6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="w-full py-2 bg-white text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    مشاهده جزئیات
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                  ایستگاه یازده
                </h4>
                <p className="text-white/50 text-xs font-medium italic">
                  امیلی سنت جان مندل
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex flex-col">
                    <span className="text-primary text-xl font-bold tracking-tight">
                      ۱۱۰,۰۰۰
                    </span>
                    <span className="text-[10px] text-white/30">تومان</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition-all shadow-[0_0_10px_rgba(37,71,244,0.2)]">
                    <span className="material-symbols-outlined text-sm">
                      shopping_cart
                    </span>
                    <span>خرید</span>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Book Card 5 --> */}
            <div className="group relative bg-[#161821] border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-neon">
              <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Photography book cover with nature background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFIcXaSB9miEV4L19AHrDMMp0BHg7OvXURkpUAHgp3ZcVerznEVibf3SLWV7KuUPHxZdxzxinDmsJ566OlzyCFQdMdmKVVaGv-OV4GB4b8zIlmxMuVPVfMrDmJZ6dMZ5q9cDe2kIZ6qnJSxEQv0aUyH67Rd9vvBLxjxc1ehYF3Haj78_9gV6mKjq5EDqvfsCYcOro28abGyF2qH_mfvoAzN9T76plEXFejYOLCIXzilh7_9OylPFWXzbmn82u8J6VOqJTmXEPOCob6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="w-full py-2 bg-white text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    مشاهده جزئیات
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                  کتابخانه نیمه‌شب
                </h4>
                <p className="text-white/50 text-xs font-medium italic">
                  مت هیگ
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex flex-col">
                    <span className="text-primary text-xl font-bold tracking-tight">
                      ۱۴۵,۰۰۰
                    </span>
                    <span className="text-[10px] text-white/30">تومان</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition-all shadow-[0_0_10px_rgba(37,71,244,0.2)]">
                    <span className="material-symbols-outlined text-sm">
                      shopping_cart
                    </span>
                    <span>خرید</span>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Book Card 6 --> */}
            <div className="group relative bg-[#161821] border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-neon">
              <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="History book cover with old parchment texture"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbsnAC1z2j5XF3jqYBc2zMLtLWc68WtiQZa44u7JbYHRlt8Tcg2O1l2XxtXnhxkmayFo1EMO20rdkNhkpDKtXoKCVpwL1cunRuBwiG4wwURdt0-1MQssDJhVtMenGX0ytWO1AasH_9A3O3Cd9cVX--RfQ-N9YSd5U3n_K6AU_59mePTRT1YQdVfgMOV3O5aaRadMzAR2PzGvvUeNDiAJ6r0h4GYamlqkP3phnDOD3m7mImiUrR30W-CBOE82xsmXqxIamktKzt8saO"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="w-full py-2 bg-white text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    مشاهده جزئیات
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                  انسان خردمند
                </h4>
                <p className="text-white/50 text-xs font-medium italic">
                  یووال نوح هراری
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex flex-col">
                    <span className="text-primary text-xl font-bold tracking-tight">
                      ۱۸۰,۰۰۰
                    </span>
                    <span className="text-[10px] text-white/30">تومان</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition-all shadow-[0_0_10px_rgba(37,71,244,0.2)]">
                    <span className="material-symbols-outlined text-sm">
                      shopping_cart
                    </span>
                    <span>خرید</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Pagination --> */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-2 bg-[#161821] border border-white/10 p-2 rounded-xl">
              <button className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold bg-primary text-white shadow-neon">
                ۱
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold text-white/60 hover:bg-white/5 transition-colors">
                ۲
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold text-white/60 hover:bg-white/5 transition-colors">
                ۳
              </button>
              <span className="px-2 text-white/30">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold text-white/60 hover:bg-white/5 transition-colors">
                ۱۲
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </nav>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
