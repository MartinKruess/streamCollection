import img01 from "../assets/images/logo.svg"
const paypal = "https://www.paypal.com/sdk/js?client-id=AajHqvewdsR8OZ5hqKA14nV3Zd9uX38pNu3NUBf9rcuFk_A5yFLg2iM8jZexnxpLQLF1v63SXdg47Cp6&currency=EUR"

export const Membership = () => {

  

    return (
      <article className="cardContainer" >
          <h2 id="membership">Membership</h2>
            <div className="card">
              <img src={img01} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor magni porro amet animi nam dolores culpa facere, possimus sint veritatis asperiores, accusantium tempora. Minus incidunt libero accusantium et dolore nesciunt!</p>
              <button className="offer"></button>
            </div>
            <div className="card">
              <img src={img01} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus at facere tempore? Consectetur quibusdam perferendis voluptate est modi, ipsum impedit excepturi nulla, laudantium odit vitae?</p>
              <button className="offer"></button>
            </div>
            <div className="card">
              <img src={img01} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate exercitationem vitae accusamus. Maiores, quam laudantium cumque error quisquam quaerat?</p>
              <button className="offer"></button>
              
              <div id="paypal"></div>
            </div>
        </article>
    )
}