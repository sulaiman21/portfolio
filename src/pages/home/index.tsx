import PageWithLayout from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return <div>Home Page</div>;
};

(HomePage as PageWithLayout).layout = BaseLayout;

export default HomePage;
