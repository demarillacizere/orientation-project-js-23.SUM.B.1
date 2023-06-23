import { Form as ReactRouterForm, useNavigation } from "react-router-dom";
import s from "./education.module.css";
import { Loader } from "../shared/loader/Loader";

export function Form() {
  const { state } = useNavigation();
  const showLoader = state === "submitting" || state === "loading";
  return (
    <ReactRouterForm className={s.formContainer} method="post">
      <div className={s.form2Col}>
        <label>
          Course:
          <input type="text" name="course" required />
        </label>
        <label>
          School:
          <input type="text" name="school" required />
        </label>
        <label>
          Start Date:
          <input type="date" name="start_date" required />
        </label>
        <label>
          End Date:
          <input type="date" name="end_date" required />
        </label>
        <label>
          Grade:
          <input
            type="text"
            name="grade"
            pattern="^(100(\.0{1,2})?|\d{1,2}(\.\d{1,2})?)%$"
          />
        </label>
        <label>
          Logo (URL):
          <input
            type="text"
            name="logo"
            pattern="^(http|https):\/\/[^\s\/$.?#]+\.[^\s]*$"
            required
          />
        </label>
      </div>
      <button type="submit" disabled={showLoader}>
        Create {showLoader && <Loader />}
      </button>
    </ReactRouterForm>
  );
}