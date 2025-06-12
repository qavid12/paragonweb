import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import"slick-carousel/slick/slick.css";
import Gallery from "./Gallery";
function App() {
  return (
    <div className="App">
      <div className="side-border left"></div>
      <div className="side-border right"></div>
      <div className="background-overlay"></div>
	<div className="sidebar-left">
		Relax & Rejuvenate
	</div>
      {/* Các phần nội dung khác */}
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}



function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (scrollTop) => {
    setMenuOpen(false);
    if (scrollTop !== null) {
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <h1 className="logo">Paragon Spa</h1>

        {/* Hamburger menu button */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          style={{
            fontSize: "1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
          }}
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick(0); }}>Home</a>
          <a href="#services" onClick={() => handleLinkClick(null)}>Services</a>
          <a href="#contact" onClick={() => handleLinkClick(null)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero-simple">
  <div className="hero-content">
    <h1>Welcome to Paragon Spa</h1>
    <p>Your ultimate destination for relaxation and rejuvenation in Tây Hồ, Hanoi.</p>
    <a href="#services" className="btn-primary">Explore Our Services</a>
  </div>
</section>

  );
}

function Services(){
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Massage Body",
    icon: "🧖‍♀️",
    treatments: [
      {
        name: "Swedish treatment",
        description: "A gentle treatment featuring long strokes, massage, and muscle relaxation techniques that help reduce stress, improve circulation, and bring a pleasant, calming sensation, promoting better sleep and mental relaxation.",
        prices: ["550,000VND/60 minutes", "650,000VND/90 minutes", "750,000VND/120 minutes"]
      },
      {
        name: "Deep Tissue treatment",
        description: "Combining deep and slow pressure, this treatment focuses on areas of muscle tension and soreness. It helps relieve chronic pain, making it ideal for those with shoulder, neck and back discomfort. The therapy supports body recovery and enhances mobility and flexibility",
        prices: ["550,000VND/60 minutes", "650,000VND/90 minutes", "750,000VND/120 minutes"]
      },
      {
        name: "Shiatsu treatment",
        description: "A gentle and precise acupressure therapy in the Japanese style, using hand pressure to activate vital points, stimulate energy flow, relieve fatigue, and promote overall well-being. Oil-free and ideal for those seeking to restore natural energy",
        prices: ["550,000VND/60 minutes", "650,000VND/90 minutes", "750,000VND/120 minutes"]
      },
      {
        name: "Hot Stone treatment",
        description: "A premium full-body relaxation treatment combining natural hot stones and deep therapy with heated volcanic stones places on key acupressure points. This enhances energy flow, delivers a soothing warmth, melts away tension, and restores inner balance",
        prices: ["750,000VND/90 minutes", "850,000VND/120 minutes"]
      },
      {
        name: "Four-Hands treatment",
        description: "Two therapists perform synchronized full-body movement in perfect harmony, creating a soothing sensation and deep relaxation. This treatment is ideal for those seeking a uniquely luxurious, elevated, and holistic experience",
        prices: ["1,100,000VND/60 minutes", "1,300,000VND/90 minutes", "1,500,000VND/120 minutes"]
      }
    ]
    },
    {
      title: "Facial",
      icon: "💆‍♂️",
      treatments: [
        {
          name: "Hydrate and Boost skin energy",
          description: "A revitalizing treatment for dehydrated, tired skin, designed to restore smoothness and radiance through deep hydration and cellular energy boost. Experience visibly healthier, more radiant skin",
          prices: ["800,000VND/80 minutes"]
        },
        {
          name: "Revive beauty and liluminate the skin",
          description: "A specialized treatment designed to revive dull, lifeness skin by promoting cell regeneration and naturally brightening the complexion. Leaves your skin radiant, smooth, and full of vitality after just one session",
          prices: ["800,000VND/80 minutes"]
        },
        {
          name: "Detox and Purify the skin",
          description: "This treatment helps remove toxins, dirt and excess sebum deeply embedded in the skin, leaving it clean, clear and healthy form within. Ideal foroily, acne-prone skin and those frequently exposed to polluted environment",
          prices: ["800,000VND/80 minutes"]
        }
      ]
    },
    {
      title: "Foot Treatment",
      icon: "🦶",
      treatments: [
        {
          name: "Foot treatment",
          description: "This treatment soothes tired feet through gentle massage and acupressure techniques, promoting blood circulation, relieving soreness, and providing a deeply relaxing sensation throughout the entire body",
          prices: ["550,000VND/60 minutes", "650,000VND/90 minutes"]
        }
      ]
    },
    {
      title: "Scrub",
      icon: "🧂",
      treatments: [
        {
          name: "Ocean Salt Glow",
          description: "A full-body exfoliation using mineral-rich pure sea salt to gently remove dead skin cells, leaving the skin naturally smooth and radiant",
          prices: ["550,000VND/50 minutes"]
        },
        {
          name: "Coffe Scrub Detox",
          description: "Uses finely ground coffee beans rich in antloxidants to cleanse the skin's surface, stimilate blood circulation and improve dull or tires-looking skin",
          prices: ["550,000VND/50 minutes"]
        },
        {
          name: "Pure Rice Glow",
          description: "Combines rice bran and fresh milk to gently remove dead skin cells, cleanse the skin, improve pigmentation, and leave the skin soft, smooth, and evenly toned",
          prices: ["550,000VND/50 minutes"]
        }
      ]
    },
    {
      title: "Package",
      icon: "🎁",
      treatments: [
        {
          name: "Radiant Glow",
          description: "This treatment refreshes and brighten the complexion while nourishing and revitalizing the body, leaving the skin smoother and more luminous",
          prices: ["1,050,000VND/Scrub 50minutes + Body 60 minutes", "1,150,000VND/Scrub 50 minutes + Body 90 minutes", "1,250,000VND/Scrub 50 minutes + Body 120minutes"]
        },
        {
          name: "Serenity and Glow",
          description: "Experience complete relaxation and naturally radiant, healthy looking skin",
          prices: ["1,300,000VND/Face 80 minutes + Body 60 minutes", "1,400,000VND/Face 80 minutes + Body 90 minutes", "1,500,000VND/Face 80 minutes + Body 120 minutes"]
        },
        {
          name: "Full Glow Experience",
          description: "The skin becomes smooth and refined, the body feels relaxed and the complexion appears brighter, healthier and more even-toned, delivering a light, refreshed sensation from the inside out",
          prices: ["1,850,000VND/Scrub 50 minutes + Face 80 minutes + Body 60 minutes", "1,950,000VND/Scrub 50 minutes + Face 80 minutes + Body 90 minutes", "2,050,000VND/Scrub 50 minutes + Face 80 minutes + Body 120 minutes"]
        },
        {
          name: "Hot Stone and Radiance Facial",
          description: "This package features a hot stone therapy to deeply relax the body, relieve tension and boost circulation, paired with a rejuvenating facial to brighten, nourish and restore the skin's vitality.",
          prices: ["1,500,000VND/Face 80 minutes + Hot stone 90 minutes", "1,600,000VND/Face 80 minutes + Hot stone 120 minutes"]
        },
        {
          name: "Exfoliation and Radiant Facial",
          description: "A dual-treatment package combining body scrub and facial care. The body scrub exfoliates dead skin cells to brighten and smooth the skin, while the facial deeply cleanses, renews, and leaves your complexion glowing with health.",
          prices: ["1,300,000VND"]
        }
      ]
    }
  ]
  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="services" id="services">
      <h2 className="services-title">Our Services</h2>
      <div className="accordion">
        {services.map((category, index) => (
          <div className="service-item" key={index}>
            <button
              className="service-header"
              onClick={() => toggleIndex(index)}
            >
              <span className="service-icon">{category.icon}</span>
              {category.title}
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="service-content">
                {category.treatments.map((treatment, i) => (
                  <div key={i} className="treatment-block">
                    <h4>{treatment.name}</h4>
                    <p>{treatment.description}</p>
                    <ul className="price-list">
                      {treatment.prices.map((price, j) => {
                        const [amount, time] = price.split("/");
                        return (
                          <li key={j}>
                            <span>{time ? time.trim() : "Package"}</span>
                            <span>{amount.trim()}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


// function Services() { service cũ
//   const [openIndex, setOpenIndex] = useState(null);

//   const services = [
//     {
//       title: "Facial Treatment",
//       description: "Deep cleansing and moisturizing facial to refresh your skin.",
//       packages: [
//         { time: "60 minutes", price: "550k" },
//         { time: "90 minutes", price: "650k" },
//         { time: "120 minutes", price: "750k" },
//       ],
//       icon: "💆‍♀️",
//     },
//     {
//       title: "Manicure & Pedicure",
//       description: "Complete nail care with polish and massage for your hands and feet.",
//       packages: [
//         { time: "60 minutes", price: "550k" },
//         { time: "90 minutes", price: "650k" },
//         { time: "120 minutes", price: "750k" },
//       ],
//       icon: "💅",
//     },
//     {
//       title: "Full Body Massage",
//       description: "Relaxing massage to relieve stress and muscle tension.",
//       packages: [
//         { time: "60 minutes", price: "550k" },
//         { time: "90 minutes", price: "650k" },
//         { time: "120 minutes", price: "750k" },
//       ],
//       icon: "🧖‍♂️",
//     },
//     {
//       title: "Aromatherapy",
//       description: "Healing therapy using natural essential oils for wellness.",
//       packages: [
//         { time: "60 minutes", price: "550k" },
//         { time: "90 minutes", price: "650k" },
//         { time: "120 minutes", price: "750k" },
//       ],
//       icon: "🌿",
//     },
//   ];

//   const toggleIndex = (index) => {
//     if (openIndex === index) {
//       setOpenIndex(null); // đóng lại nếu bấm lại mục đang mở
//     } else {
//       setOpenIndex(index);
//     }
//   };

//   return (
//     <section className="services" id="services">
//   <h2>Our Services</h2>
//   <div className="accordion">
//     {services.map((service, index) => (
//       <div className="service-item" key={index}>
//         <button className="service-header" onClick={() => toggleIndex(index)}>
//           <span className="service-icon">{service.icon}</span>
//           {service.title}
//           <span className={`arrow ${openIndex === index ? "open" : ""}`}>▼</span>
//         </button>
//         {openIndex === index && (
//           <div className="service-content">
//             <p>{service.description}</p>
//             <table className="price-table">
//               <tbody>
//                 {service.packages.map((p, i) => (
//                   <tr key={i}>
//                     <td>{p.time}</td>
//                     <td>{p.price}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// </section>

//   );
// }

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
	<h2>Contact Us</h2>
	<p><strong>Address:</strong> 676 Lạc Long Quân, phường Nhật Tân, quận Tây Hồ, thành phố Hà Nội</p>
	<p><strong>Phone:</strong> <a href="tel:+84868998290">+84 86 899 8290</a></p>
	<p><strong>Email:</strong> <a href="mailto:contact@paragonspa.vn">paragonspa90@gmail.com</a></p>
	<p><strong>Opening Hours:</strong> 09:00 AM - 22:00 PM (Everyday)</p>
	
	<div className="map-container">
		<iframe
			title="Paragon Spa Map"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.8478642434998!2d105.81376867597064!3d21.078737686058805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc605d4f84f%3A0xb6a51662896e0745!2sParagon%20Spa!5e0!3m2!1svi!2s!4v1749124276159!5m2!1svi!2s"
			width="100%"
			height="300%"
			style={{ border: 0 }}
			allowFullScreen=""
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</div>
    </section>
  );
}

<footer className="footer">
  <div className="footer-container">
    <div className="footer-about">
      <h3>Paragon Spa</h3>
      <p>Experience the ultimate in relaxation and rejuvenation at our premium spa in Tây Hồ, Hanoi.</p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h4>Contact Us</h4>
      <p>📍 676 Lạc Long Quân, phường Nhật Tân, quận Tây Hồ, thành phố Hà Nội</p>
      <p>📞 <a href="tel:+84901234567">+84 86 899 8290</a></p>
      <p>📧 <a href="mailto:contact@paragonspa.vn">paragonspa90@gmail.com</a></p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Paragon Spa. All rights reserved.</p>
  </div>
</footer>


export default App;
