// () => { }
// component =html +css +js
// JSX : 1 parent
// fragment
import "./style.css";

const MyComponent = () => {
  return (
    <>
      <div> eric & hoidanit update</div> // tag
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};

export default MyComponent;
