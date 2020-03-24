import Meta from "./Meta";
import Header from "./Header";

const Page = ({ children }) => {
  return (
    <>
      <Meta></Meta>
      <Header></Header>
      {children}
    </>
  );
};

export default Page;
