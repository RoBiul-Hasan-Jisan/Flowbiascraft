import React, { useState, useRef, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


const customers = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png",
  },
];

const partners = [
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Salesforce",
    logo:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAC8CAMAAAC672BgAAAAdVBMVEUAoeD///////4Ant8Am94An98Amt77/f0YpOHb8foAouD2/P2h1vEApOG64PR4xOvk9Pu13vSHyu1rv+mc0/Dr9/w5ruTJ5/dlvOiQzu5Stufy+v7T7PgyqeKt2vK22/LE4/VGsuUAlNzZ7fgorON3wOp+x+tIFEzzAAARD0lEQVR4nO2d14KqOhSGwRRHKWKhCMLo0fH9H/GkUiQBpCgz7v9qbwdI+EhWVtqKYQ6Udz2F4fl8Dk8rf+iz3i2j/60rd3cxMCyEYbA5nKzxMvdq9YThZzGAECBkVIQAgPi2C8fN48vUB0ZiBxg+YKgQgevdavScvkDPwwgjUiS0JHIejr2cILvT6lkYWdpQJio8IDgmk2R5Oj0HI3M6ohAGZPcMDv8abu3D8WBn7nX1Fo7PwDh3LRW5ALI7PdknDROpWqT+UdGWCayjY/jqhqk7DD9+FgUtHTBtbVpOx1TVMBE4ILZf6rt0hpGBNqupwYE3TY/1dg4BoWcJ4+3rDHFHGFbUo1gIgVTbzp7jBhKSx/r4quLRDcbJ6VcsBA2othzbbuaY1JfNa3B0gpH1LxZccF9/6Cno/lTSLr3CmHaBsYPDUNC3uTy8TLJ/DjBYbyd5/4o6wNgMZ0Fe5lbxHLbo2XqH4MWbCoJUO4xoDBaEhlPQWPYyxwhkU5IwO8AYiQV5l1TSWKU9W2m4n7aZbYMxSh3hAjduN9yeHgt7xKTNSguM43gsqBWljzzgAU0TcqY0HM0wsjFZEBr7wU0TMiYcKWmEcRqXBfE37MFFDaHrW2AkzkBfq67+5iLXhDSaYETDcz6F0HoqK9oAYzt2JRlLKJ3IN9fDSIzRK8lYAtGrYeznWUmY4EGd56VlJUliWT19My2M0VuSUQUfjKh1zY77OEidNen0rNdpEG+y8OlxVC2MYLaVhArcipz67j1AGAKAqAza3hDRodQ0Ojw1jqqDMVvrKQR3PJ/XY0CHkdUX0XFUI846lxAdjHTWBYMIEr/cO6a4zXNBCILY7WZENDDmXjDIS8arqHUAVV4LnV2XPo0GRjDjpkQItU5yli8GMGrv1KhhzLsp6SeCo610qGHM2cfoLwBbhpWVMJK5W8++Amv3aRjzN599hXDU0NAqYcR/tWQYdC5cXzhUMP5sLWFqmPxVwXD/bC3hAqlmQEQFY/Mn25KSEFCvk1DBmL0rPlgIKycrFTD8v14wqLBqdk4BI/zjJoMLK5ZJKGAcPqFkKGkoYPxNX7yuOg0FjF/QYx1H+NwO4+vPNyZCCHptMP62/1kRcpYtMLxPqSVEIG6Bcf2IllUIHv/BKITDfzByofU/GIXApgmG91kwDHxqgvFBrQkVujXA+IhOa1kw08Ow3p25VwsZSy2M5fpzXFCufLXHJ/dNpBBaamH85YkCteR+GAWM46dZUNJh08IYeVnwbxA862D8xSn4FqFYB+ODBjRyYV8DYy7jfo87XacUOOhgDLegbOPyoCcgiNeOAYfuFOycXKqDMdhogEOWZfaQB8DI9ZdLKwmjF9HAngaGNbSAwgV9TH/njW0LXlC9bN6X1RPl+oyhnwMu6Yv0hoEuS45isbBe1TdAFx2M88B6MgwGQgllwXLyutURUAfDHPg9hsEgzjFlEW7i6HB5WcMGTzoYu2F5GAQDGcxY7DCgC8AH5eMZUaOhhjFwtGsQDLAhBcM84UE5eF4o0sGw3wgDhuYLW5FcyFDDWAVasyV3MTT/qoShbK8Vz8MWrSW1m7uSVeawy904Ua7P0Ll9CIKvNE3XlSBdCIpfS95iDQaA0Phag4eF7+RWh98piwHdJeJQ8+nR/SPyapLu+muNKnezuDw89fLtEJAnftEn5teq066LWNAajKVu8zuCF9enDV7iZbGwbHT7QnZlnRzLc/OgPA8wAIhcL7EsP9yUg5LAW+bR5cuW70aI3YrSzLZdCsM/2LadsSfQu/2EeKOn3VfOe73dbt0jhLHr+Z57cHg6aBP6S5bD804sTANgT9Je0rTXzTUPujUYvm7TPkJnU7pC5LI7y/yabWzJfw1FelUYMPKlP2kuik2+dHgpv9M60NYcsB014ieTr7SD++JuMxPlHX3RP5+Mk8k9EroBF8G7Vc4LbEhbJXB8hHHSbVmk264XJbHeHHQrvy1Mn28LrsCA2/JF+VLsh3tZ5quXLnzExvErCfAPTmCQ/618s7iXLmcsX8nWHz2k3ThsBe4PMEJtL5HnndSiJf92JnWHSHMkPyLnL79HCYZ4afJ3cQmnQb5D8TzZfMBVpWCQDqNgUSRgMdwcRn4lfXF8Kq6ktZ2WIU3aGhhRFYaeBQpY3u0b+dfepjuimB8AScH0snscXKKDxRmhKgxS8tkXvQdOsONuNhtwBvQS8xysQRod6AQfzSawv78zeuvym8jdI8BpL+0oiDesaPIudQ7DXIbf2xXIS5Dp7oMgiI5XWghKaafltDWvGFdgrPQGl/hnlAXm+wJxHHIfFdhugGnAMUAsoJeXxAIGcthLh2xrIUD0fcwVFmXKDImXSXfV4duWl2Bi+WVjAmnrhBJWXRxI7+bvy4qBhEEqK71QfqxFEmCeEvvNWdTT1hcN8ogSDL+hNWYFjn92dqNszUCxNwrE9JJrFQavDbLvib5Y9gLEfzfv4PF5gpLoKZJqLGskFa8JdGJcwDD3MhYHPLMrK9affcCFJawgSmXaOhhpCYbVFBOBJdYSZgWwNhFUYGBWXHIzzgwa7flwGFnd5+Z/EEtR2duT8iOze5FsOIzCZ0cs7YfQJ9ivpu2KtHUwnBKMuKkZFlVStV+QejosOuF/9AqrAoPQrnwwsKcZIv1yUZ2Ptedx6nxABa2XebvA/8heb5fD2FSeuzArDxNmrkh7I9LWwVgXMA7NX33Py+XqblTzj+DtGHq+76+uNs36smJAeXPj873IVIHJbSCnRIzb8SG0Hy9KvAFlFW9RWtfPPy55HwEj/wuwTWlbH7JcpA0u9WsqMIqS4bX0EoEn2zziypUc7+BUtIaLGgxuMvL2TlxK0+KVnP5ptStH1mTlPQGl10lKmThIltxmFEWGde6q3Ut12r72PdEth9EWLQoFciiOXLxNpee0yX0+oQcY2cOfFzJDyPBK3mIsvxcIcissm8bSehH+A2HJYSzzF4Onuj2A2rTbYDRXEpaRr1XJ2T2wZ7JqWMCvw1BmiLWtxNS4peedRV3hFVt4ivzb+kXWeHqJhGEVMFaLcuPEf3NVaetrQO5nJB2GGhHe51WCNH6Y1TL27yy6rR3nEtVtBodhrarixRnBwC2e53EavPKLT6wpGb4ChqpkfOvTVgn8CBjdNhIA7NxD6ReTlMWrMpeIuk51GLypX/2HKyp5F3u6ZZ89j5t5XvmFn9hmM0owwlKDXL54cdWkrXi7HYfRZj1z0WZ0f5WWCDLLn4cpUsHYlOyh+nkw5qbUZM4RH9mRPlpLa1LA4AWqumuIp919hRp5BoPxVNglgLmP4AhPJ8+BAoZo6xsDkyDM3zlCsuLJFxD+dMnP4C4cqMPYVLPCfrs8oGwRKV0Uht7ClrJc4oWZuQoAh5HfzGCY1Y4aoJ0LpXkueRd4K31zVhYKXwBfWUmQKQCBtg4DIfaXanQ4aOnSVgp6DEaHiQEU2EUvhOfxhgBLLa1UkwcYYg6kNK8vO0C2UXxwanvMHyAsZOEviL6JLFg4FC1rDQY3GuTK/M3zoRBV2kphNiC87FBJyEtZGwzZ08CNNfKQRgGSXU+a0H9WHYZocBZ71pskXju+sTpJFykfxbgk4FBvcgCi8LIRsph5MlivFR9zH7wGg3dbyB8xj1yOidmRXdvHtNWia2ONbmEAAOkVmEkWOcQe75eLSgfD26fk11u0W9Rh0D0MvOm0N1H0c7eJs8KGXciXNBcuvRPGvvzgsgIWg7ncFljHwLj9sD4rd8hqMHhVo+kcNj8/98ynfaRS2nH0syNpL/RThaQUUhgdVvdxu868KzHOyMcnvZrT9Qgj933ya+inlR4KHZIS97GPBnl/q/SObikF+q9lWox0lWHIvMhLmT3GqrQ1Ih1qAiPpYj6D3Hnm4iYefVmPXl4NRnngl19B7eM6fPiR2TnEKmBlJX/VjzQtbgEUMBA4Va5kQyJ0K28tbbXoQiajW7AMxEJ/y0ealuhMIEc6YYK/nzEYlfUZMM6HNtnvzD7C+Fq+ccfde9bDr64BwHsr7wma28ro+KLyGRE+WqVkePusTFv5gnT1o9F1GyuA8dZjo7f+6Z5PCNMe/NmziJLV+bB3oBjttW37UCJ5sU90QsPyTtkPklMugX1lUV+s60FMMXAP82GTMUB3Fnksudq3vHuLdsfj8bHMAxhtVwnJi3/N9qLpVqater07g9F5RpTOXhmOg0AlDBJ1IsXZE/kUWG1NFwAswBo7pwKVf0RpiorJLu5V15bK0AsQqs6JqVeNoSIvzWnXxFaCGp1dcZ7a2EvwqnO0rDS/ZSE/oGXUGLpKZ0TxNqthAHs6AXZ+gDGjleLc5XpLXALINjEaP+8olEoB5nwwT/TVEnsYjcscYPCTf65moycwZfp8+40xh5gyYGOdv0M+P/mW3S6QB+8ynDek/Si8yr35t+zvAOL4lTnAEJMoi9pg1auEvfnAACLqK+mdvmrhfDV9eS7PHGAYKDpst9tj/PQJMOMojykyCxiGcJbfY8uL3fDzgPFOIZD8gyFVOtfs42GU4gL8gwFLcZaNd3QFZqRK0B2jccHOnxcKzDKM+yfDQKAStswYuJvidwtX4wkbnxHwUi15+kMOw3pqDPRPCTyeFWp8QJBcjfgZd1UYAzfn/VqBoHbOh/EhUXJrAoojtwzT/MiSAQLFGQ7G54TJLQvGdRQMxgfWE9WZ0xyGOf4Ri/MW0h3DRmF8SGxtKWCog/NzGNZH1RMYa084YetAP8jVQNVAuQoYH1M0EAyaDonia8dHPcp5vgJG82HqYovFJzQoABxbDtoTMM5/ve+KCIrWMynlTqSZHmE8kgA02lEUMAaHo5qvEMCB8qAbLYxi9+ifEgIQB3bXA7KLfa2/uUUBpWWXUoitp9+7T5znW9r+/XvNBgiyTYAw20DPRf592x/PT56ZXg4McPutNPjKH9M7nTOirXsOV70OSy/DsH7pcCjQHpk3AIaZfP3GsiEjAI8Mg5SNX0ijdNjAqDDMpT5E11yFNSM1w2GY5v6X+RuaEbxxYJj2W1bc9RUIFC81HgzTS39PVUFptxPfe8NoCGg3NwHnCf+yJwzTi/FvwKGaFRsfBum3XeaPA8Zj1pEGGDTcCW4LlPhe4fu4KJpgkMqyc+bLA4Hm8cyxYRCF9xQ+do9pOLR3IcjVPMw9DQwi391cHLZTCLANQ3gd7F8VJ14nABTn8L4CBtUyOZ232eGQueEqIVary5bxXuo0+AhYjNC3wahpoqKB0nWriwNgtGrPYC/1hDFRJGzoLu1bk9GmMYumQtEbxjRnoPCDNcLNF64PafJNKRd7VJfzQX1hTDKYLs+6W56OwZrFGRVh+ejgLkj32TSmIldfGM0RlvqJFwwhy3OPcZCmjuOkQXTPzlMWCaHeMCawGrXTuImWljWyz92g3jDGn1lAykVnr1R/GPq4bD31eDD569UfhmmPOwakW3X2Qg2A0Rxo91mhMcfvemoIjGTMmfv3V5JhMMZ0NlQtycs1CIYIGDuCmtbgvU7DYJj3cYwojMZ5m4EaCMPUnYbylOrbYN6joTDGaFJGnQgaosEwhtNQbAl6k4bDMONhNUW99eMtGgGGeR/SpuCxVpqMoDFgmNve05EITjKy21OjwDBXTj/DAdajLTQZQ+PAMItjV54pFjiai+nkGguG6bYcU6YqFm77Y1+q0WCY5g4+gwM8bkSfgUaEYfr7hqMAHlDgaOLB3T4aE4ZpevsuM9UIwM10kx8DNC4M00wOTvORj4SEc3jBSHcfjQ2D6LQjPNT1hQYC3ug2Ur5fE8AgOh0vGIrgxlIQYhAfrpOkN5KmgUHlhVu7LDecwcBes/4H6x/pSFQfUuEAAAAASUVORK5CYII=",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
];

