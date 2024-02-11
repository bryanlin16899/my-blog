import PostList from '@/app/posts/components/postList.server';
import PostsPage from './components/post-page';
import './styles.css';

function Page() {
    return (
        <>
        <PostsPage>
            <PostList category='all' />
        </PostsPage>
        </>
    );
}

export default Page