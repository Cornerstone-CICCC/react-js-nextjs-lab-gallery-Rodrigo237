import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";


async function getPhotos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();

    return data.map((p: any) =>({
        ...p,
        url: "https://placehold.co/600",
        thumbnailUrl: "https://placehold.co/150",
    }));
}

export default async function GalleryPage(){
    const user = (await cookies()).get("gallery-user");

    if(!user){
        return <div className="p-10 text-red-600">Access denied</div>
    }

    const photos = await getPhotos();

    return(
        <div className="p-10 grid grid-cols-4 gap-4">
            {photos.slice(0,20).map((photo: any) =>(
                <Link key={photo.id} href={`/gallery/${photo.id}`}>
                    <Image
                        src={photo.thumbnailUrl}
                        alt={photo.title}
                        width={150}
                        height={150}
                        unoptimized
                        className="rounded shadow cursor-pointer"
                    />
                </Link>       
            ))}
        </div>
    )
}