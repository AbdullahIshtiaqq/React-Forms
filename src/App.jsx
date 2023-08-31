import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import Input from "./Components/input";
import Select from "./Components/select";
import Row from "./Components/row";
import Button from "./Components/button";

export default function App() {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className="container p-5">
        <h6 className="text-left mb-3">Patient Information</h6>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Row
            rowClasses="row justify-content-center"
            colClasses={["col-6 form-group", "col-6 form-group"]}
            columns={[
              <Input
                id="firstname"
                name="firstname"
                label="First Name"
                type="text"
                classes="form-control"
                constraints={{
                  required: "This is required",
                }}
              />,
              <Input
                id="lastname"
                name="lastname"
                label="Last Name"
                type="text"
                classes="form-control"
                constraints={{
                  required: "This is required",
                }}
              />,
            ]}
          />

          <Row
            rowClasses="row justify-content-left"
            colClasses={["col-6 form-group"]}
            columns={[
              <Input
                id="dob"
                name="dob"
                label="Date of Birth"
                type="date"
                classes="form-control"
                constraints={{
                  required: "This is required",
                }}
              />,
            ]}
          />

          <Row
            rowClasses="row justify-content-center"
            colClasses={["col-6 form-group", "col-6 form-group"]}
            columns={[
              <Input
                id="email"
                name="phoneno"
                label="Phone No."
                type="number"
                classes="form-control"
                constraints={{
                  required: "This is required",
                  maxLength: { value: 10, message: "Length should be 10." },
                  minLength: { value: 10, message: "Length should be 10." },
                }}
              />,
              <Input
                id="email"
                name="email"
                label="Email"
                type="email"
                classes="form-control"
                constraints={{
                  required: "This is required",
                  pattern: {
                    value:
                      /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/,
                    message: "Invalid Email.",
                  },
                }}
              />,
            ]}
          />

          <Row
            rowClasses="row justify-content-left"
            colClasses={["col-12 form-group"]}
            columns={[
              <Input
                id="address"
                name="address"
                label="Address"
                type="text"
                classes="form-control"
                constraints={{}}
              />,
            ]}
          />

          <Row
            rowClasses="row justify-content-center"
            colClasses={[
              "col-6 form-group",
              "col-3 form-group",
              "col-3 form-group",
            ]}
            columns={[
              <Input
                id="city"
                name="city"
                label="City"
                type="text"
                classes="form-control"
                constraints={{}}
              />,
              <Select
                id="state"
                name="state"
                label="State"
                options={["Select State", "Option1", "Option2", "Option3"]}
                classes="form-select"
                constraints={{}}
              />,
              <Input
                id="zipcode"
                name="zipcode"
                label="Zip Code"
                type="number"
                classes="form-control"
                constraints={{
                  maxLength: { value: 5, message: "Length should be 5." },
                  minLength: { value: 5, message: "Length should be 5." },
                }}
              />,
            ]}
          />

          <h6 className="text-left mt-3 mb-3">Guardian Information</h6>

          <Row
            rowClasses="row justify-content-center"
            colClasses={["col-6 form-group", "col-6 form-group"]}
            columns={[
              <Input
                id="guardianfirstname"
                name="guardianfirstname"
                label="First Name"
                type="text"
                classes="form-control"
                constraints={{}}
              />,
              <Input
                id="guardianlastname"
                name="guardianlastname"
                label="Last Name"
                type="text"
                classes="form-control"
                constraints={{}}
              />,
            ]}
          />

          <Row
            rowClasses="row justify-content-end"
            colClasses={["col-1"]}
            columns={[
              <Button classes="btn btn-primary" type="text" value="Submit" />,
            ]}
          />
        </form>
      </div>
    </FormProvider>
  );
}
