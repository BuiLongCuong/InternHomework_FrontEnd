import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "./Categories.css"

export default function ListCategory() {
    return (
        <>
            <div className="categories">
                {/*<div className="back"></div>*/}
                <div className="generality">
                    <div className="categoryDetail">
                        <div className="imgCategory">
                            <img src="" alt=""/>
                        </div>
                        <div className="nameCategory">
                            Tiếng Pháp
                        </div>
                    </div>
                    <div className="categoryDetail">
                        <div className="imgCategory">
                            <img src="" alt=""/>
                        </div>
                        <div className="nameCategory">
                            Tiếng Anh
                        </div>
                    </div>
                    <div className="categoryDetail">
                        <div className="imgCategory">
                            <img src="" alt=""/>
                        </div>
                        <div className="nameCategory">
                            Tiếng Đức
                        </div>
                    </div>
                    <div className="categoryDetail">
                        <div className="imgCategory">
                            <img src="" alt=""/>
                        </div>
                        <div className="nameCategory">
                            CNTT
                        </div>
                    </div>
                    <div className="categoryDetail">
                        <div className="imgCategory">
                            <img src="" alt=""/>
                        </div>
                        <div className="nameCategory">
                            Tiếng Hàn
                        </div>
                    </div>
                    <div className="categoryDetail">
                        <div className="imgCategory">
                            <img src="" alt=""/>
                        </div>
                        <div className="nameCategory">
                            Tiếng Nhật
                        </div>
                    </div>
                </div>
                <button className={"nextCategory"}>
                    <ArrowForwardIosOutlinedIcon/>
                </button>
            </div>
        </>
    )
}