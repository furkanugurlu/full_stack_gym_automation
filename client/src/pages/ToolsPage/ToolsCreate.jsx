import React from "react";
import { Helmet } from "react-helmet";
import { Formik, Field, Form } from "formik";
import { Input, SelectBox } from "../../components/FormItems";
import { ToolsValid } from "../../validations";

const ToolsCreate = () => {
  return (
    <div>
      <Helmet>
        <title>ArenaGYM - Eşyalar</title>
      </Helmet>
      <Formik
        onSubmit={(values) => console.log(values)}
        initialValues={{
          name: "",
          surname: "",
          gender: "",
        }}
        validationSchema={ToolsValid}
      >
        {(props) => (
          <Form>
            <Input name="name" placeholder="bir değer gir" />
            <Input name="surname" placeholder="bir değer gir" />
            <SelectBox
              name="gender"
              options={[
                { key: 1, value: "Kadın" },
                { key: 2, value: "Erkek" },
              ]}
            />
            <button type="submit">Gönder</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { ToolsCreate };
