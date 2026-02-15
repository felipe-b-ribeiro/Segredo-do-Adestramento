import { MdVerified } from "react-icons/md";
import { FaRegCreditCard, FaPix } from "react-icons/fa6";
import { SC_OfertaCard1, SC_OfertaCard2 } from "./styles";
import CTA from "../CTA";

const Index = ({ card, dataSal }) => {
  if (card === "1")
    return (
      <SC_OfertaCard1 data-sal={dataSal} data-sal-duration="800">
        <h2>
          Com o nosso produto <br />
          você <strong>ACABA</strong> com:
        </h2>
        <p>
          <MdVerified color="#0f7fd1" /> O odor dentro de casa; <br />
          <MdVerified color="#0f7fd1" /> O xixi e cocô nos lugares errados; 
          <br />
          <MdVerified color="#0f7fd1" /> A frustração de tentar ensinar o
          cachorro, mas nada mudar.
        </p>
      </SC_OfertaCard1>
    );
  if (card === "2")
    return (
      <SC_OfertaCard2 data-sal={dataSal} data-sal-duration="800">
        <SC_OfertaCard1>
          <hr />
          <p>
            <MdVerified
              color="#29A744"
              data-sal="fade"
              data-sal-duration="800"
            /> 
            <span data-sal="fade" data-sal-duration="800" data-sal-delay='200'>
              Ebook de fácil entendimento e rápido de consumir;
            </span> 
            <br />
            <MdVerified
              color="#29A744"
              data-sal="fade"
              data-sal-duration="800"
            /> 
            <span data-sal="fade" data-sal-duration="800" data-sal-delay='400'>
              Xixi e cocô no lugar certo na média de 15 a 20 dias;
            </span> 
            <br />
            <MdVerified
              color="#29A744"
              data-sal="fade"
              data-sal-duration="800"
            /> 
            <span data-sal="fade" data-sal-duration="800" data-sal-delay='400'>
              Suporte diretamente com o profissional;
            </span> 
            <br />
            <MdVerified
              color="#29A744"
              data-sal="fade"
              data-sal-duration="800"
            /> 
            <span data-sal="fade" data-sal-duration="800" data-sal-delay='500'>
              Versão em áudio do ebook;
            </span> 
            <br />
            <MdVerified
              color="#29A744"
              data-sal="fade"
              data-sal-duration="800"
            /> 
            <span data-sal="fade" data-sal-duration="800" data-sal-delay='500'>
              Acesso imediato via e-mail.
            </span> 
            <br />
          </p>
          <h1 data-sal="zoom-out">Tudo isso por apenas...</h1>
          <div data-sal="zoom-out" data-aos-duration="800">
            <h1>
              12x de <strong>R$6,71</strong>
            </h1>
            <h5>ou R$67,90 à vista</h5>
            <div className="forma-pag">
              <span>
                <FaRegCreditCard color="white" size={25} />
                <FaPix color="white" size={25} />
              </span>
              Formas de pagamento
            </div>
          </div>
          <CTA dataSal='zoom-out' oferta text="Quero adquirir agora" />
          <p data-sal='fade'>
            Compra segura pela <strong>Hotmart</strong>.
          </p>
        </SC_OfertaCard1>
      </SC_OfertaCard2>
    );
};

export default Index;
