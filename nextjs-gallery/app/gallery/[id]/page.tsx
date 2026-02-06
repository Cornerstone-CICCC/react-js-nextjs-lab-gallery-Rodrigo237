import Image from "next/image";

async function getPhoto(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const p = await res.json();

    return {
        ...p,
        url: "https://placehold.co/600", 
        thumbnailUrl: "https://placehold.co/150",
    };
}

export default async function PhotoPage({params}: {params: Promise<{id: string}>}){
    const {id} = await params;
    const photo = await getPhoto(id)

    return(
        <div className="p-10">
            <h1 className="text-2xl mb04">{photo.title}</h1>
            <Image src={photo.url} alt={photo.title ?? 'Photo'} width={600} height={600} unoptimized></Image>
        </div>
    )
}
