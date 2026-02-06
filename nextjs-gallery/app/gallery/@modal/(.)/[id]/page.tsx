import { ModalContent } from "../../ModalContent";


async function getPhoto(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const p = await res.json();

  return {
    ...p,
    url: "https://placehold.co/600",
    thumbnailUrl: "https://placehold.co/150",
  };
}

export default async function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const photo = await getPhoto(id);

  return <ModalContent photo={photo} id={id} />;
}
