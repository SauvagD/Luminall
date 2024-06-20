import SingleProjectPage from "@/components/project/single-project/single-project-page";
import { getProject } from "@/lib/data";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const project: any = getProject(params.id);

  return {
    title: project.title,
    description: project.description,
    applicationName: "Base for Music",
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      url: "/projects/" + project.reference,
      images: [project.images],
    },
    twitter: {
      title: project.title,
      description: project.description,
      images: [project.images],
    },
    alternates: {
      canonical: "/projects/" + project.reference,
    },
  };
}

const jsonLd: any = async (reference: string) => {
  const project: any = getProject(reference);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.images[0],
    url: `https://luminal-studio/projects/${project.reference}`,
    inLanguage: "fr",
  };
};

const Page = async ({ params }: any) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd(params.id)),
        }}
      />
      <SingleProjectPage reference={params.id} />
    </>
  );
};

export default Page;
