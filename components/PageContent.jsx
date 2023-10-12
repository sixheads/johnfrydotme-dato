export default function PageContent({ data }) {
  const { page } = data;
  return (
    <div>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.pageIntro }} />
    </div>
  );
}
