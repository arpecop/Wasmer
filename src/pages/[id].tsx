const Jumbotron = () => {
  return (
    <div className="bg-gray-100">
    </div>
  );
}

export async function getServerSideProps() {
  const { id } = await params;
  const headersList = await headers(); // Access the headers
  const host = headersList.get("host"); // Get the 'host' header
  const respx = (await client(
    `query MyQuery($_eq: String = "8ca43771", $_eq1: Int = 3) {
  questions(where: {genid: {_eq: $_eq}}) {
    id
    genid
    text
    type
    random
  }
  users_comments(where: {genid: {_eq: $_eq}}) {
    id
    parid
    comments: commentsr {
      id
      parid
    }
  }
  vectorgenid(args: {genid: $_eq}) {
    genid
    text
    type
    random
  }
}`,
    { _eq: id },
  )) as [ItemT[], TreeNode[], ItemT[]];
  const question = respx[0].find((x) => x.type === "q") as ItemT;
  const answer = respx[0].find((x) => x.type === "a");
  const questions = respx[2].filter((x) => x.type === "q") || [];
  const answers = respx[2].filter((x) => x.type === "a") || [];
  const similarGenids = questions.map((x) => x.genid);
  const thread = similarGenids
    .map((x) => ({
      q: questions.find((y) => y.genid === x),
      a: answers.find((y) => y.genid === x),
    }))
    .filter((x) => x.q)
    .slice(0, 28) as { q: ItemT; a: ItemT }[];
  //return { question, answer, questions, answers, thread };
  const md = await marked(answer?.text || "");
  return {
    props: {
      question,
      answer,
      thread,
      md,
    },
  };
}
export default Jumbotron;


