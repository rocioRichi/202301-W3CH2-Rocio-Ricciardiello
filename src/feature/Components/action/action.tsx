type ActionsProp = { actionToShow: string };

function Action({ actionToShow }: ActionsProp) {
  return (
    <a href="#" className="hang active">
      {actionToShow};
    </a>
  );
}
export default Action;
