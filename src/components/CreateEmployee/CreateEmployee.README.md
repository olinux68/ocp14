# CreateEmployee Component

## Description
The `CreateEmployee` component is used to create a new employee by filling out a form with various fields such as first name, last name, date of birth, start date, address, and department. It includes a date picker and a modal for confirmation.

## Usage
Import the component and include it in your JSX:

```jsx
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (
    <div>
      <CreateEmployee />
    </div>
  );
}

export default App;
```

## Props
- `firstName`: The first name of the employee.
- `lastName`: The last name of the employee.
- `dateOfBirth`: The date of birth of the employee.
- `startDate`: The start date of the employee.
- `street`: The street address of the employee.
- `city`: The city of the employee.
- `state`: The state of the employee.
- `zipCode`: The zip code of the employee.
- `department`: The department of the employee.
