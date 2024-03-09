import "./MainBody.css";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function MainBody() {

    return (
        <>
            <div className="mainBody">
                <div className="search">
                    <input type="text" placeholder={"Search for Course"}/>
                    <button type={"submit"}><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
                </div>
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

            </div>

        </>
    );
}
