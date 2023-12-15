    import React from "react";
    import Link from "next/link";
    import Image from "next/image";
    
    export default function Collaboration() {
        const mediaItems = [
        ];
    
        const enlarge = (e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.transition = 'width 0.2s ease-in-out, height 0.2s ease-in-out';
        };
    
        const shrink = (e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.transition = 'width 0.2s ease-in-out, height 0.2s ease-in-out';
        };
    
        const mediaScrollerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflowX: 'auto',
            gap: '4rem',
            padding: '2rem 0',
          };
          
          const mediaItemStyle = {
            minWidth: 'auto',
            overflow: 'hidden',
            borderRadius: '8px',
            position: 'relative',
            transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out',
          };
        
          const mediaScrollerItemImgStyle = {
            width: '80%',
            height: 'auto',
            transition: 'width 0.2s ease-in-out',
            marginLeft: 'auto',
            marginRight: 'auto',
          };

        return (
            <div style={{marginTop: '5rem'}}>     
                <div style={{ color: '#4D4D4D', fontSize: '23px', fontFamily: 'Monospace', lineHeight: '1.6', textAlign: 'center', marginBottom: '1rem', }}>
                <strong>Curate Your Style: Exploring Trendy Fashion and Beyond</strong>
                <p>Welcome to StreetTrend Central, where urban style takes center stage. Step into a world where every garment tells a story, and each accessory is a statement waiting to be made. Our curated collections, from trendsetting hoodies to versatile cargo pants and statement accessories, redefine streetwear. Explore the intersection of comfort and style as you navigate the fashion landscape. With StreetTrend Central, every homecoming is a celebration of your unique fashion narrative. Join us and make the streets your runway, where your style meets the heartbeat of the city.</p>
                </div>   
                <div style={mediaScrollerStyle} className="media-scroller">
                    {mediaItems.map((item, index) => (
                        <Link href={item.href} key={index}>
                            <div style={index === 0 ? mediaItemStyle: mediaItemStyle}>
                                <Image 
                                    style={mediaScrollerItemImgStyle} 
                                    src={item.src} 
                                    alt={item.alt}
                                    width={150}
                                    height={150} 
                                    onMouseEnter={enlarge}
                                    onMouseLeave={shrink}
                                />
                            </div>
                        </Link>
                    ))}
                </div>      
            </div>
        );     
    }
    
    
    

