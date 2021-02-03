/*
10 Little Monkey Challenge
Are you ready?
Create a button that when clicked you will subtract one monkey from the total. If it is zero you should display the following:
There is no more monkeys jumping on the bed
Otherwise you should display the following:
10 monkeys jumping on the bed one fell of and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed.
Create a new component
use useState
Initialize your monkey count to 10
*/
import React, { useState } from 'react';

const TenLittleMonkeys = () => {
  const [monkeys, setMonkeys] = useState(10);

  function decMonkeys() {
    return monkeys === 0 ? setMonkeys(10) : setMonkeys(monkeys - 1);
  }

  function display() {
    return monkeys === 0 ? (
      <p>There is no more monkeys jumping on the bed</p>
    ) : (
      <p>
        {monkeys} monkeys jumping on the bed one fell of and bumped his head.
        Momma called the doctor and the doctor said. No more monkeys jumping on
        the bed.
      </p>
    );
  }

  return (
    <>
      <p>{display()}</p>
      <button onClick={decMonkeys}>Monkeys jumping</button>
    </>
  );
};

export default TenLittleMonkeys;
