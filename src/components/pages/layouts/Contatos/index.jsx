import imageLua from '../../../../assets/Contatosimg.png';
import { FaLinkedin, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

import './styles.modules.scss';

function Contatos() {
    return (
        <section id="contatos">
            <div className="container_contatos">
                <div className="titlecontatos">
                    <div className="title">
                        <div className="linha"></div>
                        <h2>Contatos</h2>
                        <div className="linha"></div>
                    </div>
                </div>

                <div className="meialua">
                    <div className="image-meialua">

                        <div className="image-icon">
                            <a
                                href="https://wa.me/+5521998484258?text=mensagem"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="img" src={imageLua} alt="Background" />
                                <FaMobileAlt className="icon mobile" />
                            </a>
                        </div>

                        <div className="image-icon">
                            <a
                                href="mailto:mariagabrielaoliveiracoutinho@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="img" src={imageLua} alt="Background" />
                                <FaEnvelope className="icon email" />
                            </a>
                        </div>

                        <div className="image-icon">
                            <a
                                href="https://www.linkedin.com/in/maria-gabriela-o-coutinho-3117b4259/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="img" src={imageLua} alt="Background" />
                                <FaLinkedin className="icon linkedin" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contatos;
