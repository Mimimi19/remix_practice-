interface ListItemProps {
  children: React.ReactNode;
}

export const ListItem = (props: ListItemProps) => {
  return (
    <button className="bg-slate-700 text-white px-4  border-4 rounded-full flex justify-center rounded-tl-full shadow-xl rotate-0 skew-y-0 skew-x-0">
      {props.children}
    </button>
  );
};
