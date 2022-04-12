import React from "react";
import Local from '../../assets/img/local.png';
import "./contato.css";
import Logo from '../../assets/img/LOGOAGROVEC.jpg';
import { Link } from 'react-router-dom';
import logofooter from '../../assets/img/logofooter.png';
import { FiMapPin, FiMail, FiPhone, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import NavBar from "../../assets/components/navBar";



export default function Contato() {

  return (

    <section>

      {/* NAVBAR */}
      <NavBar image={Logo}/>
    
      {/* TÍTULO */}    
        <div className="titulo">
          <h1>PERGUNTAS FREQUENTES</h1>
        </div>
        <div className="caixa">
          <select class="form-select" aria-label="Default select example">
            <option selected>Selecione uma das opções abaixo</option>
            <option value="1">Como realizar uma compra</option>
            <option value="2">Como realizar cadastro</option>
            <option value="3">Como realizar login</option>
            <option value="4">Como se tornar um fornecedor</option>
            <option value="5">Certificados de venda e qualidade</option>
            <option value="6">Qualidade dos produtos</option>
            <option value="7">Pontos de venda</option>
            <option value="8">Formas de pagamento</option>
            <option value="9">Como realizar compras maiores</option>
          </select>
        </div>    



      {/* SUBTÍTULO */}
      <div className="subtitulo">
        <h1>ENTRE EM CONTATO</h1>
      </div>

      {/* SUBTÍTULO */}
      <div className="divcontato">
        <h3>FAÇA SUA PERGUNTA</h3>
        <div className="introducao">
          <h3>NOSSA EMPRESA</h3>
        </div>
      </div>
      <div className="introducao">
        <h5>Envie uma mensagem com sua dúvida, que entraremos em contato.</h5>
      </div>

      {/*Formulário */}
      <div className="divimagem">
        <div>
          <form className="form">

            <label>
              Nome: <br></br>
              <input className="caixatxt" placeholder="  Insira seu nome aqui" />
            </label>
            <br></br>

            <label>
              E-mail: <br></br>
              <input className="emailtxt" placeholder="  Insira seu e-mail" />
            </label>
            <br></br>

            <div>
              <label>
                Mensagem: <br></br>
              </label>
            </div>

            <div className="textomsg">
              <textarea rows="6" cols="69" placeholder="  Insira uma mensagem aqui">
              </textarea>
            </div>
          </form>

          {/*IMAGEM*/}
        </div>
        <img src={Local} alt="mapa" />
      </div>

      {/*BOTÃO*/}
      <div>
        <button className="button1" type="subtmit">ENVIAR</button>
      </div>


































      {/*RODAPÉ */}

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
            {/* coluna 1 */}
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
                      <Link>EMPRESA</Link>
                    </li>
                    <li>
                      <Link>CONTATO</Link>
                    </li>
                  </ul>
                </div>
              </ui>
            </div>
            {/* Coluna 2 */}
            <div className="col-3">
              <h5>SIGA NOSSAS<br></br> REDES SOCIAIS</h5>
              <ui className="list-unstyled">
                <div className="redesociais">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/elojobimprove">
                        <FiFacebook
                          className="facebook-icon"
                          size={40}
                        />
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

          <hr />
          <div className="row">
            <p className="col-sm" style={{ textAlign: 'center' }}>
              ©2021 Agrovec do Brasil. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>



    </section>


  )
}