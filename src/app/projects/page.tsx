const Page = () => {
  return (
    <div className="flex flex-col container mx-auto custom-screen-height">
      <h1 className="uppercase font-medium ">Projects</h1>
      <div>TAGS</div>
      <div className="grid project-grid gap-8 flex-1">
        <div className="border  border-yellow-300 rounded cursor-pointer"></div>
        <div className=" border border-yellow-300 rounded"></div>
        <div className="border border-yellow-300 rounded"></div>
        <div className="border border-yellow-300 rounded"></div>
        <div className="border border-yellow-300 rounded"></div>
        <div className="border border-yellow-300 rounded"></div>
        <div className="border border-yellow-300 rounded"></div>
        <div className="border border-yellow-300 rounded"></div>
        <div className="border border-yellow-300 rounded"></div>
      </div>
    </div>
  );
};

export default Page;
