import './styles.modules.scss';
import imageHome from '../../../../assets/backgroundhome.png';
import imageLogo from '../../../../assets/Minha Logo.png';
import { useEffect, useState } from 'react';


function Home() {


    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newOpacity = Math.max(1.2 - scrollY / 350, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="container">
            <div className="background">
                
                <div className="background_img">
                    <img className="img" src={imageHome} alt="Background" />
                </div>

                <div className="logo" style={{ opacity }}>
                    <div className="logo_img">
                        <img className="imglogo" src={imageLogo} alt="Logo" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
