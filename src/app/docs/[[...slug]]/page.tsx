export default function Docs({ params }: {
    params: {
        slug: string[];
    }
}) {
    let retVal: any = '';

    if (params.slug?.length === 2) {
        retVal = (<h1>Feature: {params.slug[0]}, Concept: {params.slug[1]}</h1>);
    } else if (params.slug?.length === 1) {
        retVal = (<h1>Feature: {params.slug[0]}</h1>);
    }else{
        retVal = (<h1>Docs Home page</h1>);
    }

    return (retVal); 
}