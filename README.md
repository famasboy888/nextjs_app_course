# 09 - Catch all segment routes

# Single Dynamic routes

We use `[ ]` to capture dynamic routes.

For example:

If route is localhost/docs/docId,

folder structure should look like this:

```bash
├───docs
│   ├───[docId]
|   |
```

You will be to access value via `params.docId`

# Catch-all Dynamic routes

We use `[...slug]` to capture an array list string of dynamic routes.

For example:

If route is localhost/docs/docId/1/details/200,

```bash
├───docs
│   ├───[...slug]
|   |   |
|   |   ├───page.tsx
```

We can access the following via `params.slug[]`

```bash
console.log(params.slug);

Output:
[ 'docId', '1', 'details', '200']
```