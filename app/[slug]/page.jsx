import PageContent from '@/components/PageContent';
import { performRequest } from '@/lib/datocms';

export async function generateStaticParams() {
  const { allPages } = await performRequest({
    query: `{ allPages { slug } }`,
  });

  return allPages.map(({ slug }) => slug);
}

const PAGE_CONTENT_QUERY = `query PageBySlug($slug: String) {
  page(filter: {slug: {eq: $slug}}) {
    id
    title
    pageIntro(markdown: true)
  }
  allPages {
    id
    slug
    pageIntro(markdown: true)
    title
  }
}`;

function getPageRequest(slug) {
  return { query: PAGE_CONTENT_QUERY, variables: { slug } };
}

export default async function Page({ params }) {
  const pageRequest = getPageRequest(params.slug);
  const data = await performRequest(pageRequest);
  console.log(data);
  return <PageContent data={data} />;
}
