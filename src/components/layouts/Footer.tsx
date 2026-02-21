const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 lg:px-40 flex flex-col md:flex-row justify-between items-center border-t border-white/5 bg-[#f5f6f8] dark:bg-[#0a0b14] gap-4">
      <div className="text-white/20 text-xs font-display tracking-wider">
        © 2024 NEON BOOKSTORE. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-4">
        <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:border-primary/50 cursor-pointer transition-all">
          <span className="material-symbols-outlined text-white/40 text-lg">
            share
          </span>
        </div>
        <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:border-primary/50 cursor-pointer transition-all">
          <span className="material-symbols-outlined text-white/40 text-lg">
            language
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
