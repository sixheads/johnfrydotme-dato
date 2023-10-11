import { Suspense } from 'react';
import { performRequest } from '../lib/datocms';
import WorkGallery from '@/components/WorkGallery';

const PAGE_CONTENT_QUERY = `query Home {
  homePage {
    id
    title
    pageIntro
  }
}`;

export default async function Home() {
  const pageContent = await performRequest({
    query: PAGE_CONTENT_QUERY,
    // variables: { limit: 10 },
  });

  console.log(pageContent);

  return (
    <main className="">
      <h1>Hello Dato</h1>
      <Suspense fallback={<p>Loading directories...</p>}>
        <WorkGallery />
      </Suspense>
    </main>
  );
}
