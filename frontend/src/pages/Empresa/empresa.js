import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiMail, FiPhone, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './empresa.css';
import fabrica from '../../assets/img/fabrica.jpg';
import logofooter from '../../assets/img/logofooter.png'
import certificado from '../../assets/img/certificado.png';
import certificado123 from '../../assets/img/certificado123.jpg';
import Logopng from '../../assets/img/agrovecpng.png';
import NavBar from "../../assets/components/navBar";


export default function empresa() {
  return (
    <section>

   <div className="fachada">
      {/* NAVBAR */}

      <NavBar image={Logopng}/>


      {/* TEXTO APRESENTAÇÃO */}
      <div className="midpageempresa">
        <div className="fabricacaoempresa">
          <h2>Nossa História</h2>
          <h1>AGROVEC DO BRASIL</h1>
          <p>AGROVEC (Fábrica de alimentos para animais) visa a excelência<br></br>
            na prestação de serviços, inovação e satisfação dos clientes<br></br>
            assegurando nossa expansão e desenvolvimento.</p>
        </div>
      </div>
     

      {/* Certificado*/}

      <div className="certificado">
        <div className="txtcertificado">
          <img src={certificado} alt="" />
          <h1>NOSSOS CERTIFICADOS</h1>
          <img src={certificado} alt="" />
        </div>
      </div>
      <div className="certificados">
        <img src={certificado123} alt="" />
        <img src={certificado123} alt="" />
        <img src={certificado123} alt="" />

      </div>

      {/* Historia */}
      <div className="historiamae">
        <div className="historia">
          <h3>SOBRE A AGROVEC</h3>
          <p className="paragrafo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu laoreet diam. Etiam quis lacus ut risus scelerisque pellentesque at quis felis. Pellentesque at mauris in lectus varius laoreet. Nullam scelerisque dictum metus at dapibus. Proin pharetra feugiat dui, eget congue urna facilisis eu. Donec ornare, massa at lacinia mollis,
            <br></br>
            <br></br>
            Proin eu ante lacus. In cursus nisl nulla, a euismod augue rutrum eget. Morbi efficitur ante eu bibendum viverra. Integer sollicitudin condimentum metus sed pharetra. Vestibulum porttitor velit magna, ut dapibus nulla pharetra et. Donec id libero nisi. Integer ornare, massa vitae tempor consectetur, diam mi varius mi, ut ultrices urna velit scelerisque lectus. Donec elementum gravida ligula eu vehicula.
          </p>
        </div>
        <div className="imagem1">
          <img src={fabrica} alt="" />
        </div>

        {/* Producao */}
      </div>
      <div className="producaomae">
        <div className="imagem2">
          <img src={fabrica} alt="" />
        </div>
        <div className="producao">

          <h3>PRODUÇÃO</h3>
          <p className="paragrafo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu laoreet diam. Etiam quis lacus ut risus scelerisque pellentesque at quis felis. Pellentesque at mauris in lectus varius laoreet. Nullam scelerisque dictum metus at dapibus. Proin pharetra feugiat dui, eget congue urna facilisis eu. Donec ornare, massa at lacinia mollis,
            <br></br>
            <br></br>
            Proin eu ante lacus. In cursus nisl nulla, a euismod augue rutrum eget. Morbi efficitur ante eu bibendum viverra. Integer sollicitudin condimentum metus sed pharetra. Vestibulum porttitor velit magna, ut dapibus nulla pharetra et. Donec id libero nisi. Integer ornare, massa vitae tempor consectetur, diam mi varius mi, ut ultrices urna velit scelerisque lectus. Donec elementum gravida ligula eu vehicula.
          </p>
        </div>
      </div>

      {/* Fábrica */}
      <div className="fabricamae">
        <div className="fabrica">
          <h3>FÁBRICA</h3>
          <p className="paragrafo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu laoreet diam. Etiam quis lacus ut risus scelerisque pellentesque at quis felis. Pellentesque at mauris in lectus varius laoreet. Nullam scelerisque dictum metus at dapibus. Proin pharetra feugiat dui, eget congue urna facilisis eu. Donec ornare, massa at lacinia mollis,
            <br></br>
            <br></br>
            Proin eu ante lacus. In cursus nisl nulla, a euismod augue rutrum eget. Morbi efficitur ante eu bibendum viverra. Integer sollicitudin condimentum metus sed pharetra. Vestibulum porttitor velit magna, ut dapibus nulla pharetra et. Donec id libero nisi. Integer ornare, massa vitae tempor consectetur, diam mi varius mi, ut ultrices urna velit scelerisque lectus. Donec elementum gravida ligula eu vehicula.
          </p>
        </div>
        <div className="imagem3">
          <img src={fabrica} alt="" />
        </div>
      </div>


      {/* RODAPÉ*/}
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
                    <FiPhone size={65} color="b87333" style={{ paddingRight: 13, marginTop: 12, }} />
                    Fábrica<br></br>
                    (88)99999-9999
                  </li>
                  <li className="numero">
                    <FaWhatsapp size={70} color="b87333" style={{ padding: 10, marginLeft: -10 }} />
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
                      <a href="">
                        <FiFacebook
                          className="facebook-icon"
                          size={40} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FiInstagram className="instagram-icon" size={40} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FiMail className="email-icon" size={40} />
                      </a>
                    </li>
                    <li>
                      <a href="">
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

</div>
    </section>

  )




}