import { Formik, Form, Field } from "formik";

const FORM_INITIAL_VALUES = {
  photoSearch: "",
};

const SearchBar = ({ onSearchQuery }) => {
  const submitForm = (values) => {
    onSearchQuery(values.photoSearch);
  };

  return (
    <header>
      <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={submitForm}>
        <Form>
          <Field
            type="text"
            name="photoSearch"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
