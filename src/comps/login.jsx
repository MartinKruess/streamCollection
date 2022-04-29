import "../App.scss";
export const Login = () => {
    return (
        <section>
          <article className="signArticle">
            <form action="#" className="form">
              <label htmlFor="ln">LoginName</label>
              <input type="text" id="ln"/>
              <label htmlFor="lp">LoginPassword</label>
              <input type="password" id="lp" />
              <input type="button" value="SignIn" />
            </form> 
          </article>
        </section>
   
    )
}