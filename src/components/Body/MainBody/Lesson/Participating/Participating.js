import List from "./List";
import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
function Participating() {
  const testData = {};

  return (
    <>

        <div className="boxTitleParticipating">
            <h2 className="titlePar">Participating</h2>

            <div className="nextCoursesParticipating">
                <div className="arrowCoursesParticipating" style={{color : "#a8a8a8"}}>
                    more &nbsp;
                </div>
                <div className="kickArrowCoursesParticipating" style={{color : "#a8a8a8"}}>
                    <StartOutlinedIcon/>
                </div>

            </div>
        </div>
      <List />
    </>
  );
}
export default Participating;
