
import classes from "./Form.module.css";

export const CountdownForm = () => {
    return (
      <section className={classes.player}>
        <h4>Welcome unknown entity</h4>
        <p>
          <input type="text" />
          <button>Set Name</button>
        </p>
      </section>
    );
  };