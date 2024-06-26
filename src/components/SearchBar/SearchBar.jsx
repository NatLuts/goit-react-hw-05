import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

const SearchBar = ({ setSearchParams }) => {
  const initialValues = {
    search: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    setSearchParams(values.search ? { query: values.search } : {});
    values.target.value.query.reset();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <Field name="search" placeholder="Search movie" className={s.input} />
        <button type="submit" className={s.btn}>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
