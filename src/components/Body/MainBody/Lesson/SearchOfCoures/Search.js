import "./Search.css"
export default function Search() {
    return (
        <>
            <div className="searchCourse">
                <input type="text" placeholder={"Search for Course"}/>
                <button type={"submit"}><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
            </div>
        </>
    )
}