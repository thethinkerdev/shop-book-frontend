import React from "react";

const BackToHome = () => {
  return (
    <div className="mt-8 text-center">
      <a
        className="text-white/30 hover:text-white transition-colors text-sm flex items-center justify-center gap-2"
        href="#"
      >
        <span className="material-symbols-outlined text-sm">
          keyboard_backspace
        </span>
        بازگشت به خانه
      </a>
    </div>
  );
};

export default BackToHome;