// Animation variants
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  hidden: {},
};

const logoVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
  hover: {
    scale: 1.12,
    boxShadow:
      "0 25px 40px rgba(0, 123, 255, 0.3), 0 8px 16px rgba(0, 123, 255, 0.15)",
    transition: { type: "spring", stiffness: 300 },
  },
  focus: {
    scale: 1.12,
    boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.85)",
    outline: "none",
  },
};

// Forward ref to allow parent focus control
const LogoCard = forwardRef(function LogoCard(
  { name, logo, index, total, onArrowNavigation },
  ref
) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  // Keyboard arrow navigation handler
  function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      onArrowNavigation((index + 1) % total);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      onArrowNavigation((index - 1 + total) % total);
    }
  }

  return (
    <motion.button
      type="button"
      aria-label={`${name} logo`}
      onFocus={() => setTooltipVisible(true)}
      onBlur={() => setTooltipVisible(false)}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
      tabIndex={0}
      variants={logoVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileFocus="focus"
      viewport={{ once: true, amount: 0.3 }}
      className="relative rounded-2xl p-6 cursor-pointer shadow-md bg-white/70 backdrop-blur-md border border-gray-200 hover:bg-white focus:bg-white focus:ring-4 focus:ring-blue-400 transition-colors duration-300 flex justify-center items-center"
      style={{ width: 180, height: 90 }}
      onKeyDown={handleKeyDown}
      ref={ref}
    >
      <img
        src={logo}
        alt={name}
        className="max-h-16 object-contain pointer-events-none select-none"
        loading="lazy"
        draggable={false}
      />
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold select-none pointer-events-none whitespace-nowrap shadow-lg"
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
});

