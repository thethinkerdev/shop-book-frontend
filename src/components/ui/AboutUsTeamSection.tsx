import React from "react";

const AboutUsTeamSection = () => {
  return (
    <div className="w-full max-w-[1200px] py-24 px-4">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-white text-4xl font-bold mb-4">تیم ما</h2>
        <div className="w-24 h-1 bg-primary neon-border"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* <!-- Member 1 --> */}
        <div className="group">
          <div className="relative aspect-square mb-6 rounded-xl overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 neon-border">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-alt="Profile photo of a male founder with modern lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSHmh8VpwojAxJn4H4TYWt0f_0ObUDPbnwplk2L1UQTsiGoXIHzNrxkBjLGR-9zlwHG6vOXODT6hZ-6Bach2PsvqnDJiJGX9ymChMdOPEpa6inuzZwYVS2gToLygm5g8HeI8tiXe1IVkhBLT2RhpicFQJno6iiEohFv0UUc7tWLaGOIYfewFhExOFaYL0E-sBhk5librV7jXB8AG1o84mMR3ck3yedRggjbFFdamULqQiKijHFNVYgdqiHHZUW0moQ3jbP15DoRwLg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h4 className="text-white text-xl font-bold text-center">آرش راد</h4>
          <p className="text-primary text-sm text-center font-display mt-1">
            مدیر اجرایی (CEO)
          </p>
        </div>
        {/* <!-- Member 2 --> */}
        <div className="group">
          <div className="relative aspect-square mb-6 rounded-xl overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 neon-border">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-alt="Profile photo of a female creative director"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbecKuoAI45oCusbjSdr_Ky0NwU69lvBOheTQe6zFRgH389AGlOj4XkcOSK3xoDp3XGj2qz44NmOcpNI8V_bYmABE_lTwEehe4udSI8gigC2aMS--YX7pNJusIm57FOoKVvKNQoFUZUc4rfF5SXmvCag4POaURhVD229Os5wURmEjAvlPZkhc3mWuJ3W-fga3hPy6qJ-zN9UYxAxhSGJ9Q_CLpTzbFJO3EHw0kENt53vjWD5ln9z6AlPAapljLqRvy59SqVz7ZwIes"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h4 className="text-white text-xl font-bold text-center">
            سارا امینی
          </h4>
          <p className="text-primary text-sm text-center font-display mt-1">
            مدیر خلاقیت
          </p>
        </div>
        {/* <!-- Member 3 --> */}
        <div className="group">
          <div className="relative aspect-square mb-6 rounded-xl overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 neon-border">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-alt="Profile photo of a male CTO"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArfMfLWz_EsHiFTHRjeriOK1SBiPbmNpvwxVmgq4KIjc4rKViv5tZ0vWKDSn3juO_qggWe7HIn-CIoF1GtC44j8w6LN_mOrj-t1rWatnzx1ak4DaUspAcyOsBG-v4o7tUC52XFF5Rc6wOWiqROcA5FM3xIP-6xR3k3-4w5wCuTxWi0ssqtnusYHIEsVX4kNEL_HOwyBdtO9RhOK1-1lRXkROQNsUrZK3ea13NYC7lFmUTUObSMNb8jNYde1jQ_MOTXUL5YjpHoyj88"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h4 className="text-white text-xl font-bold text-center">
            کیوان مهر
          </h4>
          <p className="text-primary text-sm text-center font-display mt-1">
            مدیر تکنولوژی
          </p>
        </div>
        {/* <!-- Member 4 --> */}
        <div className="group">
          <div className="relative aspect-square mb-6 rounded-xl overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 neon-border">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-alt="Profile photo of a female marketing head"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhXI3N4dq7myeMNO3M339fiR5HmryJEmbqXVM0pdEIa3F0m9xGxb1VVNBC20cDnGt7srl0Q73_Zev6ugAHz3PizELjfPJRkcS_ILVaZPFVN3lRqD4EI-FeoccTN8wpn-2KUSE09sOrFELnHZK-Cqn4SBbnpWjIWnHlVxDCCqaY1WDyuKaXCDbQYwsErKja-Va5LAO9LYIJRNJXS1e9GCxH70DHkGFmypqzu5Q301XCfWUFAl2laX_sz4KQmvq0F6xfYymu0svOOV4A"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h4 className="text-white text-xl font-bold text-center">مریم شاد</h4>
          <p className="text-primary text-sm text-center font-display mt-1">
            مدیر مارکتینگ
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTeamSection;
