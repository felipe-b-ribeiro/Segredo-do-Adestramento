import "sal.js/dist/sal.css";
import { FaPaw } from "react-icons/fa";
import { SC_Main } from "./styles";
import { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import Carrossel from "../../components/Carrossel";
import CTA from "../../components/CTA";
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/logo.webp";
import sal from "sal.js";
import OfertaCard from "../../components/OfertaCard";
import Selo from "../../components/Selo";
import SuporteSection from "../../components/SuporteSection";

const Index = () => {
  useEffect(() => {
    sal({
      once: false,
      threshold: 0.5,
    });
  }, []);

  const [viewportWidth, setViewportWidth] = useState(
    document.documentElement.clientWidth * 0.88,
  );

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setViewportWidth(document.documentElement.clientWidth * 0.88);
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gridWidth =
    viewportWidth <= 1024 ? viewportWidth * 0.86 : viewportWidth * 0.4;

  return (
    <>
      <SC_Main id="animated-sec">
        <FaPaw
          data-sal="slide-left"
          data-sal-duration="1000"
          size={300}
          className="back-paw"
          color="#444444"
        />
        <FaPaw
          data-sal="slide-right"
          data-sal-duration="1000"
          size={300}
          className="back-paw"
          color="#444444"
        />
        <img
          data-sal="fade"
          data-sal-duration="1000"
          className="logo"
          width="100"
          src={Logo}
          alt="Logo do Bruno Moreno"
        />
        <h1 data-sal="zoom-out" data-sal-duration="2000" className="headline">
          Nunca mais sofra com
          <strong> xixi e cocô no lugar errado</strong>!
        </h1>
        <iframe
          data-sal="zoom-out"
          data-sal-duration="1500"
          className="vsl"
          src="https://www.youtube.com/embed/WWls36k4VLM?si=waz72MRzJBOD4Ca1&modestbranding=1&rel=0&controls=0&iv_load_policy=3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h3 data-sal="fade">
          Passo a passo para nunca mais ter surpresas desagradáveis do seu
          cachorro.
        </h3>
        <CTA dataSal="zoom-in" text="Quero o passo a passo" />
        <h1 data-sal="zoom-out" className="subheadline">
          Veja o Instagram do Bruno:
        </h1>
        <img
          data-sal="zoom-in"
          data-sal-duration="1000"
          className="instagram-pic"
          src={Instagram}
          alt="Instagram do Bruno Moreno"
        />
        <section className="secondary breakout">
          <h1 data-sal="zoom-out" className="subheadline">
            Quem é o Bruno? Por que confiar?
          </h1>
          <Carrossel
            dataSal="zoom-in"
            baseWidth={gridWidth}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop
            round={false}
          />
          <p data-sal="fade">
            Este é Bruno Moreno.
            <strong>Campeão Mundial de Agility em 2008</strong> (e ainda ativo
            nas competições), adestrador de cães
            <strong> há mais de 20 anos</strong>. Com
            <strong> mais de 10 mil cães educados</strong>, ele já adestrou cães
            de famosos<sup>[1]</sup>, é adestrador da agência Pet Art
            <sup>[2]</sup> e também participou de um adestramento de cachorros
            para a <strong>campanha comercial de um grande banco</strong>
            <sup>[3]</sup>.
          </p>
          <small data-sal="fade">
            1- Fotos no Instagram (
            <a href="https://www.instagram.com/segredodoadestramento/">
              <strong>@segredodoadestramento</strong>
            </a>
            )
            <br />
            2- Instagram (
            <a href="https://www.instagram.com/flaviapetarte">
              <strong>@flaviapetarte</strong>
            </a>
            )
            <br />
            3- Post da gravação (
            <a href="https://www.instagram.com/reel/DT0Y7njEeY2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
              <strong>clique aqui</strong>
            </a>
            )
            <br />
            <strong>
              <b>IMPORTANTE:</b>
            </strong>
            O banco e os famosos que contrataram os seus serviços além da
            agência em que trabalha não tem nenhum vínculo com esse produto.
          </small>
          <h1 data-sal="zoom-out" className="subheadline">
            O que você pode esperar do nosso ebook?
          </h1>
          <Cards />
          <CTA dataSal="zoom-in" text="Quero adquirir agora!" />
          <small data-sal="fade">
            <strong>1-</strong> Suporte diretamente com ele depois da compra do
            produto.
            <br />
            <strong>2-</strong> É apenas uma média, não quer dizer que todos os
            cachorros vão seguir esse mesmo padrão.
          </small>
        </section>
        <h1 data-sal="zoom-out" className="subheadline">
          Este é o produto que irá <strong>acabar com esses problemas</strong>
        </h1>
        <p data-sal="fade">
          O método usado no ebook é o do <strong>reforço positivo</strong>. Que
          consiste em recompensar as ações que você quer que seu cachorro
          repita. O produto está separado em <strong>três capítulos</strong>
          (ele possui <strong>xx páginas</strong>):
        </p>
        <Carrossel
          dataSal="zoom-in"
          itemsType="ebook"
          black={true}
          baseWidth={gridWidth}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop
          round={false}
        />
        <p data-sal="fade">
          Além disso, você também recebe esse mesmo ebook, mas só que em áudio.
        </p>
        <h1 data-sal="zoom-out" className="subheadline">
          Como acessar?
        </h1>
        <p data-sal="fade" className="mb-40">
          Depois da compra, você vai verificar o seu email porque o ebook e o
          audiobook serão enviado no email que você tiver informado na hora da
          compra (então tenha cuidado, certifique-se que ele é o correto). O
          endereço de email que vai lhe enviar o produto é
          <strong>“jeawfoijfowijfowfjioewjwoiojewfweio”</strong>.
        </p>
        <section className="secondary breakout">
          <h1 data-sal="zoom-out" className="subheadline">
            Entenda que...
          </h1>
          <p className="mb-20" data-sal="fade">
            Tanto o produto quanto o profissional são bem capacitados para lhe
            ajudar a acabar com os problemas de xixi e cocô do seu cachorro.
          </p>
          <OfertaCard dataSal="zoom-in" card="1" />
          <h1 data-sal="zoom-out" className="subheadline">
            Agora a <strong>escolha</strong> é sua.
          </h1>
          <p className="mb-20" data-sal="fade">
            Comprando agora, é isso que você vai receber:
          </p>
          <OfertaCard card="2" />
        </section>
        <h1 className="subheadline" data-sal="zoom-out">
          E se eu me arrepender da compra?
        </h1>
        <Selo dataSal="zoom-in" />
        <p data-sal="fade">
          Se caso isso acontecer, você tem uma garantia amparada pelo artigo 49
          da Lei nº 8.078 do Código de Defesa do Consumidor que diz que você
          pode receber TODO o seu dinheiro de volta com correção monetária se
          desistir da sua compra no prazo de 7 DIAS a partir do recebimento ou
          da compra do produto. Então, dentro desses 7 DIAS, você pode nos
          mandar uma mensagem pedindo o seu reembolso.
        </p>
        <CTA dataSal="zoom-in" text="Quero adquirir agora" />
        <SuporteSection />
        <section className="secondary breakout">
          <h1 data-sal="zoom-out" className="subheadline">
            Possíveis Dúvidas
          </h1>
          <div className="question-grid">
            <details data-sal="zoom-out" name="questions">
              <summary>Preciso de muito tempo para aplicar?</summary>
              <p>
                Depende. Se o seu cachorro já for adulto, ele mesmo vai fazer o
                xixi no local. Se ele for filhote, será necessário que você o
                leve ao local (tendo que investir mais tempo e atenção).
              </p>
            </details>
            <details data-sal="zoom-out" name="questions">
              <summary>O cachorro pode desaprender depois?</summary>
              <p>
                Ele "desaprende" apenas se você parar de dar as recompensas,
                pois ele não vai mais se sentir motivado para continuar com o
                comportamento. Assim como nós não continuamos um comportamento
                se não formos recompensados.
              </p>
            </details>
            <details data-sal="zoom-out" name="questions">
              <summary>
                E se eu não consequir aplicar o método corretamente?
              </summary>
              <p>
                Você pode enviar uma mensagem para o Bruno para pedir ajuda e
                tirar as suas dúvidas diretamente com ele.
              </p>
            </details>
            <details data-sal="zoom-out" name="questions">
              <summary>E se eu tiver mais de um cachorro?</summary>
              <p>
                O método continua sendo o mesmo. Você só vai direcioná-los para
                fazer o xixi e o cocô no mesmo lugar.
              </p>
            </details>
            <details data-sal="zoom-out" name="questions">
              <summary>
                O cachorro vai voltar a errar quando eu estiver fora?
              </summary>
              <p>
                Depois que ele aprender a fazer no local correto, ele não vai
                errar se você agir corretamente.
              </p>
            </details>
          </div>
        </section>
        <footer className="breakout">
          <p>
            <span>
              <a href="">Política de Privacidade</a>
              <a href="">Termos de Uso</a>
              <a href="">Política de Reembolso</a>
            </span>
            <span>
              <strong>Pirataria é crime</strong>, portanto copiar, recriar ou
              redistribuir o produto sem a devida permissão é
              <strong> proibido</strong>.
            </span>
            <img
              className="logo"
              width="100"
              src={Logo}
              alt="Logo do Bruno Moreno"
            />
            <span>Copyright © {new Date().getFullYear()} by Bruno Moreno</span>
            <span>
              Made with 💙 by
              <a href="https://github.com/felipe-b-ribeiro" target="blank">
                <strong> Felipe Dev</strong>
              </a>
            </span>
          </p>
        </footer>
      </SC_Main>
    </>
  );
};

export default Index;
