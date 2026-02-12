import { SC_Selo } from "./styles.js";
import SeloFundo from "../../assets/selo/selo-fundo.webp";
import SeloConteudo from "../../assets/selo/selo-conteudo.webp";

const Index = ({ dataSal }) => {
  return (
    <SC_Selo data-sal={dataSal} data-sal-duration="800">
      <img src={SeloFundo} alt="Fundo do Selo de Garantia" />
      <img src={SeloConteudo} alt="Conteúdo do Selo de Garantia" />
      <svg viewBox="0 0 100 100">
        <path
          id="circle"
          d="M 50,50 m -33.8,0 a 33.8,33.8 0 1,1 67.6,0 a 33.8,33.8 0 1,1 -67.6,0"
          fill="none"
        />
        <text font-size="7">
          <textPath href="#circle" startOffset="0%">
          GARANTIA AMPARADA POR LEI • GARANTIA AMPARADA POR LEI •
          </textPath>
        </text>
      </svg>
    </SC_Selo>
  );
};

export default Index;
