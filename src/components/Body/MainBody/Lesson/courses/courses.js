import List from "./list";
import StartOutlinedIcon from '@mui/icons-material/StartOutlined';

function Courses() {
  const testData = {};

  return (
    <>
        <div className="boxTitle">
            <h2 className="titleCourses">Courses</h2>

            <div className="nextCourses">
                <div className="titleNext" style={{color : "#a8a8a8"}}>
                    more &nbsp;
                </div>
                <div className="kickNext" style={{color : "#a8a8a8"}}>
                    <StartOutlinedIcon/>
                </div>

            </div>
        </div>
      <List />
      {/* {testData.map((item) => {
        return <List />;
      })} */}
    </>
  );
}
export default Courses;
