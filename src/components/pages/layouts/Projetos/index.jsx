import './styles.modules.scss';

import imageTwitch from '../../../../assets/twitch.jpg';
import imageCafe from '../../../../assets/cafe.jpg';
import imageDesenho from '../../../../assets/desenho.jpg';
import imageEstrelasproj from '../../../../assets/Estrelas divisão de página.png';

function Projetos() {
    return (
        <section id="projetos">
      
        <div className="containerprojetos">
            <div className="tituloproj">
                <div className="titulo">
                    <div className="linha"></div>
                    <h2>Projetos</h2>
                    <div className="linha"></div>
                </div>
            </div>

            <div className="projetos">
                <a href="https://www.behance.net/gallery/202702233/Overlay-Twitch-Mabizinha" target="_blank" rel="noopener noreferrer">
                    <img src={imageTwitch} alt="Twitch" />
                    <span className="projeto-text">Overlay Twitch</span>
                </a>
                <a href="https://www.behance.net/gallery/174656797/Les-Mots-Et-les-Caf-e-Livraria" target="_blank" rel="noopener noreferrer">
                    <img src={imageCafe} alt="Cafe" />
                    <span className="projeto-text">Les Mots Et les</span>
                </a>
                <a href="https://www.behance.net/gallery/190251281/Arte-para-o-Toshiruz" target="_blank" rel="noopener noreferrer">
                    <img src={imageDesenho} alt="Desenho" />
                    <span className="projeto-text">Arte para o Toshiruz</span>
                </a>
            </div>

            <div className="endproj">
            <img src={imageEstrelasproj} alt="Desenho" />
            </div>
        </div>
        </section>
    );
}

export default Projetos;
