import "./Header.css"

export default function Header() {
return (
    <>
        <div className="header">
            <div className="logo">
                <img src="/images/logo.png" alt=""/>
            </div>
            <div className="user">
                <div className="userDetails">
                    <div className="imgUser"></div>
                    <div className="nameUser">
                        Bùi Long Cường
                    </div>
                </div>
            </div>
        </div>
    </>
)
}