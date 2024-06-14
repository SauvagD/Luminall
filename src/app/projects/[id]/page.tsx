import SingleProjectPage from "@/components/project/single-project/single-project-page";

const Page = ({ params }: any) => {
  return <SingleProjectPage reference={params.id} />;
};

export default Page;
