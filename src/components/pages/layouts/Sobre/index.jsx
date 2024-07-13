import './styles.modules.scss';
import imageEstrela from '../../../../assets/Estrelas.png';
import imageMabi from '../../../../assets/Mabi.png';

function Sobre() {
    return (
        <div className="containerabout">
            <div className="estrela_img">
                <img className="img" src={imageEstrela} alt="Estrelas" />
                
                <div className="linhatopo"></div>

                <div className="content">
                    <div className="sobre">
                        <h2>Sobre mim</h2>
                        <p>Estou fazendo Design Gráfico na Uninter. Tenho 6 anos de
                            estudo sobre Design com experiência no software Adobe,
                            recentemente comecei os estudos no Web Design tendo como
                            base o Figma, html, css.
                            Estou a procura de experiência profissional.</p>
                    </div>

                    <div className="mabi_img">
                        <img className="img" src={imageMabi} alt="Maria Gabriela" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
