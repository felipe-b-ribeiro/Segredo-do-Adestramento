import { SC_Card } from './styles';

const Index = ({text, children, dataSal}) => {
  return (
    <SC_Card data-sal={dataSal}>
        {text}
        {children}
    </SC_Card>
  )
}

export default Index;