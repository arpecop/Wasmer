export async function client(query: string, variables = {}) {
  const response = await fetch("http://130.204.65.82:8080/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  const data = (await response.json()) as {
    data: { [key: string]: unknown };
    errors: unknown[];
  };

  if (data.data) {
    return Object.values(data.data);
  }
  if (data.errors) {
    console.error(JSON.stringify(data.errors));
  }
  return [];
}
export const jsonGoogle = (title: string, description: string, id: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: title,
      text: title,
      answerCount: 3,
      upvoteCount: 26,
      datePublished: "2024-02-14T15:34-05:00",
      author: {
        "@type": "Person",
        name: "Mary Stone",
        url: "https://rudix.store",
      },
      acceptedAnswer: {
        "@type": "Answer",
        text: "1 pound (lb) is equal to 16 ounces (oz).",
        image: "https://example.com/images/conversion-chart.jpg",
        upvoteCount: 1337,
        url: id,
        datePublished: "2024-02-14T16:34-05:00",
        author: {
          "@type": "Person",
          name: "Julius Fernandez",
          url: "https://example.com/profiles/julius-fernandez",
        },
      },
      suggestedAnswer: [
        {
          "@type": "Answer",
          text: description,
          upvoteCount: 42,
          url: id,
          datePublished: "2024-02-14T15:39-05:00",
          author: {
            "@type": "Person",
            name: "Kara Weber",
            url: "https://example.com/profiles/kara-weber",
          },
          comment: {
            "@type": "Comment",
            text: description,
            datePublished: "2024-02-14T15:40-05:00",
            author: {
              "@type": "Person",
              name: "Mary Stone",
              url: "https://example.com/profiles/mary-stone",
            },
          },
        },
      ],
    },
  };
};
