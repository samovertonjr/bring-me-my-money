import Head from "next/head";
import fetch from "isomorphic-unfetch";

function Home({ user }) {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Prisma + Tailwind Proof of Concept
          </h2>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            {user.firstName} {user.lastName} ~ {user.email}
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
          <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <p className="text-5xl leading-none font-extrabold text-indigo-600">
                    100%
                  </p>
                  <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                    Pepperoni
                  </p>
                </div>
                <div className="border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <p className="text-5xl leading-none font-extrabold text-indigo-600">
                    24/7
                  </p>
                  <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                    Delivery
                  </p>
                </div>
                <div className="border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <p className="text-5xl leading-none font-extrabold text-indigo-600">
                    100k
                  </p>
                  <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                    Calories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const USER_QUERY = `
  query getUser {
    user(userId: "jacob@uscca.com") {
      id
      email
      firstName
      lastName
    }
  }
`;

Home.getInitialProps = async ctx => {
  const res = await fetch("http://localhost:4000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: USER_QUERY })
  });

  const json = await res.json();
  return json.data;
};

export default Home;
