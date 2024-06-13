type Props = {
  children: React.ReactNode;
  onClose: (openCasterModal: boolean) => void;
};

export default function CasterModal({ children, onClose }: Props) {
  return (
    <section
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose(false);
      }}
      className="flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-70 z-10"
    >
      <div className="flex bg-white bg-opacity-80 w-52 h-72 rounded-md overflow-hidden">
        {children}
      </div>
      ;
    </section>
  );
}
