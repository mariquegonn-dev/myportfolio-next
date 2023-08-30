type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <section className="mx-auto max-w-[800px]">{children}</section>
    </>
  );
};
