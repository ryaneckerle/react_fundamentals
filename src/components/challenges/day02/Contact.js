const Contact = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <p>
        Age: {props.age}
        {'  '}
        School: {props.school}
        {'  '}
        GraduationYear: {props.graduationYear}
      </p>
    </>
  );
};

export default Contact;
