import "./courses.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function List() {
  return (
    <>
      <div className="layoutCourses">
        <div className="coursesList">
          <div className="imgCourses"></div>
          <div>
            <h3>A1,A2,Basic users</h3>
            <p>15 Units</p>
          </div>
        </div>
        <div className="coursesList">
          <div className="imgCourses"></div>
          <div>
            <h3>A1,A2,Basic users</h3>
            <p>15 Units</p>
          </div>
        </div>
        <div className="coursesList">
          <div className="imgCourses"></div>
          <div>
            <h3>A1,A2,Basic users</h3>
            <p>15 Units</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default List;
