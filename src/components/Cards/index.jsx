import Card from "../Card";
import Paws from "../Paws";
import { MdOutlineSupportAgent, MdScience, MdVerifiedUser } from "react-icons/md";
import { IoFootsteps } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPoop } from "react-icons/fa";
import { SiFurrynetwork } from "react-icons/si";
import { GiSittingDog } from "react-icons/gi";

const Cards = () => {
  return (
    <section className="card-grid">
      <Card
        dataSal="zoom-in"
        text="Suporte¹ diretamente com o autor (Bruno Moreno)"
        icon={<MdOutlineSupportAgent size={28} />}
        paws={<Paws dataSal="fade" data-sal-duration="1000" />}
      />
      <Card
        dataSal="zoom-in"
        text="Passo a passo simplificado (fácil de entender)"
        icon={<IoFootsteps size={28} />}
        paws={
          <Paws dataSal="fade" data-sal-duration="1000" className="mirrored" />
        }
      />
      <Card
        dataSal="zoom-in"
        text="Método com base científica"
        icon={<MdScience size={28} />}
        paws={<Paws dataSal="fade" data-sal-duration="1000" />}
      />
      <Card
        dataSal="zoom-in"
        text="Funciona em qualquer tipo de moradia"
        icon={<FaHouseChimney size={28} />}
        paws={
          <Paws dataSal="fade" data-sal-duration="1000" className="mirrored" />
        }
      />
      <Card
        dataSal="zoom-in"
        text="Xixi e cocô no lugar certo na média de 15 a 20 dias²"
        icon={<FaPoop size={28} />}
        paws={<Paws dataSal="fade" data-sal-duration="1000" />}
      />
      <Card
        dataSal="zoom-in"
        text="Funciona se outros métodos não deram certo"
        icon={<SiFurrynetwork size={28} />}
        paws={
          <Paws dataSal="fade" data-sal-duration="1000" className="mirrored" />
        }
      />
      <Card
        dataSal="zoom-in"
        text="Funciona para leigos"
        icon={<MdVerifiedUser  size={28} />}
        paws={<Paws dataSal="fade" data-sal-duration="1000" />}
      />
      <Card
        dataSal="zoom-in"
        text="Funciona para qualquer raça"
        icon={<GiSittingDog size={28} />}
      />
    </section>
  );
};

export default Cards;
