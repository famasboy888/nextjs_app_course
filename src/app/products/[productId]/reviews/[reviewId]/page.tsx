export default function ReviewDetails({ params }: {
    params: {
        reviewId: string
    }
}) {
    return (
        <>
            <h1>This is a review for Item {params.reviewId}</h1>
        </>
    );
}