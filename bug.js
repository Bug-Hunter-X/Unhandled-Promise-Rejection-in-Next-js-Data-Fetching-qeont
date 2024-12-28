```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate a fetch call that sometimes fails
  const data = fetch('https://api.example.com/about')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      return { error: 'Failed to fetch data' };
    });

  return (
    <div>
      <h1>About Page</h1>
      {/* This will render the error message if data fetching fails */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```