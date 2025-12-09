export async function getStaticPaths() {
  // const { params } = context;
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // const { params } = context;
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();
  return { props: { product } };
}

export default function Product({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} width="200" />
    </div>
  );
}
