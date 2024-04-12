# 21- Programmatic Routing

For simple links we can use the following:
```bash
import Link from "next/link";


<Link href={`${params.productId}/reviews/1`}>See Reviews</Link>
```

For routing programmatically:
```bash
import { useRouter } from "next/navigation";

const router = useRouter();
router.push("/");


```
