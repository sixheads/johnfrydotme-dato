import { performRequest } from '../lib/datocms';

const PAGE_CONTENT_QUERY = `query Home {
  allProjects {
    id
    name
    studio {
      studioLink
      studioName
    }
    technology {
      name
    }
    projectUrl
    featuredImage {
      responsiveImage(imgixParams: {fit: crop, w: "500", h: "294", auto: format}) {
        alt
        sizes
        height
        width
        src
        base64
      }
    }
  }
}`;

export default async function WorkGallery() {
  const pageContent = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: { limit: 10 },
  });

  return (
    <div>
      <h2>Work</h2>
      {pageContent.allProjects.map((project) => {
        return <div key={project.id}>{project.name}</div>;
      })}
    </div>
  );
}
