import { SC_Card } from './styles';

const Index = ({text, paws, dataSal, icon}) => {
  return (
    <SC_Card data-sal={dataSal}>
        {icon}{text}
        {paws}
    </SC_Card>
  )
}

export default Index;