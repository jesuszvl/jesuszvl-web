import BlogContent from "../src/components/BlogContent/BlogContent";
import { trackPageView } from "../src/utils/analytics";
import PageContainer from "../src/components/PageContainer/PageContainer";

const messages = [
  "Almost done 😪",
  "Wait for it... 🤵‍♂️",
  "I swear it worked on my computer 😅",
  "Looks like the gremlins got into the code again 😨",
  "It'll be home for Christmas 🎁",
  "This is not the blog you looking for ✨",
  "Yes! Well... Who's hungry? 🦖",
];

trackPageView("/blog");

export default function Blog({ message }) {
  return (
    <PageContainer title="Jesus ZVL | Blog">
      <BlogContent message={message} />
    </PageContainer>
  );
}

export async function getServerSideProps() {
  const message = messages[Math.floor(Math.random() * messages.length)];
  return {
    props: {
      message,
    },
  };
}
