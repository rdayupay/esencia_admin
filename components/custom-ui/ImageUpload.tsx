import { CldUploadWidget } from 'next-cloudinary';
import { Plus } from 'lucide-react';
import Image from 'next/image';

import { Button } from '../ui/button';

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  onRemove,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((url) => (
          <Image
            src={url}
            key={url}
            alt="collections image"
            className="object-cover rounded-lg"
            width={200}
            height={200}
          />
        ))}
      </div>
      <CldUploadWidget uploadPreset="lc5k3zph" onSuccess={onUpload}>
        {({ open }) => {
          return (
            <Button onClick={() => open()} className="bg-grey-1 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
