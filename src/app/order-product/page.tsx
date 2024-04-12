"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OrderProduct(){

    const router = useRouter();

    const orderNowHandler = () => {
        console.log("Order success!");
        router.push("/");
    } 

    return ( 
        <>
        <Link href="/products">Link to products</Link>
        <h1>Order Product</h1>
        <button onClick={orderNowHandler}>Order Now!</button>
        </>
    );
}