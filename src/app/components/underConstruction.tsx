import Image from "next/image";

export default function UnderConstruction() {
  return (
    <>
      <div className="flex items-center justify-center mt-32">
        <div className="text-center">
          <div className="flex flex-wrap justify-center">
            <Image
              src={`/under_construction.gif`}
              width={150}
              height={150}
              alt="under construction icon"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            We&#39;re Building Something Awesome!
          </h1>
          <p className="text-gray-600 text-lg">
            This page is under construction. Please check back soon.
          </p>
        </div>
      </div>
    </>
  );
}
