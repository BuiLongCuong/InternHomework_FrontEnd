import "./Lesson.css";
import Courses from "./courses/courses";
import Participating from "./Participating/Participating";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Categories from "./Categories/Categories";
import Search from "./SearchOfCoures/Search";

export default function Lesson() {

    return (
        <>
            <div className="bodyLesson">
                <div className="search">
                    <Search/>
                </div>
                <Categories/>
                <Courses />
                <Participating />
            </div>

        </>
    );
}
