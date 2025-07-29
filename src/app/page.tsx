import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { UploadButton } from "~/utils/uploadthing";
import { UploadDialog } from "./_components/upload-dialog";

async function Images() {
  const mockUrL = [
    "https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/5a/Satoru_Gojo_arrives_on_the_battlefield_%28Anime%29.png",
    "https://butwhytho.net/wp-content/uploads/2023/09/Gojo-Jujutsu-Kaisen-But-Why-Tho-2.jpg",
    "https://4149anuphj.ufs.sh/f/W02RH3vp9oqyIlO1VbSbTfvP0iDMHp7ByF1lNdmqa49hUrLW",
    "https://4149anuphj.ufs.sh/f/W02RH3vp9oqyQQfx9ZhQofydjSOcAtM83wuP4I5aT1znRebs",
  ];
  const images = mockUrL.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <div>
      <div className="p4 flex justify-end">
        <UploadDialog />
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="w-64 overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
          >
            <div className="relative aspect-video bg-white">
              <img
                src={image.url}
                alt={`Image ${image.id}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-3 text-center">
              <p className="text-sm font-medium">{image.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above to continue!
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-full w-full text-center text-2xl">
          Welcome back!
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}
