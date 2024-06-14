import { getProject } from "@/lib/data";
import SingleProjectImages from "./single-project-images";

const SingleProjectPage = ({ reference }: { reference: string }) => {
  const project: any = getProject(reference);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col align-center">
        <h1 className="shadow text-white text-center font-bold text-5xl pt-6 pb-2">
          {project.title}
        </h1>
        <SingleProjectImages images={project.images} />
        <div className="text-center p-6 xs:text-normal lg:text-2xl text-white lg:max-w-[80%] mx-auto">
          {project.description}
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
