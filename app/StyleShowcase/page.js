"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function About() {
  const mediaScrollerStyle = {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: '21%',
    gap: '2rem',
    overflowX: 'auto',
    overscrollBehaviorInline: 'contain',
    padding: '0 var(--spacer) var(--spacer)',
  };

  const mediaScrollerItemStyle = {
    display: 'grid',
    gridTemplateRows: 'min-content',
    padding: '1.5rem',
    aspectRatio: '20/20',
    objectFit: 'cover',
  };

  const mediaScrollerItemImgStyle = {
    inlineSize: '70%',
    aspectRatio: '30/30',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  };

  const enlarge = (e) => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.transition = 'transform 0.2s ease-in-out';
  };

  const shrink = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.transition = 'transform 0.2s ease-in-out';
  };

  return (
    <div className="About" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Navbar />
      <div style={{
          width: '100%',
          height: '100px',
          overflow: 'hidden',
          backgroundColor: '#99C2CF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
      }}>
        <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'center' }}>
          <strong>Style Showcase</strong><br/>
          Style Showcase is your curated destination for fashion essentials, featuring an exclusive collection of hoodies, pants, and accessories. Discover the epitome of urban style with meticulously crafted pieces designed to elevate your wardrobe. From trendsetting hoodies to versatile pants and statement accessories, our collection reflects the perfect blend of comfort and sophistication, ensuring you make a lasting impression with every ensemble.
        </div>
      </div>

      <div style={{ marginTop: '5rem', marginBottom: '5rem', color: '#4D4D4D', fontSize: '40px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'center' }}>
        <strong>Style Showcase</strong>
        <div style={mediaScrollerStyle} className="media-scroller">
          {/* Style Showcase*/}
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
          <div style={{ marginTop: '2rem', marginBottom: '2rem', color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'left' }}>
            <h3>StreetTrend V1 Hoodie</h3>
          </div>
          <Image style={mediaScrollerItemImgStyle} src="/resources/hoodie.png" alt="hoodie" width={"145"} height={"170"} onMouseEnter={enlarge} onMouseLeave={shrink} />
          <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '1.5', textAlign: 'left' }}> 
            <br></br> <br></br>
            <p>Introducing the StreetTrend V1 Hoodie – a fusion of modern style and comfort. With clean lines and meticulous detailing, this hoodie is designed for urban fashion enthusiasts. Crafted from a premium blend of breathable cotton, it guarantees superior comfort throughout the day. Its versatile design effortlessly complements various looks, making it a statement-making wardrobe staple. Built to withstand urban life, the StreetTrend V1 Hoodie features reinforced stitching for both longevity and style. The bold graphics tell their own story, adding a distinctive edge to your urban fashion repertoire.

Choose from three distinct colors – classic black for an edgy vibe, pristine cream for sophistication, and timeless white for versatile appeal. Elevate your streetwear with StreetTrend V1, where style meets comfort. Upgrade your wardrobe and redefine your fashion narrative.</p>
            </div>
          </div>

          {/*Pants*/}
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
          <div style={{ marginTop: '2rem', marginBottom: '2rem', color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'left' }}>
            <h3>Trendsetting Cargo Pants</h3>
          </div>
          <Image style={mediaScrollerItemImgStyle} src="/resources/pants.png" alt="Cargo" width={"145"} height={"170"} onMouseEnter={enlarge} onMouseLeave={shrink}/>
          <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '1.5', textAlign: 'left' }}>
            <br></br> <br></br>
            <p>
Cargo pants, a timeless wardrobe staple, seamlessly blend fashion and functionality. With their characteristic multiple pockets and a relaxed silhouette, these pants effortlessly exude an urban edge. Our collection boasts three distinctive styles – classic, camo, and distressed. The classic offers a clean and versatile look, while the camo brings a bold and rugged aesthetic. For those seeking a worn-in, edgy vibe, the distressed style delivers effortlessly cool vibes. Versatile in nature, cargo pants are perfect for both casual outings and adventures, providing ample storage while maintaining a stylish appearance. Whether paired with a laid-back tee for a relaxed vibe or dressed up with a sleek jacket, cargo pants are a go-to choice for those who appreciate a fusion of practicality and contemporary style. Embrace the comfort and versatility of cargo pants as you navigate the urban landscape with confidence and flair.</p>
            </div>
          </div>

          {/* Shirt*/}
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
          <div style={{ marginTop: '2rem', marginBottom: '2rem', color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'left' }}>
            <h3>Signature Shirt Collection</h3>
          </div>
          <Image style={mediaScrollerItemImgStyle} src="/resources/shirt.jpg" alt="Shirt" width={"145"}  height={"170"} onMouseEnter={enlarge} onMouseLeave={shrink}/>
          <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '1.5', textAlign: 'left' }}>
            <br></br> <br></br>
            <p>Dive into refined sophistication with our signature shirts, available in three timeless hues. The classic black exudes understated elegance, while pristine cream adds a touch of sophistication. Opt for timeless white for a versatile and fresh appeal. Each shirt is meticulously crafted to elevate your style, providing a perfect canvas for any occasion. Explore the intersection of comfort and refinement with our shirt collection, where every color tells its unique story.</p>
            </div>
          </div>

          {/* Accessories */}
          <div style={mediaScrollerItemStyle} className="media-scroller-item">
          <div style={{ marginTop: '2rem', marginBottom: '2rem', color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '2.6', textAlign: 'left' }}>
            <h3>Accessories</h3>
          </div>
          <Image style={mediaScrollerItemImgStyle} src="/resources/access.jpg" alt="Accessories" width={"145"} height={"170"} onMouseEnter={enlarge} onMouseLeave={shrink}/>
          <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro', lineHeight: '1.5', textAlign: 'left' }}>
            <br></br> <br></br>
            <p>Complete your style journey with our curated accessories collection featuring beanies, watches, bracelets, hats, and socks. From head to toe, each piece is crafted to enhance your unique flair. Whether you're seeking cozy warmth, timeless elegance, or a bold statement, our accessories collection has you covered. Elevate your ensemble with these essential details, reflecting the perfect blend of fashion and function.</p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
