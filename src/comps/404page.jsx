import img404_01 from "../assets/images/img404_01.png"

export const Page404 = () => {
    return (
        <section className="errorSection">
            <h1 className="h1">Error 404</h1>
            <h2 className="h2">- Page not found</h2>
            <hr />
            <h3 className="h3">Welcome to the Void.</h3>
            <div>
                <img src={img404_01} alt="" />
            </div>
            <div>
                <p>If you have some time...</p>
                <div>
                    
                </div>
            </div>
            
        </section>
    )
}