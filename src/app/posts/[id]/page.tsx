import PostHeaderWrapper from "@/components/post-header-wrapper";
import TableOfContent from "@/components/table-of-content";
import { getAllPostsData, getPostData } from "@/lib/posts";
import { getRandomNumber } from "@/lib/utils";
import './style.css';

export async function generateStaticParams() {
  const allPostsData = await getAllPostsData('all')
  return allPostsData.map((article) => {
    return {
      id: article.id
    }
  })
}

async function Post({ params } : {params: {id: string}}) { 
  const postData = await getPostData(params.id)
  const tableOfContent = postData.tableOfContent
  
  return (
    <>
    <PostHeaderWrapper
      title={postData.title}
      description={postData.description}
      heroNumber={getRandomNumber()}
      category={postData.category}
    />
    <div className="relative grid grid-cols-8"> {/* Add justify-center class */}
      <article className="prose prose-sm prose-code:text-balance grid col-start-1 col-end-9 p-3  md:col-start-3 md:col-end-7  lg:prose-xl mx-auto">
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
      </article>
      <div className="sticky top-3 left-3 h-2 mt-12 col-start-7 col-end-9 prose hidden lg:block">
        <TableOfContent
          contents={tableOfContent}
        />
      </div>
    </div>
    </>
  )
}

export default Post
