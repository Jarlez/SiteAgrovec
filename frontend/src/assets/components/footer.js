import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiMail, FiPhone, FiFacebook, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import logofooter from '../../assets/img/logofooter.png'

export default function Footer() {
  return(
    <div className="main-footer">
          <div className="container-footer">
            <div className="row">
              {/* coluna 0 */}
              <div className="col">
                <h4 className="list-unstyled">
                  <img src={logofooter} alt="" />
                  <li className="endereco">
                    <FiMapPin size={25} color="b87333" style={{ padding: 5 }} />
                    AV. Davi Araújo Nobre – 45
                    <li className="bairro">Barro Branco. Crato-CE</li>
                  </li>
                  <li className="email">
                    <FiMail size={25} color="b87333" style={{ padding: 5 }} />
                    agrovecdobrasil@gmail.com
                  </li>
                </h4>
              </div>
              {/* coluna 1 */}
              <div className="col">
                <ui className="list-unstyled">
                  <div className="contatos">
                    <li className="numero">
                      <FiPhone size={70} color="b87333" style={{ padding: 10, marginTop: 5,marginLeft: -16 }} />
                      Fábrica<br></br>
                      (88)99999-9999
                    </li>
                    <li className="numero">
                      <FaWhatsapp size={70} color="b87333" style={{ padding: 10, marginLeft: -16 }} />
                      WhatsApp<br></br>
                      (88)99999-9999
                    </li>
                  </div>
                </ui>
              </div>
              {/* coluna 2 */}
              <div className="col">
                <ui className="list-unstyled">
                  <div className="bar">
                    <ul>
                      <li>
                        <Link>INÍCIO</Link>
                      </li>
                      <li>
                        <Link>PRODUTOS</Link>
                      </li>
                      <li>
                        <Link to="/Empresa">EMPRESA</Link>
                      </li>
                      <li>
                        <Link>CONTATO</Link>
                      </li>
                    </ul>
                  </div>
                </ui>
              </div>
              {/* Coluna 3 */}
              <div className="col-3">
                <h5>SIGA NOSSAS<br></br> REDES SOCIAIS</h5>
                <ui className="list-unstyled">
                  <div className="redesociais">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/elojobimprove">
                          <FiFacebook
                            className="facebook-icon"
                            size={40} />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <FiInstagram className="instagram-icon" size={40} />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <FiMail className="email-icon" size={40} />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <FaWhatsapp className="whatsapp-icon" size={40} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </ui>
              </div>
            </div>
            {/* DIREITOS RESERVADOS */}
            <hr />
            <div className="row">
              <p className="col-sm" style={{ textAlign: 'center' }}>
                ©2021 Agrovec do Brasil. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
  );
}