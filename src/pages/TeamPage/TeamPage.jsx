import classes from './TeamPage.module.css';

const TeamPage = () => {
  return (
    <section className={classes.heroSection}>
      <div className={classes.cardGrid}>
        <a className={classes.card} href="/teams/webAndCreatives">
          <div className={classes.cardBackground} style={{ backgroundImage: "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)" }}></div>
          <div className={classes.cardContent}>
            <h3 className={classes.cardHeading}>Faculty Coordinators</h3>
          </div>
        </a>
        <a className={classes.card} href="#">
          <div className={classes.cardBackground} style={{ backgroundImage: "url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)" }}></div>
          <div className={classes.cardContent}>
            <h3 className={classes.cardHeading}>Sponsorship Team</h3>
          </div>
        </a>
        <a className={classes.card} href="#">
          <div className={classes.cardBackground} style={{ backgroundImage: "url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)" }}></div>
          <div className={classes.cardContent}>
            <h3 className={classes.cardHeading}>Web Development Team</h3>
          </div>
        </a>
        <a className={classes.card} href="#">
          <div className={classes.cardBackground} style={{ backgroundImage: "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)" }}></div>
          <div className={classes.cardContent}>
            <h3 className={classes.cardHeading}>Design Team</h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default TeamPage;
