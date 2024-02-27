import img01 from "../assets/images/logo.svg";

export const About = () => {
  return (
    <article className="panel" id="about">
      <h2>About</h2>
      <div className="textContainer">
        <img src={img01} alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          reiciendis quam, enim esse voluptas amet cupiditate ducimus culpa
          molestiae ipsum voluptates atque libero harum facilis sint et ab eos
          quia?
        </p>
      </div>
      <div className="textContainer">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          reiciendis quam, enim esse voluptas amet cupiditate ducimus culpa
          molestiae ipsum voluptates atque libero harum facilis sint et ab eos
          quia?
        </p>
        <img src={img01} alt="" />
      </div>
      <div className="textContainer">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          reiciendis quam, enim esse voluptas amet cupiditate ducimus culpa
          molestiae ipsum voluptates atque libero harum facilis sint et ab eos
          quia?
        </p>
        <img src={img01} alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          reiciendis quam, enim esse voluptas amet cupiditate ducimus culpa
          molestiae ipsum voluptates atque libero harum facilis sint et ab eos
          quia?
        </p>
      </div>
    </article>
  );
};
