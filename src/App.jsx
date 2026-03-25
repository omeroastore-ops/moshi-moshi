import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import logo from "./assets/logo.png";
import matcha from "./assets/matcha.png";
import strawberry from "./assets/strawberry.png";
import taro from "./assets/taro.png";
import waffle from "./assets/waffle.png";

const heroSlides = [
  {
    id: 1,
    name: "Matcha Latte",
    label: "01",
    ghost: "MATCHA",
    title: "Bubble tea, maar dan beter",
    text: "Verse milk teas, premium toppings en speelse desserts in een stijlvolle Moshi Moshi beleving.",
    image: matcha,
    bg: "matcha",
    accent: "matcha-accent",
  },
  {
    id: 2,
    name: "Strawberry Milk Tea",
    label: "02",
    ghost: "BERRY",
    title: "Fruitig, fris en onweerstaanbaar",
    text: "Lichte milk tea met aardbei, boba en een zachte premium uitstraling.",
    image: strawberry,
    bg: "strawberry",
    accent: "strawberry-accent",
  },
  {
    id: 3,
    name: "Taro Milk Tea",
    label: "03",
    ghost: "TARO",
    title: "Zacht, romig en uniek",
    text: "Een elegante taro milk tea met een zachte kleur, romige textuur en luxe uitstraling.",
    image: taro,
    bg: "taro",
    accent: "taro-accent",
  },
  {
    id: 4,
    name: "Bubble Waffle Unicorn",
    label: "04",
    ghost: "WAFFLE",
    title: "Zoete momenten, maar dan luxe",
    text: "Bubble waffle met ijs, toppings en een speelse premium presentatie.",
    image: waffle,
    bg: "waffle",
    accent: "waffle-accent",
  },
];

const popularProducts = [
  {
    id: 101,
    name: "Matcha Latte",
    desc: "Verse melk, matcha",
    price: 5.5,
    image: matcha,
    type: "drink",
  },
  {
    id: 102,
    name: "Bubble Waffle Unicorn",
    desc: "Verse bubble waffle met ijs en toppings",
    price: 7.9,
    image: waffle,
    type: "dessert",
  },
  {
    id: 103,
    name: "Strawberry Milk Tea",
    desc: "Milk tea met aardbei en boba",
    price: 5.5,
    image: strawberry,
    type: "drink",
  },
  {
    id: 104,
    name: "Taro Milk Tea",
    desc: "Romige taro milk tea",
    price: 5.5,
    image: taro,
    type: "drink",
  },
];

const dessertProducts = [
  {
    id: 201,
    name: "Bubble Waffle Unicorn",
    desc: "Knapperige bubble waffle met roomijs, slagroom en kleurrijke toppings.",
    price: 7.9,
    image: waffle,
    type: "dessert",
  },
];

function formatEuro(value) {
  return `€${value.toFixed(2).replace(".", ",")}`;
}

