'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function ModalContent({ photo, id }: { photo: any; id: string }) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* OVERLAY CLICKEABLE */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/50 z-40 cursor-pointer"
      >
        <span className="sr-only">Close</span>
      </div>

      {/* MODAL */}
      <div className="relative z-50 bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{photo.title}</h2>

        <Image
          src={photo.url}
          alt={photo.title ?? 'Photo'}
          width={300}
          height={300}
          unoptimized
          className="rounded"
        />

        <button
          onClick={handleClose}
          className="block mt-6 w-full text-center text-blue-600 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
