type Props = {
  children: React.ReactNode;
  openModal: boolean;
  toggleModal: (openModal: boolean) => void;
};

export default function CasterModal({
  children,
  openModal,
  toggleModal,
}: Props) {
  return (
    <section
      onClick={(e) => {
        if (e.target === e.currentTarget) toggleModal(!openModal);
      }}
      className="flex justify-center items-center fixed inset-0 bg-gray-600 bg-opacity-70 z-10"
    >
      <div className="flex bg-white w-52 h-72 rounded-md overflow-hidden">
        {children}
      </div>
      ;
    </section>
  );
}
