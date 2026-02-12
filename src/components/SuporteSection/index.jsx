import { SC_SuporteSection } from "./styles"
import { FaWhatsapp } from "react-icons/fa";

const Index = () => {
  return (
    <SC_SuporteSection>
      <div>
        <h1 data-sal='zoom-out'>
          Ainda lhe restou alguma dúvida?
        </h1>
        <h3 data-sal='zoom-out'>
          Nos mande uma <br /> mensagem no WhatsApp.
        </h3>
      </div>
      <button data-sal='zoom-in'>
        <FaWhatsapp color='white' size={22} />
        Clique aqui
      </button>
    </SC_SuporteSection>
  )
}

export default Index