export default function CustomersAndPartners() {
  // Focus management for arrow keys navigation
  const [customerFocusIndex, setCustomerFocusIndex] = useState(0);
  const [partnerFocusIndex, setPartnerFocusIndex] = useState(0);

  // Initialize refs arrays to the right length to avoid issues
  const customerRefs = useRef(Array(customers.length).fill(null));
  const partnerRefs = useRef(Array(partners.length).fill(null));

  useEffect(() => {
    if (customerRefs.current[customerFocusIndex]) {
      customerRefs.current[customerFocusIndex].focus();
    }
  }, [customerFocusIndex]);

  useEffect(() => {
    if (partnerRefs.current[partnerFocusIndex]) {
      partnerRefs.current[partnerFocusIndex].focus();
    }
  }, [partnerFocusIndex]);

  return (
    <section
      aria-labelledby="customers-partners-title"
      className="py-28 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h2
            id="customers-partners-title"
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600"
          >
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-lg sm:text-xl">
            We proudly collaborate with top global customers and partners to
            deliver world-class software solutions.
          </p>
        </header>

        {/* Customers Section */}
        <section aria-label="Our Customers" className="mb-28">
          <h3 className="text-3xl font-semibold text-indigo-800 mb-12 text-center tracking-wide">
            Our Customers
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-14 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {customers.map(({ name, logo }, i) => (
              <LogoCard
                key={name}
                name={name}
                logo={logo}
                index={i}
                total={customers.length}
                onArrowNavigation={setCustomerFocusIndex}
                ref={(el) => (customerRefs.current[i] = el)} // keep refs up-to-date
              />
            ))}
          </motion.div>
        </section>

        <hr className="border-gray-300 mb-28" />

        {/* Partners Section */}
        <section
          aria-label="Our Strategic Partners"
          className="bg-gradient-to-r from-indigo-100 to-white py-20 px-10 rounded-3xl shadow-lg max-w-6xl mx-auto"
        >
          <h3 className="text-4xl font-semibold text-indigo-900 mb-16 text-center tracking-wide">
            Our Strategic Partners
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {partners.map(({ name, logo }, i) => (
              <LogoCard
                key={name}
                name={name}
                logo={logo}
                index={i}
                total={partners.length}
                onArrowNavigation={setPartnerFocusIndex}
                ref={(el) => (partnerRefs.current[i] = el)} // keep refs up-to-date
              />
            ))}
          </motion.div>
        </section>
      </div>
    </section>
  );
}
