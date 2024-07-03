import SyncLoader from "react-spinners/SyncLoader";

type Props = {
  color: string;
};

export default function TextLoader({ color }: Props) {
  return <SyncLoader color={color} />;
}
