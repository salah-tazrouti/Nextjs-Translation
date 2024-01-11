import { useRouter } from 'next/router';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  let content;
  if (slug === 'Art') content = <Blog1/>;
  else if (slug === 'It') content = <Blog2/>;
  else if (slug === 'World') content = <Blog3/>;
  else content = 'Post undefined';

  return (<p>{content}</p>);
};

export default Post;
