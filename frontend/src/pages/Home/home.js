import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../assets/components/navBar';
import './home.css';
import Logopng from '../../assets/img/agrovecpng.png';
import produtos from '../../assets/img/produtox.png';
import Footer from '../../assets/components/footer';
import Logopngwhite from '../../assets/img/agrovecpngwhite.png';


export default function Home() {

  return (

    <section>

      <div className="backGround">
        {/* NAVBAR */}
        <NavBar image={Logopngwhite} cor="#fff" />

        {/* APRESENTAÇÃO */}
        <div className="apresentacao">
          <h2>- Bem-vindo a Agrovec -</h2>
          <h1>FÁBRICA DE RAÇÃO PARA ANIMAIS</h1>
        </div>
        
        {/* LOGO APRESENTAÇÃO */}
        <div className="midpage">
          <div className="logos">
            <img src={Logopng} alt="" />
          </div>
          
          {/* TEXTO APRESENTAÇÃO */}
          <div className="fabricacao">
            <h2>Nossa Filosofia</h2>
            <h1>FABRICAÇÃO COM EXELÊNCIA</h1>
            <p>AGROVEC (Fábrica de alimentos para animais) visa a excelência<br></br>
              na prestação de serviços, inovação e satisfação dos clientes<br></br>
              assegurando nossa expansão e desenvolvimento.</p>
            
            {/* BOTÃO APRESENTAÇÃO */}
            <button className="button" type="subtmit">LEIA MAIS</button>
          </div>
        </div>

        {/* PRODUTOS */}
        <div className="produtos">
          <h1>NOSSOS PRINCIPAIS PRODUTOS</h1>
        </div>

        {/* LISTA DE PRODUTOS */}
        <div className="produtosv">
          <div className="produto">
            <img src={produtos} alt="" />
            <h3>PRODUTO 1</h3>
            <h4>Descrição do produto</h4>
            <li>
              <Link to="">Confira mais sobre ➔ </Link>
            </li>
          </div>

          <div className="produto">
            <img src={produtos} alt="" />
            <h3>PRODUTO 2</h3>
            <h4>Descrição do produto</h4>
            <li>
              <Link to="">Confira mais sobre ➔  </Link>
            </li>
          </div>

          <div className="produto">
            <img src={produtos} alt="" />
            <h3>PRODUTO 3</h3>
            <h4>Descrição do produto</h4>
            <li>
              <Link to="">Confira mais sobre ➔ </Link>
            </li>
          </div>

          {/* ENDPAGE */}
        </div>
        <div className="endpagemae">
          <div className="endpage">
            <div className="textos">
              <h2>Diretamente da nossa fábrica</h2>
              <p>"Todos os nossos produtos sempre passam por um longo, completo e primoroso<br></br> processo de produção, com objetivo de entregar sempre o melhor para<br></br> nossos clientes, e garantindo a  maior qualidade já vista no mercado."
              </p>
            </div>
          </div>
          <div class="textos2">
            <h1>O MELHOR PARA O <br></br>
              NOSSO CLIENTE!
            </h1>
            {/* BOTAO ENDPAGE */}
            <button className="button2" type="subtmit">PRODUTOS</button>
          </div>
        </div>

        {/* FOOTER */}

        <footer>
          <Footer />
        </footer>
      
      </div>
    </section >

  )
}
