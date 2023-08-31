# React Forms - using useForm hook

In this repository, I have my implementation of forms in react. I tried to make it generic with each type of input being implemented in a separate component. I've done styling with popular framework of bootstrap utilizing its grid structure.

## Components

In the project directory, you will find:

### `Input`

A basic component which have only label and input elements. You can pass type of input, id, name, your styling classes, label and constraints to apply on the field as props. This input component will take advantage of useFormContext from react-hook-form to register the input value to the form component.

### `Select`

A basic component with label and select elements which can receive label, id, styling, constraints and options for select tag in the props.

### `Button`

A basic component which will receive type of button, value, styling and render a button on the DOM.

### `Column`

**I used bootstrap for implementing the grid structure!**

This component receives styling classes for the column div which will also specify the count of columns it will take out of the 12 available in a single row. Inside the column div, it just renders whatever is passed in the children of this component. It can be any element or event any other component.

### `Row`

This component is used to render a single row in the DOM. It receives styling for the row div, and 2 arrays in props; one for the classes of styling for individual columns and the other one for the children of those columns to pass. This gives us leverage of defining how much columns we want in our row and what should be the size of each.

### `App`

This is the main component where we will implement our form. I used the useForm hook of react and wrapped the form in FormProvider component which enables us to get the value of input fields from the nested components. You can define row components in the form and pass the fields to show on the row as children in an array.

This is just the initial version of the idea. The project is open for anyone for contribution. Whether you're fixing bugs, improving documentation, or adding new features, your contributions are greatly appreciated. Together, let's create something amazing!
