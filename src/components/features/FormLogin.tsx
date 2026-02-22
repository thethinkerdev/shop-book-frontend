import Link from "next/link";
import BackToHome from "../ui/BackToHome";
import Button from "../ui/Button";
import Input from "../ui/Input";

const FormLogin = () => {
  return (
    <main className="flex-1 flex items-center justify-center p-6 relative bg-radial">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="layout-content-container w-full max-w-[480px]">
        <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="flex flex-col items-center mb-10">
            <div className="size-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/30 shadow-[0_0_15px_rgba(37,71,244,0.2)]">
              <span className="material-symbols-outlined text-primary text-4xl">
                person
              </span>
            </div>
            <h1 className="text-white text-3xl font-bold mb-3">ورود به حساب</h1>
            <p className="text-white/60 text-base text-center">
              فروشگاه نئون دارای متنوع ترین و خاص ترین کتاب ها
            </p>
          </div>
          <form className="space-y-5">
            <Input
              label="ایمیل"
              name="email"
              placeholder="ایمیل خود را وارد کنید..."
              type="email"
              icon={"mail"}
            />

            <Input
              label="رمزعبور"
              name="password"
              placeholder="رمز عبور خود را وارد کنید..."
              type="password"
              icon={"password"}
            >
              <a className="text-primary text-xs hover:underline" href="#">
                فراموشی رمز عبور؟
              </a>
            </Input>
            <div className="pt-4">
              <Button className="hover:bg-primary/90 transform active:scale-[0.98]">
                <span>ورود به حساب کاربری</span>
                <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1 rotate-180">
                  login
                </span>
              </Button>

              <p className="text-white/40 text-[12px] text-center mt-6 leading-relaxed">
                هنوز ثبت‌نام نکرده‌اید؟{" "}
                <Link
                  className="text-primary hover:underline font-bold"
                  href="/register"
                >
                  ایجاد حساب کاربری
                </Link>
              </p>
            </div>
          </form>
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <a
                className="text-white/40 hover:text-white transition-colors text-sm"
                href="#"
              >
                پشتیبانی
              </a>
              <span className="size-1 bg-white/10 rounded-full"></span>
              <a
                className="text-white/40 hover:text-white transition-colors text-sm"
                href="#"
              >
                قوانین
              </a>
            </div>
          </div>
        </div>
        <BackToHome />
      </div>
    </main>
  );
};

export default FormLogin;
