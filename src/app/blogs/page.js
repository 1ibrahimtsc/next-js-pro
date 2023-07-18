//"use client";
import Link from "next/link";
//import { useRouter } from "next/navigation";

export const metadata = {
  title: "Blogs || Next Hero",
  description: "Next Hero",
};

const blogs = [
  {
    id: 1,
    year: 2016,
    title: "title 1",
  },
  {
    id: 2,
    year: 2016,
    title: "title 2",
  },
  {
    id: 3,
    year: 2016,
    title: "title 3",
  },
  {
    id: 4,
    year: 2016,
    title: "title 4",
  },
  {
    id: 5,
    year: 2016,
    title: "title 5",
  },
];

const BlogsPage = () => {
  // const router = useRouter();
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, year, title }) => (
        <Link
          className="block border border-blue-500 p-2 my-2"
          href={{
            pathname: `/blogs/${year}/${id}`,
            query: {
              title: title,
            },
          }}
          //href={`/blogs/${year}/${id}`} // may pass this way
          // onClick={() => router.push(`/blogs/${year}/${id}?title=${title}`)}
          //onClick={() => router.replace(`/blogs/${year}/${id}?title=${title}`)}
          // onClick={() => router.back()}
          //onClick={() => router.forward()}
          key={id}
        >
          {title}
        </Link>

        //<button
        //className="block border border-blue-500 p-2 my-2"
        //href={{
        //  pathname: `/blogs/${year}/${id}`,
        //  query: {
        //    title: title,
        //  },
        // }}
        //href={`/blogs/${year}/${id}`} // may pass this way
        // onClick={() => router.push(`/blogs/${year}/${id}?title=${title}`)}
        //onClick={() => router.replace(`/blogs/${year}/${id}?title=${title}`)}
        // onClick={() => router.back()}
        //onClick={() => router.forward()}
        //key={id}
        //>
        //</div>{title}
        //</button>
      ))}
    </div>
  );
};

export default BlogsPage;
