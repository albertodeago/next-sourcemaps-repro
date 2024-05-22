## Reproduction of Next.js sourcemaps issues

```bash
npm install
npm run build
npm run start
```

Open the app in the browser (`localhost:3000`), open the devtools and navigate through the pages.
If you try to open (in the source panel) the sourcemaps relative to the `/content/[subject]/[method]/index.page.tsx` page, you will see that the sourcemaps are not there (chrome will show a 404 error).

This happens to all the `index.page.tsx` pages with a dynamic route (`[whatever]`) with a level deeper than 1.
Note that it doesn't happen in a page that has a name different than `index` (e.g. `/content/[subject]/[method]/named.page.tsx`)

## Expected behavior

The sourcemaps should be there and should be correctly mapped to the original source files for all the pages, no matter the dynamic nesting level.
