// () => { }
// component =html +css +js
// JSX : 1 parent
// fragment
import "./style.css";

// const hoidanit = 1312; //number
const hoidanit = [1, 2, 3];
const MyComponent = () => {
  return (
    <>
      <div> {JSON.stringify(hoidanit)} & hoidanit update</div> // tag
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};

export default MyComponent;
