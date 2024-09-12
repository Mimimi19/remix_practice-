interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph = (props: ParagraphProps) => {
  return (
    <p className="font-thin text-2lx block text-base text-slate-600">
      {"「" + props.children + "」"}
    </p>
  );
};
