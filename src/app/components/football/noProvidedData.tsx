export default function NoProvidedData({ title }: { title: string }) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="text-center mt-28">
        <h2 className="text-xl">Currently, there is no {title} data supported by API.</h2>
        <h4>Please check back soon.</h4>
        </div>
      </div>
    </>
  );
}
