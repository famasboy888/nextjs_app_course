export default function Docs({ params }: {
    params: {
        slug: string[];
    }
}) {
    // if (params.slug.length ===2)
    console.log(params.slug);
    
    return (
        <h1>Docs Home page</h1>
    );
}