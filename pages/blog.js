import { random } from "lodash";
import BlogContent from "../src/components/BlogContent/BlogContent";
import PageContainer from "../src/components/PageContainer/PageContainer";

const messages = [
  "Almost done 😪",
  "Wait for it... 🤵‍♂️",
  "I swear it worked on my computer 😅",
  "Looks like the gremlins got into the code again 😨",
  "It'll be home for Christmas 🎁",
  "This is not the site you looking for ✨",
  "Yes! Well... Who's hungry? 🦖",
  "I guess you guys aren’t ready for that yet, but your kids are gonna love it 🎸",
];

export default function Blog({ message }) {
  return (
    <PageContainer title="Jesús Zavala | Blog">
      <BlogContent message={message} />
    </PageContainer>
  );
}

export async function getServerSideProps() {
  const message = messages[Math.floor(random(messages.length - 1))];
  return {
    props: {
      message,
    },
  };
}
