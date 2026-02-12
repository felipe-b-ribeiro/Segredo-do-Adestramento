import { SC_CTA } from "./styles"

const Index = ({text, dataSal, oferta}) => {
  return (
    <SC_CTA className={oferta ? 'oferta': ''} data-sal={dataSal} data-sal-duration="1000">
      <a href="">
          {text}
      </a>
      {oferta && (
            <>
            <div className="border-gradient-top" />
            <div className="border-gradient-bottom" />
            </>
      )}
    </SC_CTA>
  )
}

export default Index