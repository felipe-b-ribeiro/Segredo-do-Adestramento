import { SC_Main } from "./styles.js";
import Logo from "../../assets/logo.webp";
import { FaArrowLeft } from "react-icons/fa6";

const Index = ({ title, children }) => {
  return (
    <SC_Main>
      <div>
        <button onClick={() => history.back()}>
          <FaArrowLeft color="white" size={20} />
        </button>
        <img width={100} src={Logo} alt="Logo do Bruno Moreno" />
        <h2>{title}</h2>
      </div>
      {children}
      <footer>
        <img
          width="70"
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
      </footer>
    </SC_Main>
  );
};

export default Index;
