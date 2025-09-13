import Card from './common/Card';
import CardContent from './common/CardContent';
import CardImage from './common/CardImage';
import CardTitle from './common/CardTitle';
import { produts } from '../Products';

function Features() {
  return (
    <section id="features" className="container mx-auto py-16">
      <h2 className="font-bold font-serif text-2xl mb-16 text-center">Ürünlerimiz</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
        {produts.map((product, index) => (
          <Card key={index}>
            <CardImage src={product.src} alt={product.alt} />
            <CardContent>
              <CardTitle>{product.title}</CardTitle>
              <p>{product.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Features