import Link from "next/link";

export default function ProductDetails({ params }: {
    params: {
        productId: string
    }
}) {
    return (
        <>
            <h1>This is product details {params.productId}</h1>
            <Link href={`${params.productId}/reviews/1`}>See Reviews</Link>
        </>
    );
}