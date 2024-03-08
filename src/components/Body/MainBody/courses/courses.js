import List from "./list";

function Courses() {
  const testData = {};

  return (
    <>
      <h2 className="titleCourses">Courses</h2>
      <List />
      {/* {testData.map((item) => {
        return <List />;
      })} */}
    </>
  );
}
export default Courses;
