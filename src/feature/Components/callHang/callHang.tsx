import Action from "../action/action";
import Display from "../display/display";

function callHang() {
  return (
    <div className="callHang">
      <Display />
      <Action actionToShow="Call" />
      <Action actionToShow="Hang" />
    </div>
  );
}
export default callHang;
