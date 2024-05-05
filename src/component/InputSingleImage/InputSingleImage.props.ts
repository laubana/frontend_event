import { ImageType } from "react-images-uploading";

export type Sizing = "small" | "medium" | "large";

export interface InputSingleImageProps {
  label?: string;
  image?: ImageType;
  setImage: (image: ImageType) => void;
  error?: string;
  sizing?: Sizing;
}
