export default function ProductDetails({ params }: {
    params: {
        productId: string
    }
}) {
    return (
        <h1>This is product details {params.productId}</h1>
    );
}