function IntroSplash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3600);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const splashes = [
    "splash-1",
    "splash-2",
    "splash-3",
    "splash-4",
    "splash-5",
    "splash-6",
    "splash-7",
    "splash-8",
  ];

  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: "blur(12px)",
        transition: { duration: 0.95, ease: "easeInOut" },
      }}
    >
      <motion.div
        className="intro-glow"
        animate={{ scale: [1, 1.18, 1], opacity: [0.22, 0.5, 0.22] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="boba-wrap"
        initial={{ scale: 0.72, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="boba-main"
          animate={{
            scale: [1, 1.06, 1],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 1.45,
            repeat: 1,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="boba-highlight"
          animate={{ opacity: [0.2, 0.55, 0.25] }}
          transition={{ duration: 1.2, repeat: 1 }}
        />

        <motion.div
          className="crack-line"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.22, ease: "easeOut" }}
        />

        <motion.div
          className="shell-left"
          initial={{ x: 0, rotate: 0 }}
          animate={{ x: -66, rotate: -28, y: -10 }}
          transition={{ delay: 1.28, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="shell-right"
          initial={{ x: 0, rotate: 0 }}
          animate={{ x: 66, rotate: 28, y: -10 }}
          transition={{ delay: 1.28, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="explosion-core"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.35, 2.4], opacity: [0, 1, 0] }}
          transition={{ delay: 1.34, duration: 0.62, ease: "easeOut" }}
        />
      </motion.div>

      {splashes.map((cls, i) => (
        <motion.div
          key={cls}
          className={`ink-splash ${cls}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 1.55], opacity: [0, 1, 0.95] }}
          transition={{
            delay: 1.45 + i * 0.035,
            duration: 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}

      <motion.div
        className="splash-overlay"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1.9], opacity: [0, 0.96, 1] }}
        transition={{ delay: 1.54, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="intro-logo-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 0], y: [20, 0, -10] }}
        transition={{ delay: 0.4, duration: 1.55, ease: "easeOut" }}
      >
        Moshi Moshi
      </motion.div>
    </motion.div>
  );
}

function ProductModal({ product, onClose, onAddToCart }) {
  const isDrink = product.type === "drink";
  const isDessert = product.type === "dessert";

  const [size, setSize] = useState("Medium");
  const [temp, setTemp] = useState("Koud");
  const [milk, setMilk] = useState("Melk");
  const [ice, setIce] = useState("Standaard ijs");
  const [popping, setPopping] = useState("Geen popping");
  const [extra, setExtra] = useState("Geen extra");
  const [sweetness, setSweetness] = useState("66–75%");

  const sizePrice = size === "Large" ? 1 : 0;
  const milkPrice =
    milk === "Sojamelk"
      ? 0.5
      : milk === "Amandelmelk" || milk === "Havermelk"
      ? 1
      : 0;
  const extraPrice =
    extra === "Melkschuim" ? 0.7 : extra === "Slagroom" ? 1.6 : 0;

  const total = isDrink
    ? product.price + sizePrice + milkPrice + extraPrice
    : product.price;

  const OptionGroup = ({ title, options, selected, onChange }) => (
    <div className="option-group">
      <h4>{title}</h4>
      <div className="option-grid">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={selected === option ? "option-chip active" : "option-chip"}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  const handleAdd = () => {
    const options = [];

    if (isDrink) {
      options.push(size, temp, milk, ice, popping, extra, sweetness);
    }

    if (isDessert) {
      options.push("Dessert special");
    }

    onAddToCart({
      id: `${product.id}-${Date.now()}`,
      name: product.name,
      image: product.image,
      price: total,
      options,
    });
  };

  return createPortal(
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-panel"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-top">
          <div className="modal-product">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="modal-head">
            <span className="modal-badge">{isDessert ? "Dessert" : "Drink"}</span>
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <div className="modal-base-price">{formatEuro(product.price)}</div>
          </div>
        </div>

        <div className="modal-content">
          {isDrink ? (
            <>
              <OptionGroup
                title="Formaat"
                options={["Medium", "Large"]}
                selected={size}
                onChange={setSize}
              />
              <OptionGroup
                title="Temperatuur"
                options={["Warm", "Koud"]}
                selected={temp}
                onChange={setTemp}
              />
              <OptionGroup
                title="Melk"
                options={["Melk", "Sojamelk", "Amandelmelk", "Havermelk"]}
                selected={milk}
                onChange={setMilk}
              />
              <OptionGroup
                title="IJs"
                options={["Standaard ijs", "Minder ijs"]}
                selected={ice}
                onChange={setIce}
              />
              <OptionGroup
                title="Popping"
                options={[
                  "Geen popping",
                  "Blueberry Extra",
                  "Mango",
                  "Lychee",
                  "Passion fruit",
                  "Strawberry",
                ]}
                selected={popping}
                onChange={setPopping}
              />
              <OptionGroup
                title="Extra topping"
                options={["Geen extra", "Melkschuim", "Slagroom"]}
                selected={extra}
                onChange={setExtra}
              />
              <OptionGroup
                title="Zoetheid"
                options={["0%", "25–33%", "66–75%", "100%"]}
                selected={sweetness}
                onChange={setSweetness}
              />
            </>
          ) : (
            <div className="dessert-modal-info">
              <h4>Dessert selectie</h4>
              <p>
                Dit dessert wordt als signature item toegevoegd. Later kunnen we hier
                ook extra keuzes zoals saus, topping en extra scoop toevoegen.
              </p>
            </div>
          )}
        </div>

        <div className="modal-actions">
          <button type="button" className="ghost-btn modal-close" onClick={onClose}>
            Sluiten
          </button>
          <button type="button" className="primary-btn modal-add" onClick={handleAdd}>
            Toevoegen • {formatEuro(total)}
          </button>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

function CartDrawer({ items, onClose, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return createPortal(
    <motion.div
      className="cart-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.aside
        className="cart-drawer"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-top">
          <h3>Jouw bestelling</h3>
          <button className="ghost-btn small-ghost" onClick={onClose}>
            Sluiten
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <p className="empty-cart">Je winkelwagen is nog leeg.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <small>{item.options.join(" • ")}</small>
                  <span>{formatEuro(item.price)}</span>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-bottom">
          <div className="cart-total">
            <span>Totaal</span>
            <strong>{formatEuro(total)}</strong>
          </div>
          <button
            className="primary-btn full-btn"
            onClick={() => alert("Demo checkout geopend")}
          >
            Naar checkout
          </button>
        </div>
      </motion.aside>
    </motion.div>,
    document.body
  );
}

function ProductCard({ product, onCustomize }) {
  return (
    <motion.article
      className="product-card clickable-card"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      onClick={() => onCustomize(product)}
    >
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-body">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <div className="product-footer">
          <span>{formatEuro(product.price)}</span>
          <button
            className="mini-btn"
            onClick={(e) => {
              e.stopPropagation();
              onCustomize(product);
            }}
          >
            Personaliseren
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function HeroSite() {
  const [active, setActive] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [modalProduct, setModalProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const containerRef = useRef(null);
  const homeRef = useRef(null);
  const menuRef = useRef(null);
  const popularRef = useRef(null);
  const dessertsRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    const isOverlayOpen = modalProduct !== null || cartOpen;
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalProduct, cartOpen]);

  const current = heroSlides[active];
  const prevIndex = active === 0 ? heroSlides.length - 1 : active - 1;
  const nextIndex = active === heroSlides.length - 1 ? 0 : active + 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 7200);
    return () => clearInterval(timer);
  }, []);

  const bgClass = useMemo(() => `theme-${current.bg}`, [current.bg]);

  const goNext = () => {
    setActive((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setActive((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setModalProduct(null);
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <motion.div
      className={`app-shell ${bgClass}`}
      initial={{ opacity: 0, scale: 1.03, filter: "blur(14px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bg-mesh bg-mesh-1" />
      <div className="bg-mesh bg-mesh-2" />
      <div className="bg-mesh bg-mesh-3" />

      <div className={`ambient ambient-left ${current.accent}`} />
      <div className={`ambient ambient-right ${current.accent}`} />

      <main
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="hero-wrap"
      >
        <nav className="topbar">
          <div className="brand" onClick={() => scrollToSection(homeRef)}>
            <img src={logo} alt="Moshi Moshi" />
          </div>

          <div className="nav-links">
            <button onClick={() => scrollToSection(homeRef)}>Home</button>
            <button onClick={() => scrollToSection(menuRef)}>Menu</button>
            <button onClick={() => scrollToSection(popularRef)}>Populair</button>
            <button onClick={() => scrollToSection(dessertsRef)}>Desserts</button>
            <button onClick={() => scrollToSection(locationRef)}>Locatie</button>
          </div>

          <button className="order-btn cart-button" onClick={() => setCartOpen(true)}>
            Bestellen
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </button>
        </nav>

        <section ref={homeRef} className="hero">
          <div className="hero-copy">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-copy"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <p className="eyebrow">
                  <span>{current.label}</span>
                  <span>{current.name}</span>
                </p>

                <h1>{current.title}</h1>
                <p className="hero-text">{current.text}</p>

                <div className="hero-actions">
                  <button className="primary-btn" onClick={() => scrollToSection(menuRef)}>
                    Bekijk menu
                  </button>
                  <button
                    className="ghost-btn"
                    onClick={() =>
                      setModalProduct({
                        id: 101,
                        name: "Matcha Latte",
                        desc: "Verse melk, matcha",
                        price: 5.5,
                        image: matcha,
                        type: "drink",
                      })
                    }
                  >
                    Stel je drankje samen
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hero-visual">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-ghost"}
                className="ghost-word"
                initial={{ opacity: 0, scale: 0.9, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {current.ghost}
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="product-shadow product-shadow-main"
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.18, 0.28, 0.18],
                x: mouse.x * 18,
                y: mouse.y * 10,
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="floating floating-1" />
            <div className="floating floating-2" />
            <div className="floating floating-3" />
            <div className="floating floating-4" />

            <motion.img
              key={heroSlides[prevIndex].id + "-side-left"}
              src={heroSlides[prevIndex].image}
              alt={heroSlides[prevIndex].name}
              className="side-product side-left"
              initial={{ opacity: 0, x: -80, scale: 0.82, rotate: 8 }}
              animate={{
                opacity: 0.42,
                x: mouse.x * -18,
                y: mouse.y * -10,
                scale: 0.88,
                rotate: -8 + mouse.x * 5,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.name}
                className={`main-product ${current.bg === "waffle" ? "waffle-main" : ""}`}
                initial={{ opacity: 0, y: 50, scale: 0.82, rotate: -10 }}
                animate={{
                  opacity: 1,
                  y: mouse.y * -30,
                  x: mouse.x * -30,
                  scale: 1,
                  rotate: mouse.x * 10 - 4,
                }}
                exit={{ opacity: 0, y: -35, scale: 0.84, rotate: 10 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 0, scale: 1.04 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) goNext();
                  if (info.offset.x > 70) goPrev();
                }}
              />
            </AnimatePresence>

            <motion.img
              key={heroSlides[nextIndex].id + "-side-right"}
              src={heroSlides[nextIndex].image}
              alt={heroSlides[nextIndex].name}
              className="side-product side-right"
              initial={{ opacity: 0, x: 80, scale: 0.82, rotate: -8 }}
              animate={{
                opacity: 0.42,
                x: mouse.x * -18,
                y: mouse.y * 10,
                scale: 0.88,
                rotate: 8 + mouse.x * 5,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <div className="glass-ring ring-1" />
            <div className="glass-ring ring-2" />
            <div className="glass-ring ring-3" />

            <div className="mini-badge badge-left">{heroSlides[prevIndex].name}</div>
            <div className="mini-badge badge-right">{heroSlides[nextIndex].name}</div>
          </div>
        </section>

        <div className="hero-bottom">
          <div className="slider-controls">
            <button onClick={goPrev} aria-label="Vorige slide">←</button>
            <button onClick={goNext} aria-label="Volgende slide">→</button>
          </div>

          <div className="progress-wrap">
            <div className="progress-meta">
              <span>{current.name}</span>
              <span>
                {String(active + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="progress-bar">
              <motion.div
                key={active}
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${((active + 1) / heroSlides.length) * 100}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="dots">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                className={index === active ? "dot active" : "dot"}
                onClick={() => setActive(index)}
                aria-label={slide.name}
              />
            ))}
          </div>
        </div>

        <section ref={menuRef} className="content-section">
          <div className="section-head">
            <span className="section-pill">Menu</span>
            <h2>Onze signature selectie</h2>
            <p>Een premium demo-menu voor Moshi Moshi met focus op visuals, smaak en beleving.</p>
          </div>

          <div className="menu-grid">
            {popularProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCustomize={setModalProduct}
              />
            ))}
          </div>
        </section>

        <section ref={popularRef} className="content-section alt-surface">
          <div className="section-head">
            <span className="section-pill">Populair</span>
            <h2>Favorieten van klanten</h2>
            <p>De meest geliefde dranken en desserts met premium presentatie.</p>
          </div>

          <div className="feature-row">
            <motion.div className="feature-copy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>Matcha, strawberry, taro en meer</h3>
              <p>
                Onze demo focust op zachte gradients, product-first visuals, premium motion
                en een duidelijke mobiele gebruikerservaring.
              </p>
              <button className="primary-btn" onClick={() => scrollToSection(menuRef)}>
                Bekijk producten
              </button>
            </motion.div>

            <motion.div className="feature-cards" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {popularProducts.slice(0, 3).map((product) => (
                <div key={product.id} className="mini-product-card">
                  <img src={product.image} alt={product.name} />
                  <strong>{product.name}</strong>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section ref={dessertsRef} className="content-section dessert-section">
          <div className="section-head">
            <span className="section-pill">Desserts</span>
            <h2>Zoete momenten</h2>
            <p>Bubble waffle en dessert visuals met een speelse maar luxe uitstraling.</p>
          </div>

          <div className="dessert-showcase">
            <motion.div
              className="dessert-visual clickable-card"
              onClick={() => setModalProduct(dessertProducts[0])}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={waffle} alt="Bubble Waffle Unicorn" />
            </motion.div>

            <motion.div
              className="dessert-copy clickable-card"
              onClick={() => setModalProduct(dessertProducts[0])}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Bubble Waffle Unicorn</h3>
              <p>
                Knapperige bubble waffle met roomijs, zachte swirl, kleurrijke sprinkles
                en een premium dessert vibe die perfect past bij Moshi Moshi.
              </p>
              <div className="dessert-price">{formatEuro(7.9)}</div>
              <button
                className="primary-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalProduct(dessertProducts[0]);
                }}
              >
                Personaliseren
              </button>
            </motion.div>
          </div>
        </section>

        <section ref={locationRef} className="content-section location-section">
          <div className="section-head">
            <span className="section-pill">Locatie</span>
            <h2>Bezoek Moshi Moshi</h2>
            <p>Kursaalpoort 5, 2300 Turnhout</p>
          </div>

          <div className="location-grid">
            <div className="location-card">
              <h3>Adres</h3>
              <p>Moshi Moshi</p>
              <p>Kursaalpoort 5</p>
              <p>2300 Turnhout</p>
            </div>

            <div className="location-card">
              <h3>Openingsuren</h3>
              <p>Ma - Zo</p>
              <p>12:00 – 19:30</p>
              <p className="open-now">Nu geopend</p>
            </div>

            <div className="location-card">
              <h3>Acties</h3>
              <div className="location-actions">
                <a
                  className="mini-btn solid"
                  href="https://maps.google.com/?q=Kursaalpoort+5+2300+Turnhout"
                  target="_blank"
                  rel="noreferrer"
                >
                  Route
                </a>
                <button className="mini-btn" onClick={() => setCartOpen(true)}>
                  Bestellen
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div>
            <strong>Moshi Moshi</strong>
            <p>Bubble tea, desserts en premium vibes.</p>
          </div>

          <div className="footer-links">
            <button onClick={() => scrollToSection(homeRef)}>Home</button>
            <button onClick={() => scrollToSection(menuRef)}>Menu</button>
            <button onClick={() => scrollToSection(popularRef)}>Populair</button>
            <button onClick={() => scrollToSection(dessertsRef)}>Desserts</button>
            <button onClick={() => scrollToSection(locationRef)}>Locatie</button>
          </div>
        </footer>
      </main>

      <AnimatePresence>
        {modalProduct && (
          <ProductModal
            product={modalProduct}
            onClose={() => setModalProduct(null)}
            onAddToCart={addToCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && (
          <CartDrawer
            items={cartItems}
            onClose={() => setCartOpen(false)}
            onRemove={removeFromCart}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <IntroSplash key="intro" onFinish={() => setShowIntro(false)} />
      ) : (
        <HeroSite key="site" />
      )}
    </AnimatePresence>
  );
}